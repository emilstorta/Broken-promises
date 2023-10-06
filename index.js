const lib = require('./library.js');

lib.myPromise('users')
.then((res) => {
    //console.log(res.filter((item) => item.id == 3));
    console.log(res);
});
