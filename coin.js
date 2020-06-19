var num;
var head=0;
var tail=0;
var count=0;
var check;
var myvideo=document.getElementById("video1");
function result()
{
document.getElementById("final").innerHTML="";
playing();
var counts=count;
document.getElementById("count").innerHTML= counts;
var head_per=parseInt((head/count)*100);
var tail_per=parseInt((tail/count)*100);
setTimeout(function(){
document.getElementById("head_pr").value= head_per;
document.getElementById("tail_pr").value= tail_per;},3800);
}
function counting()
{
check=game();
if(check==1)
{
head=head+1;
}
else
{
tail=tail+1;
}
}
function game()
{
count=count+1;
num=Math.random();
if(num>0.5)
{
setTimeout(function(){document.getElementById("final").innerHTML="Head";},3800);
return 1;
}
else
{
setTimeout(function(){document.getElementById("final").innerHTML="Tail";},3800);
return 0;
}
}
function playing()
{
myvideo.play();
counting();
}

function btnControl()
{
document.getElementById("mybtn").disabled=true;

setTimeout(function(){
document.getElementById("mybtn").disabled=false;},3800);
}
