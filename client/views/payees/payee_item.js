Template.payeeItem.helpers({
    monthly_variable: function() {
        return Payees.findOne().variable_comp / 12;
    }
})
