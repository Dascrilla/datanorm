/*subscriptions that WaitOn on the subscriptions to be loaded, displaying loading spinner in the interm */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('payees'),
            Meteor.subscribe('objects'),
            Meteor.subscribe('plans');
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

    this.route('payeeList', {
        path: '/payees',
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

    this.route('objectList', {
        path: '/objects',
        waitOn: function() {
            return Meteor.subscribe('objects');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('aggView', {
        path: '/agg_view',
        waitOn: function() {
            return Meteor.subscribe('objects');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('calcList', {
        path: '/calcs',
        waitOn: function() {
            return Meteor.subscribe('objects'),
                Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        data: function() {
            return Payees.findOne(this.params._id);
        }
    });

    this.route('planList', {
        path: '/plans',
        waitOn: function() {
            return Meteor.subscribe('plans');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        data: function() {
            return Plans.findOne(this.params._id);
        }
    });

    this.route('planEdit', {
        path: '/plan/:_id',
        waitOn: function() {
            return Meteor.subscribe('plan'),
                Meteor.subscribe('payees');
        },
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        data: function() {
            return Plan.findOne(this.params._id);
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
