Payees = new Meteor.Collection('payees');

Payees.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

Meteor.methods({
    payee: function(payeeAttributes) {
        var user = Meteor.user(),
            payeeWithSameEmail = Payees.findOne({
                email: payeeAttributes.email,
                userId: payeeAttributes.userId
            });

        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login!");
        // ensure form validation
        if (!payeeAttributes.email)
            throw new Meteor.Error(422, 'Please fill in at least the text');
        // check that there are no previous records that would be duplicates
        if (payeeAttributes.email && payeeWithSameEmail) {
            throw new Meteor.Error(302,
                'You already have a record for that text!',
                payeeWithSameEmail._id);
        }

        // pick out the whitelisted keys
        var payee = _.extend(_.pick(payeeAttributes,
            'name',
            'email',
            'type',
            'quota',
            'start_date',
            'end_date',
            'manager',
            'team',
            'comp_plan',
            'variable_comp',
            'payout_schedule',
            'capped',
            'capped_pct'
        ), {
            userId: user._id,
            created: new Date().getTime()
        });

        var payeeId = Payees.insert(payee);
        var payeeEmail = payee.email;
    }
});