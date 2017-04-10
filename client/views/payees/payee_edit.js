Template.payeeEdit.rendered = function() {
        $('#start_date').datepicker({
            orientation: "bottom auto"
        });
        $('#end_date').datepicker({
            orientation: "bottom auto"
        });
    },

    Template.payeeEdit.helpers({
        payee: function() {
            return Payees.findOne(Session.get('currentPayeeId'));
        },
        hyperlink: function() {
            return Payees.findOne({
                _id: this._id
            }).payee
        }
    });
/* EVENT HANDLERS */

/* Cancel handler */
Template.payeeEdit.events({
    'click .cancel': function(e) {
        e.preventDefault();
        Router.go(history.back());
    },

    /* Submit  */
    'submit form': function(e) {
        e.preventDefault();
        var currentPayeeId = this._id;
        /* Defines object CoverageProperties and binds them to HTML "name" attrib.*/
        var payeeProperties = {
            name: $(e.target).find('[name=name]').val(),
            email: $(e.target).find('[name=email]').val(),
            type: $(e.target).find('[name=type]').val(),
            quota: parseInt($(e.target).find('[name=quota]').val()),
            start_date: $(e.target).find('[name=start_date]').val(),
            end_date: $(e.target).find('[name=end_date]').val(),
            manager: $(e.target).find('[name=manager]').val(),
            team: $(e.target).find('[name=team]').val(),
            comp_plan: $(e.target).find('[name=comp_plan]').val(),
            variable_comp: parseInt($(e.target).find('[name=variable_comp]').val()),
            payout_schedule: $(e.target).find('[name=payout_schedule]').val(),
            capped: $(e.target).find('[name=capped]').val(),
            capped_pct: $(e.target).find('[name=capped_pct]').val()
        }

        /* Updates the current coverage with the new properties. Handles Error  */
        Payees.update(currentPayeeId, {
            $set: payeeProperties
        }, function(error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                thisPayee = function() {
                    return Payees.findOne({
                        _id: currentPayeeId
                    })
                }
                Bert.alert('Payee Updated!', 'success', 'growl-top-right');
                Router.go('payeeList');
            }
        });
    },

    /* Delete handler */

    /* Asks for confirmation, checks if there's an error, if not deletes the item and routes back to last route */
    /* TODO Find a better way to handle errors/form validation */
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this Item?")) {
            var currentPayeeId = this._id;

            Payees.remove(currentPayeeId, function(error) {
                if (error) {
                    alert(error.reason);
                } else {
                    Router.go(history.back());
                }
            });
        }
    }
});
