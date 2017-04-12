if (Payees.find().count() === 0) {
    Payees.insert({
        name: "Ryan Basch",
        company: "Acme Corp",
        email: "rbasch@acme.com",
        type: "Rep",
        quota: 50000,
        start_date: "01/01/2016",
        end_date: null,
        manager: "Leon Dame",
        team: "Mid Market",
        comp_plan: "Mid Market",
        variable_comp: 120000,
        payout_schedule: "month",
        capped: false,
        capped_pct: null
    });
}
if (Deals.find().count() === 0) {
    Deals.insert({
        owner: "Ryan Basch",
        name: "My first Deal",
        amount: 10000,
        close_date: "04/15/2017",
        type: "HR | One"
    });
}

if (Plans.find().count() === 0) {
    Plans.insert({
        name: "First Comp Plan",
        tiers: [0, .25, .5, .75, 1, 1.01, 1.25, 1.5, 1.75, 2],
        factors: [0.6, 0.7, 0.8, 1.0, 1.0, 1.1, 1.2, 1.4, 1.4],
    });
}
