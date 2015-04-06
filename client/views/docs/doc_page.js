Template.docPage.helpers({
	myname: function(){
		return Meteor.user().profile.name.split(' ')[0]
	}
})

Template.docPage.rendered = function(){
 $('#summernote').summernote({
 	height: 300
 })
}



