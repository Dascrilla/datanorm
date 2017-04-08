/*subscriptions that WaitOn on the subscriptions to be loaded, displaying loading spinner in the interm */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('links');
        return Meteor.subscribe('payees');
    }
});
Router.onBeforeAction('loading');

Router.map(function() {
    this.route('dashboard', {
        path: '/dashboard',
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });
    this.route('landing', {
        path: '/',
        layoutTemplate: 'landing'
    });
    this.route('home', {
        path: '/home',
        layoutTemplate: 'landing'
    });
    this.route('linkList', {
        path: '/links',
        waitOn: function() {
            return Meteor.subscribe('links');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });
    this.route('payeeEdit', {
        path: '/payee/edit/:_id',
        waitOn: function() {
            return Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        data: function() {
            return Payees.findOne(this.params._id);
        }
    });
    this.route('payeeSubmit', {
        path: '/payee/submit',
        waitOn: function() {
            return Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });
    this.route('payeeList', {
        path: '/payees',
        waitOn: function() {
            return Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });
    this.route('teamList', {
        path: '/teams',
        waitOn: function() {
            return Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });

    /*requires the user logs in otherwise routes to Access Denied*/
    var requireLogin = function() {
        if (!Meteor.user()) {
            if (Meteor.loggingIn())
                this.render(this.loadingTemplate);
            else
                this.render('accessDenied');

            this.stop();
        }
    }
});

/*
Router.onBeforeAction(requireLogin, {only: 'docSubmit'})
 */
