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
