


function generateRadios() {
  const temporary = document.getElementById("ticket-form-event").value;
  let parentElement = document.getElementById("input-container");
  document.getElementById("heading-team").hidden = true;
  let numRadios;
  let btntext=document.getElementById("registerbtn");
 
  while (parentElement.firstChild) 
    {
      parentElement.removeChild(parentElement.firstChild);
    }
  document.getElementById("team-options").innerHTML = "";
 
 // assigning the number of radios to be generated

  if(temporary==="Paper Presentation" || temporary==="Poster Presentation" || temporary==="Coding")
  {
   numRadios=2;
  }
  else if(temporary==="Technical Quiz")
  {
    numRadios=3;
  }
  else if(temporary==="Project Expo")
  {
    numRadios=4;
  }
  else{
    numRadios=1;
  }
  if(temporary==="Paper Presentation" || temporary==="Poster Presentation" || temporary==="Technical Quiz")
  {
    btntext.innerHTML = "Register 300/-";
  }
  else if(temporary==="Coding")
  {
    btntext.innerHTML = "Register 200/-";
  }
  else if(temporary==="Project Expo")
  {
    btntext.innerHTML = "Register 400/-";
  }
  else{
    btntext.innerHTML = "Register 100/-";
  }


  // Generate the specified number of radios
  for (let i = 0; i <= numRadios-1; i++) {
    
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ticket-form-radio";
    radio.id = "radio";
    radio.value = i;
    radio.style.accentColor = "#04a799";
    radio.className = "radio";
    const label = document.createElement("label");
    label.for = "radio" + i;
    label.textContent = i;
    radio.style.display="flex";
    
    document.getElementById("heading-team").hidden = false; 
    radio.style.gap="15px";
    radio.onclick =
    function () {
     const num= parseInt(radio.value);
     // clear previous input if any
     document.getElementById("input-container").innerHTML = "";
   
     // create new input field(s)
     for (let i = 1; i <= num; i++) {
       let input = document.createElement("input");
       input.type = "text";
       input.id = "ticket-form-team" + i;
       input.name = "TeamMember" + i;
       input.required=true;
       input.placeholder = "Team Member Name " + i;
       input.className="form-control ticket-form-team"
       document.getElementById("input-container").appendChild(input);
     }
   
     // show input container
     document.getElementById("input-container").style.display = "block";
   }
   
    document.getElementById("team-options").appendChild(radio);
    document.getElementById("team-options").appendChild(label);
  }
}
