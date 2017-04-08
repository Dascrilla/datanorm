if (Links.find().count() === 0) {
    Links.insert({
        title: "SDR/AE Lead Assignment Sunday Check",
        link: "https://na23.salesforce.com/00O16000007Tghv",
        category: "Salesforce"
    });
}

if (Payees.find().count() === 0) {
    Payees.insert({
        sfdc_id: "005G0000004RU2j",
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
        capped_pct: null,
    });
}
