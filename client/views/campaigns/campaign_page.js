Template.campaignPage.helpers({

  campaignDocs: function(){
   	return Docs.find({
   		campaign: this.campaign},
   		{sort: {touch: 1}} 
   		); 
   }
});
