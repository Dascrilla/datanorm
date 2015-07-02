process.env.MAIL_URL="smtp://postmaster%40carlove.co:gatorade@smtp.mailgun.org:587"; 

SSR.compileTemplate('emailText', Assets.getText('queue_email.html'));

Template.emailText.helpers({
  sfdcQueue: function(){
    return QueueItems.find({'created': Meteor.userId(),'status': 'Requested'});
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
  }
});

Meteor.methods({
  sendEmail: function() {
    var html = SSR.render('emailText');
    
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
        to: "anetsch@zenefits.com",
        subject: userName + "'s Salesforce Queue is Ready for Approval",
        html: html
      }

    Email.send(options)
    console.log(options);
  }
});