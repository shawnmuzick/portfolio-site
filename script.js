import { firebaseConfig } from './firebase_config.js';
const nav_expand_btn = document.getElementById('mobile-nav-expand');
const nav_menu = document.getElementById('nav-menu');
const nav_links = nav_menu.querySelectorAll('li.landing-menu-item');
const form_contact = document.getElementById("form_contact");
const form_contact_submit = document.getElementById('form_contact_submit');
const contact_name = document.getElementById('contact_name');
const contact_email = document.getElementById('contact_email');
const contact_organization = document.getElementById('contact_organization');
const contact_message = document.getElementById('contact_message');
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();
const db = firestore.collection('contactData');

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
form_contact_submit.addEventListener('click', (e) => {
	e.preventDefault();
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
		form_contact.reset();
	});
