Meteor.publish('objects', function() {
    return Objects.find();
});

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
