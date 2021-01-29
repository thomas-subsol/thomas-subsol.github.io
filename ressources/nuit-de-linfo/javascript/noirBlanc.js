document.getElementById("NB").addEventListener('click', function(){
    if(document.getElementById("white")){
        document.getElementById("element").style.backgroundColor="#43235A";
        document.getElementById("white").id = "m";
    }
    else if(document.getElementById("visible")){
        document.getElementById("visible").id = "OetW";
        document.getElementById("element").style.backgroundColor="black";
    }
    else if(document.getElementById("OetW")){
        document.getElementById("OetW").id = "visible";
        document.getElementById("element").style.backgroundColor="#43235A";
    }
    else{
        document.getElementById("m").id = "white";
        document.getElementById("element").style.backgroundColor="black";
    }
});

document.getElementById("vis").addEventListener('click', function(){
    if (document.getElementById("m")) {
        document.getElementById("m").id = "visible";
    }
    else if(document.getElementById("white")){
        document.getElementById("white").id = "OetW";
    }
    else if(document.getElementById("OetW")){
        document.getElementById("OetW").id = "white";
    }
    else{
        document.getElementById("visible").id ="m";
    }
});
