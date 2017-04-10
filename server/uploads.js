Meteor.methods({
    parseUploadDeals(data) {
        check(data, Array);

        for (var i = 0; i < data.length; i++) {
            var item = data[i],
                exists = Deals.findOne({
                    sfdc_id: item.sfdc_id
                });
            if (!exists) {
                Deals.insert(item);
            } else {
                console.warn('Rejected. This item already exists.');
            }
        }
    }
});
