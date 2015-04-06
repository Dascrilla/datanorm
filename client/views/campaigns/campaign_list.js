Template.campaignList.helpers({
  campaigns: function(){
      var myArray = Docs.find().fetch();
      return distinctArray = _.uniq(myArray, false, function(d) {return d.campaign});
      
    } 
});


