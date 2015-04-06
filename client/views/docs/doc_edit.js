/* HELPERS */

/* Returns the coverage item you want to edit */

Template.docEdit.rendered = function() {
	$('#summernote').summernote()
}

Template.docEdit.helpers({ 
	doc: function() {
		return Docs.findOne(Session.get('currentDocId')); 
	}
});

/* EVENT HANDLERS */

/* Cancel handler */
Template.docEdit.events({ 
	'click .cancel':function(e){
		e.preventDefault(); 
	Router.go(history.back()); 
	}, 

/* Submit  */
'submit form': function(e) {
e.preventDefault();
var currentDocId = this._id;

/* Defines object CoverageProperties and binds them to HTML "name" attrib.*/ 
var docProperties = {
      subject: $(e.target).find('[name=subject]').val(),
      text: $(e.target).find($('textarea').summernote()).val(),
      campaign: $(e.target).find('[name=campaign]').val(),
      touch: parseInt($(e.target).find('[name=touch]').val()) 
}

/* Updates the current coverage with the new properties. Handles Error  */
Docs.update(currentDocId, {$set: docProperties}, function(error){
 if (error) {
// display the error to the user
alert(error.reason); 
} 
else {

	thisCampaign = function(){
		return Docs.findOne({_id: currentDocId }).campaign
	}

	Router.go('campaignPage', {campaign: thisCampaign}); 
}
}); 
},

/* Delete handler */

/* Asks for confirmation, checks if there's an error, if not deletes the item and routes back to last route */
/* TODO Find a better way to handle errors/form validation */
'click .delete': function(e) { 
e.preventDefault();
if (confirm("Delete this Item?")) {
 var currentDocId = this._id;
 
Docs.remove(currentDocId, function(error){
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