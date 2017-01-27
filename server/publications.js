
Meteor.publish('links', function() {
  return Links.find();
}); 

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);

