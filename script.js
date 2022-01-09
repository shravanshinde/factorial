function fact(x){
    if(x == 0)
    return 1;
    else 
    return x * fact(x - 1);
}
function factorial(){
    var a = document.getElementById('text').value;
    if(a =="")
    alert("Enter any positive number")
    else if(a>=0){
        const output = fact(a);
        document.getElementById('res').value = output;
    }
}