
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEzLISx82UU4qBshgJ1FNQp68GtCBf0Jp_LKWt-XzFGRqc_SfA7xqAsifJfHTOQmuz/exec';
const scriptPostersURL = 'https://script.google.com/macros/s/AKfycbxDqzG53abNMOEoo7HADzelEpjRx8KW_LL08ORKRVIN1A9SblBnAvT7RQPsT23omd8T/exec';
const scriptTechnicalURL ='https://script.google.com/macros/s/AKfycbzChEGDKcii-kvabA_0x13HqmuZYOrK-QVKH6UjeDdSR8YShwEndu4JYiUr4AB9QfQ1/exec';
const scriptCodingURL = 'https://script.google.com/macros/s/AKfycbwXgJX2qu4gZkbr5CE8QnHgcSIZaQLnTRufAQZDdrrKBI5eVACDNmiDU5-Dg3sByQgY/exec';
const scriptprojectsURL ='https://script.google.com/macros/s/AKfycbyUmjrTEaCD0xNDXkwcz72Dzi8YZ4gmH_KjsgT9U2m77z8Yn4h6-N0R64YNppWMnGupqw/exec';
const scriptCiruitURL = 'https://script.google.com/macros/s/AKfycbwd1w-2tW3XvasO8J7vFXOZu2y-aCdpVkYp6ywU6-QpQPY_HK3Js_SUsyWva0Nf6z0QMA/exec';
const form = document.forms['ticket-form'];

form.addEventListener('submit', function(e)  {
  e.preventDefault()
  const form = document.getElementById("ticket-form");
  const nameInput = document.getElementById("ticket-form-name");
  const emailInput = document.getElementById("ticket-form-email");
  const phoneInput = document.getElementById("ticket-form-phone");
  const dunum= document.getElementById('ticket-form-dunumber');
  const dunumconfirm = document.getElementById('ticket-form-dunumberconfirm');
  const loaded=document.getElementById("preload");
  const branchSelect=document.getElementById("ticket-form-branch");
  const eventselector=document.getElementById("ticket-form-event");
  const carded=document.getElementById("carder");
  const texter=document.getElementById("texter");
  const poppers =document.getElementById("cand");
  const card="tnqcar d-flex flex-wrap justify-content-center  align-items-center  position-fixed";
  isValid = true;


  if (nameInput.value.trim() === "") {
    nameInput.classList.add("is-invalid");
    isValid = false;
    nameInput.focus();
  } else {
    nameInput.classList.remove("is-invalid");
  }

  // validate the email input
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("is-invalid");
    isValid = false;
    emailInput.focus();
  } else {
    emailInput.classList.remove("is-invalid");
  }

  // validate the phone input
  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("is-invalid");
    isValid = false;
    phoneInput.focus();
  } else {
    phoneInput.classList.remove("is-invalid");
  }

  // validate the DU number input
  if (dunum.value === "") {
    dunum.classList.add("is-invalid");
    isValid = false;
    dunum.focus();
  } else {
    dunum.classList.remove("is-invalid");
  }

  // validate the confirmed DU number input
  if (dunumconfirm.value=== "") {
    dunumconfirm.classList.add("is-invalid");
    isValid = false;
    dunumconfirm.focus();
  } 
  else if (dunum.value !== dunumconfirm.value) {
    dunumconfirm.classList.add("is-invalid");
    document.getElementById("error-msg").hidden = false;
    isValid = false;
    dunumconfirm.focus();
  }
  
  else {
    dunumconfirm.classList.remove("is-invalid");
    document.getElementById("error-msg").hidden = true;
  }

  // validate the branch select
  if (branchSelect.value === "Select") {
    branchSelect.classList.add("is-invalid");
    isValid = false;
    branchSelect.focus();
  } else {
    branchSelect.classList.remove("is-invalid");
  }

  // validate the event select
  if (eventselector.value === "Select") {
    eventselector.classList.add("is-invalid");
    eventselector.focus();
    isValid = false;
  } else {
    eventselector.classList.remove("is-invalid");
  }

  // prevent the form submission if any field is invalid
  if (!isValid) {
    e.preventDefault();
  }
  else
  {
  
    loaded.className="loaderin d-flex flex-wrap justify-content-center align-content-center align-items-center  position-fixed bg-black";
   if(eventselector.value==="Paper Presentation") {
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    
    .catch(error => console.error('Error!', error.message))
  }
  else if(eventselector.value==="Poster Presentation") {
    fetch(scriptPostersURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    .catch(error => console.error('Error!', error.message))
  }
 else if(eventselector.value==="Technical Quiz") {

    fetch(scriptTechnicalURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    .catch(error => console.error('Error!', error.message))
  }
  else if(eventselector.value==="Project Expo") {

    fetch(scriptprojectsURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    
    .catch(error => console.error('Error!', error.message))
  }
  else if(eventselector.value==="Circuitrix") {

    fetch(scriptCiruitURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    .catch(error => console.error('Error!', error.message))
  }
  else  {
    fetch(scriptCodingURL, { method: 'POST', body: new FormData(form)})
    .then(response => carded.className=card)
    .then(response => texter.innerHTML="")
    .then(response => poppers.hidden=false)
    .catch(error => console.error('Error!', error.message))
  }

}
});




