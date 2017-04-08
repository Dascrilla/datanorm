Template.payeeList.helpers({
    rep: function() {
        return Payees.find({
            "type": "Rep"
        });
    },
    manager: function() {
        return Payees.find({
            "type": "Manager"
        });
    }
});
