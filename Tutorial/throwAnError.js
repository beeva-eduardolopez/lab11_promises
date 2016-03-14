
function parsePromised(object) {
    var promise = new Promise(function(resolve, reject) {
        var obj = JSON.parse(object);
        throw(process.argv[2]);
    });

    return promise.catch(function(error) {
        throw(error);
    });
}

parsePromised().catch(function(error) {
    console.log(error);
});