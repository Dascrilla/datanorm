if (Docs.find().count() === 0) {
  Docs.insert({
    subject: "Zenefits + {!Company}",
    text: "Hi {!First Name}, what's up!!",
    campaign: "HR Campaign 1",
    touch: 1
  });
}

if (Links.find().count() === 0) {
  Links.insert({
    title: "SDR/AE Lead Assignment Sunday Check",
    link: "https://na23.salesforce.com/00O16000007Tghv",
    category: "Salesforce"
  });
}

if (QueueItems.find().count() === 0) {
  QueueItems.insert({
    request_type: 'New User',
    username: 'Micah Berman',
    sdr_type: 'Outbound',
    office: 'SF',
    manager: 'Ashley Kelly',
    hiredate: '12/21/2014',
    status: 'Requested'
  });
}