
// var promise = new Promise(function (fulfill, reject) {
//     var error = new Error();
//     error.value = 'I FIRED';
//     fulfill(error);
//     var error2 = new Error();
//     error2.value = 'I DID NOT FIRE';
//     reject(error2);
// });


// function onReject(error){
//     console.log(error);
// }

// promise.then(function (value) {
//     console.log(value.value);
// }, function (reason) {
//    console.log(reason.value);
// });

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);