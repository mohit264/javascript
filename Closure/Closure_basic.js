function outer(){
    var outerObj = "Outer variable";

    function inner(){
        console.log("Inner wants to access "+ outerObj);
    }

    return inner;
}

var inner = outer();
inner();