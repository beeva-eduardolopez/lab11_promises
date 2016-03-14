

function all(prom1, prom2) {

    var counter = 0;
    var val1;
    var val2;

    prom1
        .then(function (result) {
            val1 = result;
            counter++;
            if (counter >= 2){
              Promise.resolve([val1, val2]);  
            } 
        })


    prom2
        .then(function (result) {
            val2 = result;
            counter++;
            if (counter >= 2) {
                Promise.resolve([val1, val2]);
            }
        })


    return prom1,prom2;
}



