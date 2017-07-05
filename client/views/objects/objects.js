Template.objectList.helpers({
    object: function() {
        return Objects.find({},{limit:200})
    }
});

Template.upload.onCreated(() => {
    Template.instance().uploading = new ReactiveVar(false);
});

Template.upload.helpers({
    uploading() {
        return Template.instance().uploading.get();
    }
});

Template.upload.events({
    'change [name="uploadCSV"]' (event, template) {
        template.uploading.set(true);

        Papa.parse(event.target.files[0], {
            header: true,
            dynamicTyping: true,
            complete(results, file) {
                Meteor.call('parseUploadObjects', results.data, (error, response) => {
                    if (error) {
                        console.log(error.reason);
                    } else {
                        template.uploading.set(false);
                        Bert.alert('Upload complete!', 'success', 'growl-top-right');
                    }
                });
            }
        });
    }
});
