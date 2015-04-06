Template.linkSubmit.events ({
	 /* Canel handler  */
  'click .cancel': function(e){
    e.preventDefault(); 
    Router.go('linkList'); 
  }, 

  /* Submit handler  */
  'submit form': function(e) {
    e.preventDefault();
   
  /* Defines the object handler  */
  /* Does "var" bind the object to submit.js only? TODO find a way to combine submit and edit objects */
  var link = {
      title: $(e.target).find('[name=title]').val(),
      link: $(e.target).find('[name=link]').val(),
      category: $(e.target).find('[name=category]').val()
       }
  
/*Error handler for submit*/
/*Why is this code alot different that edit.js. TODO refactor the edit and submit in same template with {{#if}} */
Meteor.call('link', link, function(error, id) { 
  if (error) {
// display the error to the user
throwError(error.reason);
if (error.error === 302) 
Router.go('linkList');  
} else { 
Router.go('linkList'); 
} });
} });

