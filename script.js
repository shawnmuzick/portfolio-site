import { firebaseConfig } from './firebase_config.js';
const nav_expand_btn = document.getElementById('mobile-nav-expand');
const nav_menu = document.getElementById('nav-menu');
const nav_links = nav_menu.querySelectorAll('li.landing-menu-item');
const form_contact = document.getElementById('form_contact');
const form_contact_submit = document.getElementById('form_contact_submit');
const contact_name = document.getElementById('contact_name');
const contact_email = document.getElementById('contact_email');
const contact_organization = document.getElementById('contact_organization');
const contact_message = document.getElementById('contact_message');
const captcha = document.getElementById('recaptcha-container');
const form_contact_error = document.getElementById('form_contact_error');
const form_contact_error_wrapper = document.getElementById('error_input_wrapper');
let CAPTCHA_VALIDATED = false;
let CAPTCHA_SIZE = 'normal';
let VIEWPORT = document.documentElement.clientWidth;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
const firestore = firebase.firestore();
const db = firestore.collection('contactData');
if (VIEWPORT <= 360) {
	CAPTCHA_SIZE = 'compact';
}

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(captcha, {
	size: CAPTCHA_SIZE,
	//theme: 'dark',
	callback: function (response) {
		CAPTCHA_VALIDATED = true;
	},
});
recaptchaVerifier.render();
function handle_nav() {
	if (nav_menu.classList.contains('show')) {
		nav_menu.classList.remove('show');
	} else {
		nav_menu.classList.add('show');
	}
}

nav_expand_btn.addEventListener('click', handle_nav);

nav_links.forEach((link) => {
	link.addEventListener('click', handle_nav);
});
const form_validate = () => {
	if (!form_contact.checkValidity()) {
		form_contact_error_wrapper.style.display = 'block';
		form_contact_error.style.display = 'block';
		form_contact_error.innerText = 'Please fill out all required fields!';
		return;
	} else {
		return true;
	}
};
const form_reset = () => {
	form_contact.reset();
	form_contact_error_wrapper.style.display = 'none';
	form_contact_error.style.display = 'none';
	form_contact_error.innerText = '';
};
form_contact_submit.addEventListener('click', (e) => {
	e.preventDefault();
	if (!form_validate()) return;
	if (!CAPTCHA_VALIDATED) {
		form_contact_error.style.display = 'block';
		form_contact_error.innerText = 'Please complete the captcha!';
		return;
	}
	const form_data = {
		name: contact_name.value,
		email: contact_email.value,
		organization: contact_organization.value,
		message: contact_message.value,
	};
	db.doc()
		.set(form_data)
		.then(() => {
			console.log('data saved!');
			window.alert('Message recieved!');
		})
		.catch((err) => console.log(err));
	form_reset();
});
