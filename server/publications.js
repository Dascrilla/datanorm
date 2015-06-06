Meteor.publish('docs', function() {
  return Docs.find();
}); 

Meteor.publish('links', function() {
  return Links.find();
}); 

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
//Houston.add_collection(Meteor.meteor_oauth_pendingCredentials); 
