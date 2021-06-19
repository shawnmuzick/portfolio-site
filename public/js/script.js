const form_contact = document.getElementById("form_contact");
const form_contact_submit = document.getElementById("form_contact_submit");
const contact_name = document.getElementById("contact_name");
const contact_email = document.getElementById("contact_email");
const contact_message = document.getElementById("contact_message");
const captcha = document.getElementById("recaptcha-container");
const form_contact_error = document.getElementById("form_contact_error");
const form_contact_error_wrapper = document.getElementById(
  "error_input_wrapper"
);
let CAPTCHA_VALIDATED = false;
let CAPTCHA_SIZE = "normal";
let VIEWPORT = document.documentElement.clientWidth;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();
const db = firestore.collection("contactData");
const galleryImages = [...document.getElementsByClassName("gallery-image")];
if (VIEWPORT <= 360) {
  CAPTCHA_SIZE = "compact";
}

const form_validate = () => {
  if (!form_contact.checkValidity()) {
    form_contact_error_wrapper.style.display = "block";
    form_contact_error.style.display = "block";
    form_contact_error.innerText = "Please fill out all required fields!";
    return;
  } else {
    return true;
  }
};
const form_reset = () => {
  form_contact.reset();
  form_contact_error_wrapper.style.display = "none";
  form_contact_error.style.display = "none";
  form_contact_error.innerText = "";
};
form_contact_submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!form_validate()) return;
  const form_data = {
    name: contact_name.value,
    email: contact_email.value,
    message: contact_message.value,
  };
  db.doc()
    .set(form_data)
    .then(() => {
      window.alert("Message recieved!");
    })
    .catch((err) => console.log(err));
  form_reset();
});

function handleModal(e) {
  const modal = document.createElement("dialog");
  const img = document.createElement("img");
  const closeBtn = document.createElement("button");
  const container1 = document.createElement("div");
  const container2 = document.createElement("div");

  closeBtn.innerText = "X";
  closeBtn.style.marginLeft = "auto";
  closeBtn.classList.add("btn");
  img.src = e.target.getAttribute("src").split("-")[0] + ".webp";

  container1.appendChild(closeBtn);
  container1.classList.add("flex");
  container1.style.width = "100%";
  container2.appendChild(img);
  container2.classList.add("flex");
  container2.style.width = "100%";

  modal.appendChild(container1);
  modal.appendChild(container2);
  modal.open = false;
  setTimeout(() => {
    modal.open = true;
  }, 1);
  document.body.appendChild(modal);
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}
galleryImages.forEach((i) => i.addEventListener("click", handleModal));
