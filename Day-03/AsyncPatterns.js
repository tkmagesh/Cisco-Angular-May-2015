//Sync
function addSync(x,y){
    console.log("[as] processing x and y");
    var result = x + y;
    console.log("[as] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[asc] triggering add");
    var result = addSync(x,y);
    console.log("[asc] result = ", result);
}

//Async
//Using Callbacks
function addAsync(x,y, onResult){
    setTimeout(function(){
        console.log("[as] processing x and y");
        var result = x + y;
        console.log("[as] returning result");
        if (typeof onResult === "function")
            onResult(result);
    },5000);
}

function addAsyncClient(x,y){
    console.log("[asc] triggering add");
    addAsync(x,y, function(result){
        console.log("[asc] result = ", result);
    });
}

//Async
//Using Events
function getAdder(){
    var onResultCallbacks = [];
    function addOnResultCallback(callback){
        onResultCallbacks.push(callback)
    }
    function add(x,y){
        setTimeout(function(){
            console.log("[as] processing x and y");
            var result = x + y;
            console.log("[as] returning result");
            onResultCallbacks.forEach(function(callback){
                callback(result);
            })
        },5000);
    }
    return {
        addResultListener : addOnResultCallback,
        add : add
    };
};


function addAsyncClient(x,y){
    console.log("[asc] triggering add");
    addAsync(x,y, function(result){
        console.log("[asc] result = ", result);
    });
}

//Asnyc
//Promises
function addAsync(x,y){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("[as] processing x and y");
            var result = x + y;
            console.log("[as] returning result");
            resolve(result);
        },5000)
    });
    return promise;
}

var promise = addAsync(100,200);
promise.then(function(result){
    console.log("result = ", result);
});
