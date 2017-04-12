Meteor.publish('payees', function() {
    return Payees.find();
});
Meteor.publish('deals', function() {
    return Deals.find();
});
Meteor.publish('plans', function() {
    return Plans.find();
});

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
