Template.linkItem.helpers({
	//refactory to switch statement you bum 
	icon: function(){
		if (Links.findOne({_id: this._id}).category === "Salesforce Report"){
			return "sfdcreport.png"
		}
		else if (Links.findOne({_id: this._id}).category === "Salesforce Dashboard"){
			return "sfdcdashboard.png"
		}
		else{return "googledrive.png"}
	}
})