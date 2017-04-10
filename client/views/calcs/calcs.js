Template.calcList.helpers({
    rep: function() {
        return Payees.find();
    }
});

Template.calcItem.helpers({
    variableComp: function(){
      return (this.variable_comp).toDollars(0,true);
    },
    quota: function(){
      return this.quota.toDollars(0,true);
    },
    monthlyVariable: function() {
        return (this.variable_comp / 12).toDollars(0,true);
    },
    won: function(){
      return Deals.find({owner: this.name}).sum('amount').toDollars(0,true);
    },
    attainment: function(){
      var won = Deals.find({owner: this.name}).sum('amount')
      return Math.round(won/this.quota*100);
    },
    payoutAttainment: function(){
      var won = Deals.find({owner: this.name}).sum('amount')
      return Math.round(won/this.quota*100);
    },
    payout: function(){
      var won = Deals.find({owner: this.name}).sum('amount')
      var quota = this.quota
      var attainment = won/quota
      var monthlyVariable = this.variable_comp / 12
      return (attainment * monthlyVariable).toDollars(0,true);
    }
});
