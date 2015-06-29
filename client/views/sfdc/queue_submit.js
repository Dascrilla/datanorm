Template.queueSubmit.events({
  /* Canel handler  */
  'click .cancel': function(e) {
    e.preventDefault();
    Router.go('dashboard');
  },

  /* Submit handler  */
  'submit form': function(e) {
    e.preventDefault();

    /* Defines the object handler  */
    /* Does "var" bind the object to submit.js only? TODO find a way to combine submit and edit objects */
    var queueItem = {
      request_type: $(e.target).find('[name=request_type]').val(),
      username: $(e.target).find('[name=username]').val(),
      sdr_type: $(e.target).find('[name=sdr_type]').val(),
      office: $(e.target).find('[name=office]').val(),
      manager: $(e.target).find('[name=manager]').val(),
      hiredate: $(e.target).find('[name=hiredate]').val()
    }

    /*Error handler for submit*/
    /*Why is this code alot different that edit.js. TODO refactor the edit and submit in same template with {{#if}} */
    Meteor.call('queueSubmit', queueItem, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        if (error.error === 302)
          Router.go('home');
      } else {
        Router.go('sfdcQueue');
      }
    });
  }
});

Template.queueSubmit.rendered = function() {
  $('.date').datepicker({
    autoclose: true
  });
}

