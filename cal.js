var cal=(val)=>
{
 document.getElementById("result").value+=val;
}
var res=()=>
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y;
}
var cle=()=>
{
document.getElementById("result").value = " "
}
var back=()=>{
    var res=document.getElementById("result").value;
    var i=res.split(",").lastIndexOf(" ");
   // var i= res

// returns the string from 0 to specified index
var s = res.substring(0, i.length-1);

 document.getElementById('result').value=s;
}