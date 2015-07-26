QueueItems = new Meteor.Collection('queueItems');

QueueItems.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; }
});

Meteor.methods({
queueSubmit: function(queueItemAttributes) {
var user = Meteor.user(),
queueItemWithSameUsername= QueueItems.findOne({username: queueItemAttributes.username});

	// ensure the user is logged in
	if (!user)
		throw new Meteor.Error(401, "You need to login!");
	// ensure form validation
	if (!queueItemAttributes.username)
		throw new Meteor.Error(422, 'Please fill in at least the username');
	// check that there are no previous records that would be duplicates
	if (queueItemAttributes.text && queueItemWithSameUsername) { throw new Meteor.Error(302,
		'You already have a record for that text!',
		queueItemWithSameUsername._id); }

	// pick out the whitelisted keys
	var queueItem = _.extend(_.pick(queueItemAttributes, 'request_type','username', 'sdr_type', 'office', 'manager', 'hiredate'),
		{
			userId: user._id,
			created: new Date().getTime(), 
			status: "In Queue"
		});

	QueueItems.insert(queueItem); 
	} 
});