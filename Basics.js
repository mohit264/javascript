g = 10;
x = 20;
var y = 30;
var a=10;
b=5;
c=4;

var learn = () =>
{   
    var count = 0;
    console.log("Understanding JS execution" + arguments[0] +" b "+ arguments[1] + " c "+ arguments[2] );   
}

//learn(a,b);
learn(a,b,c);
//learn()
/*
function outer(){
    var outerObj = "Outer variable";
    var outer2 = "Outer 2 Variable";
    function inner(){
        console.log("Inner wants to access "+ outerObj + " outer 2 var!!" +outer2);
        outer2 = "Inner Outer 2";
        //console.log(outer2);
        
    }
    setTimeout(inner, 1000);
    console.log("Outer 2" + outer2)
    return inner;
}

var inner = outer();
//inner();*/