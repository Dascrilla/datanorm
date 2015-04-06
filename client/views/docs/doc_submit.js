Template.docSubmit.rendered = function(){
 $('.summernote').summernote({
  height: 300,   //set editable area's height
  focus: true    //set focus editable area after Initialize summernote
});
}

Template.docSubmit.events ({
	 /* Canel handler  */
  'click .cancel': function(e){
    e.preventDefault(); 
    Router.go('campaignList'); 
  }, 

  /* Submit handler  */
  'submit form': function(e) {
    e.preventDefault();
   
  /* Defines the object handler  */
  /* Does "var" bind the object to submit.js only? TODO find a way to combine submit and edit objects */
  var doc = {
      subject: $(e.target).find('[name=subject]').val(),
      text: $(e.target).find($('textarea').summernote()).val(),
      campaign: $(e.target).find('[name=campaign]').val(),
      touch: parseInt($(e.target).find('[name=touch]').val()) 
       }
  
/*Error handler for submit*/
/*Why is this code alot different that edit.js. TODO refactor the edit and submit in same template with {{#if}} */
Meteor.call('doc', doc, function(error, id) { 
  if (error) {
// display the error to the user
throwError(error.reason);
if (error.error === 302) 
docCampaign = doc.campaign; 
Router.go('campaignPage', {campaign: docCampaign});  
} else {
docCampaign = doc.campaign; 
Router.go('campaignPage', {campaign: docCampaign}); 
} });
} });

