Template.planList.helpers({
    plan: function() {
        return Plans.find();
    }
});

Template.registerHelper( 'percentify', function(number) {
  return number*100 + "%"
});

Template.registerHelper( 'payoutAttainment', function(number1) {
  return Math.round(number1 * Plans.findOne().factors[Plans.findOne().tiers.indexOf(number1)] *100)+"%";
});
