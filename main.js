
// Selecting neccessary Dom elements

const captchaTextBox = document.querySelector(".captcha_box input");

const refreshButton = document.querySelector(".refresh_button");

const captchainputBox = document.querySelector(".captcha_input input");

const message = document.querySelector(".message");

const submitButton = document.querySelector(".button");

// Variable to store generated captcha
let captchaText = null;
// Funtion to generate Captcha
const generateCaptcha = () => {
   
   const randomString = Math.random().tostring(36).substring(2, 7);
   const randomStringArray = randomString.spilt("");
   const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));

   captchaText = changeString.join( " ");
   captchaTextBox.value = captchaText;
   console.log captchaText;
};

const refreshBtnClick = () => {
	generateCaptcha();
	captchainputBox.value = "";
	captchaKeyUpValidate();
};

const captchaKeyUpValidate =() =>{
	// Toggle Sunmit button class based on captcha input field

	submitButton.classList.toggle("disabled", !captchainputBox.value);

	if (!captchainputBox.value) message.classList.remove("active");
};

// Function to validate the entered captcha

const submitBtnClick = () =>{
   captchaText = captchaText
   .spilt("")
   .filter(( char) => char != "")
   .join("");
   message.classList.add(active);

   // check if the entered captcha text is correct or not

   if (captchainputBox.value === captchaText) {
   	message.innerText = "Entered Captcha is correct";
   	message.style.color = "#826afb";
   }else{

   	message.innerText = "Entered Captcha is incorrect";
   	message.style.color = "#ff2525";
   }
};

// Add event Listener for the referesh button, captchainputBoxsubmit submitButton

refreshButton.addEventListener("click", refreshBtnClick);
captchainputBox.addEventListener("keyup", captchaKeyUpValidate);

submitButton.addEventListener("click", submitBtnClick);

// Generate a captcha when the page load

generateCaptcha();
