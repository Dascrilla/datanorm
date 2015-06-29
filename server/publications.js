Meteor.publish('docs', function() {
  return Docs.find();
}); 

Meteor.publish('links', function() {
  return Links.find();
}); 

Meteor.publish('queueItems', function() {
  return QueueItems.find();
}); 

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);

