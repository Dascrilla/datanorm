Template.dashboard.helpers({
	username: function() {
		return Meteor.user().profile.name.split(' ')[0]
	}

}); 