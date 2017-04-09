Deals = new Meteor.Collection('deals');

Meteor.methods({
    dealsRemove: function() {
        Deals.remove({})
        return console.log("Deals Removed!")
    }
});

Deals.allow({
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
