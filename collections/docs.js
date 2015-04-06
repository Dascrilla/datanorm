Docs = new Meteor.Collection('docs');

Docs.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; }
});

Meteor.methods({
doc: function(docAttributes) {
	var user = Meteor.user(),
docWithSameTouchCampaign= Docs.findOne({campaign: docAttributes.campaign, touch: docAttributes.touch});

	// ensure the user is logged in
	if (!user)
		throw new Meteor.Error(401, "You need to login!");
	// ensure form validation
	if (!docAttributes.text)
		throw new Meteor.Error(422, 'Please fill in at least the text');
	// check that there are no previous records that would be duplicates
	if (docAttributes.text && docWithSameTouchCampaign) { throw new Meteor.Error(302,
		'You already have a record for that text!',
		docWithSameTouchCampaign._id); }

	// pick out the whitelisted keys
	var doc = _.extend(_.pick(docAttributes, 'subject', 'text', 'touch', 'campaign', 'userId'),
		{
			userId: user._id,
			created: new Date().getTime()
		});

	var docId = Docs.insert(doc);

	var docCampaign = doc.campaign; 
	} 
});