const college= document.getElementById("ticket-form-college");
college.addEventListener("change", function(){
  if(college.value==="Other"){
    college.remove();
    let input = document.createElement("input");
       input.type = "text";
       input.id = "ticket-form-college";
       input.name = "College";
       input.required=true;
       input.placeholder = "Enter your College Name ";
       input.className="form-control"
       document.getElementById("college-container").appendChild(input);
       
  }

});



    
   