process.env.MAIL_URL="smtp://postmaster%40carlove.co:gatorade@smtp.mailgun.org:587"; 

SSR.compileTemplate('queue_email', Assets.getText('queue_email.html'));


Template.queue_email.helpers({
  sfdcQueue: function(){
    return QueueItems.find();
    }, 
    sfdcUser: function(){
      return this.username
    },
    executeDate: function(){
    if (moment().date() > 15) {
      return parseInt(moment().format('MM')) + 1 + "/" + 1 + "/" + moment().format('YYYY')
    }
    else{
    return moment().format('DD') + "/" + 15 + moment().year()} 
  },
  role: function() {
    return "Sales Development " + QueueItems.findOne().sdr_type + " " + QueueItems.findOne().office + " " + QueueItems.findOne().manager.split(" ")[1];
  }, 
  director: function(){
    var manager = QueueItems.findOne().manager
    if (manager == "Ashley Kelly" ||manager == "Hana Francisco" || manager == "Miles Spafford" || manager == "Joan Jun" ){
      return "David Hershenson";
    }
    else {return "Robby Allen";}
  }
}); 


Meteor.methods({
  sendEmail: function() {
    //var html = SSR.render('posts', {owner: 'user@company.com'})
    var html = SSR.render('queue_email');
    
    if (Meteor.user().emails == undefined){
        id= Meteor.userId();
        userEmail = Meteor.users.findOne({_id: id}).services.google.email;
        userName = Meteor.user().profile.name; 
      }
      else {
        userEmail = Meteor.user().emails[0].address
        userName = Meteor.user().emails[0].address.split('@')[0]
      }

      var options={
        from: userEmail,
        replyTo: userEmail, 
        to: "alexlnetsch@gmail.com",
        subject: userName + "'s Salesforce Queue is Ready for Approval",
        html: html
      }

    Email.send(options)
    console.log(options);
  }
});




