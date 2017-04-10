Template.payeeItem.helpers({
    monthlyVariable: function() {
        return Payees.findOne().variable_comp / 12;
    }
})
