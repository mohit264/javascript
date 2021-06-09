function zoo(){
    var tiger = "zinda";

    function cage(){
        console.log("Tiger "+ tiger +" Hai!!!");
    }

    return cage;
}

var cage = zoo();
cage();