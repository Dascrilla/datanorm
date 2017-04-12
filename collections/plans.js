Plans = new Meteor.Collection('plans');

Plans.allow({
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
    plan: function(payeeAttributes) {
        var user = Meteor.user(),
            planWithSameNameUser = Plans.findOne({
                name: planAttributes.name,
                userId: planAttributes.userId
            });

        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login!");
        // ensure form validation
        if (!planAttributes.email)
            throw new Meteor.Error(422, 'Please fill in at least the email');
        // check that there are no previous records that would be duplicates
        if (planAttributes.name && planWithSameNameUser) {
            throw new Meteor.Error(302,
                'You already have a plan with that name',
                planWithSameNameUser._id);
        }
        // pick out the whitelisted keys
        var plan = _.extend(_.pick(payeeAttributes,
            'name',
            'tiers',
            'factors'
        ), {
            userId: user._id,
            created: new Date().getTime()
        });

        var payeeId = Plan.insert(plan);
        var planName = payee.name;
    }
});
