Template.campaignItem.helpers({

  touchesNum: function(){
   	return Docs.find({campaign: this.campaign}).count(); 
   }
});
