if (Docs.find().count() === 0) {
  Docs.insert({
  	subject: "Zenefits + {!Company}", 
  	text: "Hi {!First Name}, what's up!!",
  	campaign: "HR Campaign 1", 
  	touch: 1
  });
}

if (Links.find().count() === 0) {
  Links.insert({
  	title: "SDR/AE Lead Assignment Sunday Check", 
  	link: "https://na23.salesforce.com/00O16000007Tghv", 
  	category: "Salesforce"
  });
}
