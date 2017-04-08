Template.payeeSubmit.rendered = function() {
        $('#start_date').datepicker({
            orientation: "bottom auto"
        });
        $('#end_date').datepicker({
            orientation: "bottom auto"
        });
    },

    Template.payeeSubmit.events({
        /* Canel handler  */
        'click .cancel': function(e) {
            e.preventDefault();
            Router.go('payeeList');
        },

        /* Submit handler  */
        'submit form': function(e) {
            e.preventDefault();
            /* Defines the object handler  */
            /* Does "var" bind the object to submit.js only? TODO find a way to combine submit and edit objects */
            var payee = {
                name: $(e.target).find('[name=name]').val(),
                email: $(e.target).find('[name=email]').val(),
                type: $(e.target).find('[name=type]').val(),
                quota: $(e.target).find('[name=quota]').val(),
                start_date: $(e.target).find('[name=start_date]').val(),
                end_date: $(e.target).find('[name=end_date]').val(),
                manager: $(e.target).find('[name=manager]').val(),
                team: $(e.target).find('[name=team]').val(),
                comp_plan: $(e.target).find('[name=comp_plan]').val(),
                variable_comp: $(e.target).find('[name=variable_comp]').val(),
                payout_schedule: $(e.target).find('[name=payout_schedule]').val(),
                capped: $(e.target).find('[name=capped]').val(),
                capped_pct: $(e.target).find('[name=capped_pct]').val()
            }

            /*Error handler for submit*/
            /*Why is this code alot different that edit.js. TODO refactor the edit and submit in same template with {{#if}} */
            Meteor.call('payee', payee, function(error, id) {
                if (error) {
                    // display the error to the user
                    throwError(error.reason);
                    if (error.error === 302)
                        Router.go('payeeList');
                } else {
                    Router.go('payeeList');
                }
            });
        }
    });
