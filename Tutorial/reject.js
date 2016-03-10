var promise = new Promise(function (fulfill, reject) {
    var error = new Error();
    error.value = 'REJECTED!';
    reject(error)

});

function onReject(error) {
    console.log(error.value);
}

promise.then(function (value) {
    console.log(value);

}, function (reason) {
    setTimeout(function () {
        onReject(reason)
    }, 300);
});