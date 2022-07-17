var display =document.getElementById("equal");
var text = document.getElementById("display");

function btnclick(val){
    var text = document.getElementById("display").value+=val;
}

function btnclear(){
    text.value='';
}
function equalto(){
    var textValue = text.value;
    var result = eval(textValue);
    text.value=result;
}