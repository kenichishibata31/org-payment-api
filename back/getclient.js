var restify = require('restify');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});



client.get('/user', function (err, req, res, user) {
	if (err) {
	    console.log("An error ocurred >>>>>>");
	    console.log(err);
	} else {
	    console.log("Total users " + user.length);
	    console.log('All users >>>>>>>');
	    console.log(user);
	}
});

// function getter(){
//   client.get('/user', function (err, req, res, user) {
//   	if (err) {
//   	    console.log("An error ocurred >>>>>>");
//   	    console.log(err);
//   	} else {
//   	    // console.log("Total users " + user.length);
//   	    // console.log('All users >>>>>>>');
//   	    // console.log(user);
//         console.log('ok');
//         return user;
//
//   	}
//   });
// }
//
// module.exports.getter = getter;
