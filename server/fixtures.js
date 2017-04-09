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
        capped_pct: null
    }, {
        sfdc_id: null,
        name: "Matt Tosi",
        comp_plan: "SMB AE",
        email: "mtosi@acme.com",
        end_date: null,
        manager: "Taylor Pena",
        payout_schedule: "Monthly",
        quota: "120000",
        start_date: "10/18/2016",
        team: "SMB AE",
        type: "Rep",
        variable_comp: 120000,
        capped: false,
        capped_pct: null
    }, {
        sfdc_id: null,
        name: "Leon Dame",
        comp_plan: "Mid Market",
        email: "ldame@acme.com",
        end_date: null,
        manager: "Jeff Hazard",
        payout_schedule: "Monthly",
        quota: "120000",
        start_date: "10/18/2016",
        team: "Mid Market",
        type: "Manager",
        variable_comp: 120000,
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
