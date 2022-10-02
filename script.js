$(document).ready(function(){
$("#signupform").validate({
rules:{
fname:{
required:true,
minlength:4
},//fname
sname:{
required:true,
minlength:4
},//sname
email:{
required:true,
email:true
}//email

}//rules
})//validate


})//readyfunction