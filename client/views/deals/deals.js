Template.dealList.helpers({
    deal: function() {
        return Deals.find();
    }
});

Template.upload.events({
    "change #files": function(e) {
        var files = e.target.files || e.dataTransfer.files;
        for (var i = 0, file; file = files[i]; i++) {
            if (file.type.indexOf("text") == 0) {
                var reader = new FileReader();
                reader.onloadend = function(e) {
                    var text = e.target.result;
                    console.log(text)
                    var all = $.csv.toObjects(text);
                    console.log(all)
                    _.each(all, function(entry) {
                        Deals.insert(entry);
                    });
                }
                reader.readAsText(file);
            }
        }
    },
    // Clears Customer Database
    'click .clear': function(e) {
        e.preventDefault();
        Meteor.call('dealsRemove');
    }
});
