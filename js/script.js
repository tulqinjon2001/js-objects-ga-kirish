let elForm = document.querySelector('.form');
let elInputFirstName = elForm.querySelector('.firstname-input');
let elInputlastName = elForm.querySelector('.lastname-input');
let elInputAge = elForm.querySelector('.age-input');
let elInputPhoneNumber = elForm.querySelector('.phone-input');

let elOutList = document.querySelector('.out-list');


console.log();

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let inputFirstname = elInputFirstName.value;
  let inputLastname = elInputlastName.value;
  let inputAge = elInputAge.value;
  let inputPhoneNumber = elInputPhoneNumber.value;

  let personData = {
    firstName: inputFirstname,
    lastName: inputLastname,
    age: inputAge,
    phoneNumber: inputPhoneNumber,
  }

  let elItem = document.createElement("li"); // create li
  elItem.setAttribute("class", "p-2 bg-light rounded-4 fs-5 fw-bold my-2");

  let outContent = document.createElement("div"); // create div for output content

  let outContentTextFullname = document.createElement("p"); // create p for output person data text
  outContent.appendChild(outContentTextFullname);
  outContentTextFullname.textContent = `Full Name: ${personData.firstName} ${personData.lastName}`;
  // outContentTextFullname.setAttribute("class", "fs-5 fw-bold");

  let outContentTextAge = document.createElement("p"); // create p for output person data text
  outContent.appendChild(outContentTextAge);
  outContentTextAge.textContent = `Age: ${personData.age}`;

  let outContentTextPhoneNumber = document.createElement("p"); // create p for output person data text
  outContent.appendChild(outContentTextPhoneNumber);
  outContentTextPhoneNumber.textContent = `Phone Number: ${personData.phoneNumber}`;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.setAttribute("class", "bg-danger");

  let checkBtn = document.createElement("input");
  checkBtn.setAttribute("class", "bg-light");
  checkBtn.setAttribute("type", "checkbox");


  elItem.appendChild(outContent);
  elItem.appendChild(checkBtn);
  elItem.appendChild(deleteBtn);
  elOutList.appendChild(elItem);

  deleteBtn.addEventListener('click', function(){
    elOutList.removeChild(elItem);
  });

  checkBtn.addEventListener('change', function(){
    if(checkBtn.checked) {
      elItem.style.opacity = "0.75";
    } else {
      elItem.style.opacity = "1";
    }
  });

  elInputFirstName.value = "";
  elInputlastName.value = "";
  elInputAge.value = "";
  elInputPhoneNumber.value = "";
})
