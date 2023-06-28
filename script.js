var output=document.getElementById("display")
function calc(number){
    output.innerHTML=output.innerHTML+number;
}
function calculate(){
    output.innerHTML=eval(output.innerHTML)
}
function clean(){
    output.innerHTML="";
}
function del(){
    output.innerHTML=output.innerHTML.slice(0,-1);
}