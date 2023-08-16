function validateForm()
{
var p= document.forms["myform"]["fname"].value; //variables
var r= document.forms["myform"]["email"].value; //variables
var a= document.forms["myform"]["subject"].value; //variables
var z= document.forms["myform"]["message"].value; //variables
if(p=="")
{
alert("Name must be filled out"); //alert message
}

if(r=="")
{
alert("Email must be filled out"); //alert message
}

if(a==""){
alert("subject must be filled out"); //alert message
}

if(z=="")
{
alert("write your message!"); //alert message
}
else{
alert("Your feedback has been submitted"); //alert message
}
}

	