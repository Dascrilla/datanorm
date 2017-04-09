Links = new Meteor.Collection('links');

Links.allow({
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
    link: function(linkAttributes) {
        var user = Meteor.user(),
            linkWithSameTitleUser = Links.findOne({
                title: linkAttributes.title,
                userId: linkAttributes.userId
            });

        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login!");
        // ensure form validation
        if (!linkAttributes.title)
            throw new Meteor.Error(422, 'Please fill in at least the text');
        // check that there are no previous records that would be duplicates
        if (linkAttributes.title && linkWithSameTitleUser) {
            throw new Meteor.Error(302,
                'You already have a record for that text!',
                linkWithSameTitleUser._id);
        }

        // pick out the whitelisted keys
        var link = _.extend(_.pick(linkAttributes, 'title', 'link', 'userId', 'category'), {
            userId: user._id,
            created: new Date().getTime()
        });

        var linkId = Links.insert(link);
        var linkTitle = link.title;
    }
});