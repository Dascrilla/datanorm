Meteor.publish('links', function() {
    return Links.find();
});

Meteor.publish('payees', function() {
    return Payees.find();
});
Meteor.publish('deals', function() {
    return Deals.find();
});

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
