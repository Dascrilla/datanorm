  Meteor.methods({
      getTeamsData(filter) {
          check(filter, Object);
          var group = {
              _id: {
                  team: '$team'
              },
              manager_quota: {
                  $sum: '$quota'
              }
          };
          if (filter.team !== 'all') {
              group._id.manager = '$manager';
          }
          if (filter.team === 'all') {
              delete filter.team;
          }
          if (filter.manager === 'all') {
              delete filter.manager;
          }

          return Payees.aggregate({
              $match: filter
          }, {
              $group: team
          });
      }
  });
