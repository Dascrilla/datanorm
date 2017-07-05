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
if (Objects.find().count() === 0) {
    Objects.insert({
        id: "00eu39fje93j93jr39",
        name: "Bob Smith",
        company: "Acme Co, Inc.",
        title: "CEO",
        industry: "Software"
    });
}

if (Plans.find().count() === 0) {
    Plans.insert({
        name: "First Comp Plan",
        tiers: [0, .25, .5, .75, 1, 1.01, 1.25, 1.5, 1.75, 2],
        factors: [0.6, 0.7, 0.8, 1.0, 1.0, 1.1, 1.2, 1.4, 1.4],
    });
}
