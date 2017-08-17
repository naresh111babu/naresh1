

function validate() {
var a=document.forms["myform"]["a"].value;
var b=document.forms["myform"]["b"].value;
var c=document.forms["myform"]["c"].value;


if(a == "") 
{
	alert("Enter username" );
	return false;
}

if(b == "") 
{
	alert("Enter password" );
	return false;
}

if(c == "") 
{
	alert("Enter re-password" );
	return false;
}



if(b!=c){
	alert("Please Enter same password");
	return false;
}
else{
	alert("login success");
	return true;
}



}












