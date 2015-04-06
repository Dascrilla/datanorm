/*subscriptions that WaitOn on the subscriptions to be loaded, displaying loading spinner in the interm */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('docs'); 
  }
});

Router.onBeforeAction('loading');

Router.map(function() {
    this.route('dashboard', {
    path: '/dashboard', 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

  this.route('linkList', {
    path: '/links', 
    waitOn: function() {
      return Meteor.subscribe('links');
    }, 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

  this.route('linkEdit', {
    path: '/link/edit/:_id', 
    waitOn: function() {
      return Meteor.subscribe('links');
    }, 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }, 
    data: function() { return Links.findOne(this.params._id); }
  });

this.route('linkSubmit', {
    path: '/link/submit', 
    waitOn: function() {
      return Meteor.subscribe('links');
    }, 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

  this.route('docList', {
  	path: '/all', 
  	waitOn: function() {
      return Meteor.subscribe('docs');
    }, 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

  this.route('campaignList', {
    path: '/campaign',
    waitOn: function() {
      return Meteor.subscribe('docs');
    }, 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

   this.route('campaignPage', {
    path: '/campaign/:campaign',
    waitOn: function() {
      return Meteor.subscribe('docs');
    },
    data: function() { return Docs.findOne({campaign: this.params.campaign}); }, 
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

    this.route('nextTouchSubmit', {
    path: '/campaign/:campaign/new',
    waitOn: function() {
      return Meteor.subscribe('docs');
    },
    data: function() { return Docs.findOne({campaign: this.params.campaign}); }, 
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });

  this.route('docPage', {
    path: '/docs/:_id',
    waitOn: function() {
      return Meteor.subscribe('docs');
    },
    data: function() { return Docs.findOne(this.params._id); }, 
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }, 
    onStop: function(){
      $('#summernote').destroy();
    }
  });


  this.route('docSubmit', {
    path: '/submit', 
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    }
  });


  this.route('docEdit', {
    path: '/docs/:_id/edit',
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    },
    data: function() { return Docs.findOne(this.params._id); }
    });
 });

/*requires the user logs in otherwise routes to Access Denied*/
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    this.stop();
  }
}

/*
Router.onBeforeAction(requireLogin, {only: 'docSubmit'})
 */