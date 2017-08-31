var rp = require('request-promise');
rp({uri: 'https://fs-student-roster.herokuapp.com/'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

