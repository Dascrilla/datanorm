Template.linkEdit.helpers({ 
	link: function() {
		return Links.findOne(Session.get('currentLinkId')); 
	}, 
	hyperlink: function(){
		return Links.findOne({_id: this._id}).link
	}
});

/* EVENT HANDLERS */

/* Cancel handler */
Template.linkEdit.events({ 
	'click .cancel':function(e){
		e.preventDefault(); 
	Router.go(history.back()); 
	}, 

/* Submit  */
'submit form': function(e) {
e.preventDefault();
var currentLinkId = this._id;

/* Defines object CoverageProperties and binds them to HTML "name" attrib.*/ 
var linkProperties = {
      title: $(e.target).find('[name=title]').val(),
      link: $(e.target).find('[name=link]').val(),
      category: $(e.target).find('[name=category]').val() 
} 

/* Updates the current coverage with the new properties. Handles Error  */
Links.update(currentLinkId, {$set: linkProperties}, function(error){
 if (error) {
// display the error to the user
alert(error.reason); 
} 
else {

	thisCampaign = function(){
		return Links.findOne({_id: currentLinkId }).campaign
	}

	Router.go('linkList'); 
}
}); 
},

/* Delete handler */

/* Asks for confirmation, checks if there's an error, if not deletes the item and routes back to last route */
/* TODO Find a better way to handle errors/form validation */
'click .delete': function(e) { 
e.preventDefault();
if (confirm("Delete this Item?")) {
 var currentLinkId = this._id;
 
Links.remove(currentLinkId, function(error){
 	if(error){
 	alert(error.reason); 
 	}
 	else{
	Router.go(history.back()); 
 	}
 	}); 
} 
}
});