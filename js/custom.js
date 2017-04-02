function ClickSignUp() {
	
	var Fn = document.SignUp.Fnm.value;
	var Ln = document.SignUp.Lnm.value;
	var El = document.SignUp.Eml.value;
	var PsW = document.SignUp.Psw.value;
	var RPs = document.SignUp.RPsw.value;
	var Tx = document.SignUp.TxT.value;
	var Show = document.getElementById("Error");
	var Reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (Fn=="" || Ln=="" || El=="" || PsW=="" || RPs=="" || Tx==""){
		Show.innerHTML="Please fill the form correctly !";
		document.SignUp.Fnm.style.border="1.5px solid #EE4646";
		document.SignUp.Lnm.style.border="1.5px solid #EE4646";
		document.SignUp.Eml.style.border="1.5px solid #EE4646";
		document.SignUp.Psw.style.border="1.5px solid #EE4646";
		document.SignUp.RPsw.style.border="1.5px solid #EE4646";
		document.SignUp.TxT.style.border="1.5px solid #EE4646";

	}
	else if (!Reg.test(El)){
		Show.innerHTML="Invalid email address!";
		document.SignUp.Eml.style.border="1.5px solid #EE4646";
	}
	else if ( PsW.length <=5){
		Show.innerHTML="Please input the password more than 5 characters !";
		document.SignUp.Psw.style.border="1.5px solid #EE4646";
	}
	else if ( PsW != RPs){
		Show.innerHTML="Password does not match!";
		document.SignUp.RPsw.style.border="1.5px solid #EE4646";

	}
	else{
		document.SignUp.Fnm.style.border="1.5px solid #63B062";
		document.SignUp.Lnm.style.border="1.5px solid #63B062";
		document.SignUp.Eml.style.border="1.5px solid #63B062";
		document.SignUp.Psw.style.border="1.5px solid #63B062";
		document.SignUp.RPsw.style.border="1.5px solid #63B062";
		document.SignUp.TxT.style.border="1.5px solid #63B062";
	}


}
// form validation
//camera
jQuery(function(){
			
			jQuery('#camera_wrap_1').camera({
				thumbnails:true
			});
		});
//off camera
////word counter
  
  ////word counter end