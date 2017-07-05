Meteor.publish('payees', function() {
    return Payees.find();
});
Meteor.publish('objects', function() {
    return Objects.find();
});
Meteor.publish('plans', function() {
    return Plans.find();
});

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
