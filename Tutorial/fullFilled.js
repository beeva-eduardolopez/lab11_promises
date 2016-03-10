
var promise = new Promise(function (fulfill, reject) {
    fulfill("FULFILLED!")

});

promise.then(function (value) {
    setTimeout(function () {
        console.log(value);
    }, 300);

}, function (reason) {
    console.log(reason);
});
