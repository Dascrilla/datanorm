Meteor.methods({
    parseUploadObjects(data) {
        check(data, Array);
        for (var i = 0; i < data.length; i++) {
            var item = data[i]
        Objects.insert(item);
        }

        /*for (var i = 0; i < data.length; i++) {
            var item = data[i],
                exists = Objects.findOne({
                    id: item.id
                });
            if (!exists) {
                Objects.insert(item);
            } else {
                console.warn('Rejected. This item already exists.');
            }
        }*/
    }
});
