Meteor.methods({
  getObjectsData() {
    check(Object);

    var group = {
      _id: {
        industry: '$industry'
      },
      count: {
        $sum: 1
      }
    };


    return Objects.aggregate(
      { $group: group }
    );
  }
});
