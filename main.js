
// Get the required elements
const requiredMessages = document.querySelectorAll(".errorMessage");
const nameField = document.getElementById("userName");
const emailField = document.getElementById("userEmail");
const numberField = document.getElementById("userNumber");
const submitBtn = document.querySelectorAll(".btn1");
const goBackBtns = document.querySelectorAll(".btn2");
const sections = document.querySelectorAll(".page");
const circleSteps = document.querySelectorAll(".step");

let currentStep = 0; 

function updateActiveCircle() {
  circleSteps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

// Add event listener to the submit buttons
submitBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    if (
      nameField.value === "" ||
      emailField.value === "" ||
      numberField.value === ""
    ) {
      requiredMessages.forEach((span) => {
        span.style.display = "none";
      });
      if (nameField.value === "") {
        requiredMessages[0].style.display = "block";
        nameField.style.borderColor = "red";
      }
      if (emailField.value === "") {
        requiredMessages[1].style.display = "block";
        emailField.style.borderColor = "red";
      }
      if (numberField.value === "") {
        requiredMessages[2].style.display = "block";
        numberField.style.borderColor = "red";
      }
    } else {
      requiredMessages.forEach((span) => {
        span.style.display = "none";
      });
      // Hide the current section and show the next section
      const currentSection = btn.closest("section");
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        currentSection.style.display = "none";
        nextSection.style.display = "block";
        nextSection.scrollIntoView({ behavior: "smooth" });
        currentStep++;
        updateActiveCircle();
      }
    }
  });
});


// Add event listener to the "Go back" buttons
goBackBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    // Hide the current section and show the previous section
    const currentSection = btn.closest("section");
    const prevSection = currentSection.previousElementSibling;
    if (prevSection) {
      currentSection.style.display = "none";
      prevSection.style.display = "block";
      prevSection.scrollIntoView({ behavior: "smooth" });
      currentStep--;
      updateActiveCircle();
    }
  });
});


// Add input event listeners to the fields
nameField.addEventListener("input", function () {
  if (nameField.value !== "") {
    requiredMessages[0].style.display = "none";
    nameField.style.borderColor = "hsl(229, 24%, 87%)";
  }
});

emailField.addEventListener("input", function () {
  if (emailField.value !== "") {
    requiredMessages[1].style.display = "none";
    emailField.style.borderColor = "hsl(229, 24%, 87%)";
  }
});

numberField.addEventListener("input", function () {
  if (numberField.value !== "") {
    requiredMessages[2].style.display = "none";
    numberField.style.borderColor = "hsl(229, 24%, 87%)";
  }
});

// Add focus event listeners to the fields
nameField.addEventListener("focus", function () {
  nameField.style.borderColor = "hsl(243, 100%, 62%)";
});

emailField.addEventListener("focus", function () {
  emailField.style.borderColor = "hsl(243, 100%, 62%)";
});

numberField.addEventListener("focus", function () {
  numberField.style.borderColor = "hsl(243, 100%, 62%)";
});


// SECOND-STEP 


const fakeToggle = document.getElementById("fake-toggle");
const monthlyDiv = document.getElementById("monthly");
const yearlyDiv = document.getElementById("yearly");
const firstParagraph = document.querySelector(".first-p");
const secondParagraph = document.querySelector(".second-p");
const thirdParagraph = document.querySelector(".third-p");


// Store the original text content of the first paragraph element
const originalText = firstParagraph.textContent;
const secondOriginalText = secondParagraph.textContent;
const thirdOriginalText = thirdParagraph.textContent;

fakeToggle.addEventListener("click", function() {
  if (fakeToggle.classList.contains("active")) {
    fakeToggle.classList.remove("active");
    yearlyDiv.classList.remove("active");
    monthlyDiv.classList.add("active");
    // Update the text content of the first paragraph element to its original value
    firstParagraph.textContent = originalText;  
    secondParagraph.textContent = secondOriginalText; 
    thirdParagraph.textContent = thirdOriginalText; 

    // Store the state of the toggle in local storage
    localStorage.setItem("subscriptionType", "monthly");

  } else {
    fakeToggle.classList.add("active");
    monthlyDiv.classList.remove("active");
    yearlyDiv.classList.add("active");
    // Update the text content of the first paragraph element to "year" when the "Yearly" option is selected
    firstParagraph.textContent = "+$90/yr";
    secondParagraph.textContent = " $120/yr";
    thirdParagraph.textContent = "+$150/yr";

    // Store the state of the toggle in local storage
    localStorage.setItem("subscriptionType", "yearly");
  }
});


const planOptions = document.querySelectorAll('#plan-ul li');
// Add click event listener to each plan option
planOptions.forEach((option) => {
  option.addEventListener('click', () => {
    // Remove the "selected" class from all plan options
    planOptions.forEach((option) => {
      option.classList.remove('selected');
    });

    // Add the "selected" class to the clicked plan option
    option.classList.add('selected');

    // Check if at least one option is selected
    const atLeastOneSelected = Array.from(planOptions).some((option) => option.classList.contains('selected'));

    // Enable or disable the "NEXT STEP" button based on whether at least one option is selected
    if (atLeastOneSelected) {
      submitBtn.forEach(btn => btn.removeAttribute('disabled'));
    } else {
      submitBtn.forEach(btn => btn.setAttribute('disabled', true));
    }
  });
});

const navigationLinks = document.querySelectorAll('.info-ul li a');

// Add click event listener to each navigation link
navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Check if the link is disabled
    if (link.parentElement.classList.contains('disabled')) {
      event.preventDefault();
      return;
    }
  });
});

// Add click event listener to each plan option
planOptions.forEach((option) => {
  option.addEventListener('click', () => {
    // Remove the "selected" class from all plan options
    planOptions.forEach((option) => {
      option.classList.remove('selected');
    });

    // Add the "selected" class to the clicked plan option
    option.classList.add('selected');

    // Check if at least one option is selected
    const atLeastOneSelected = Array.from(planOptions).some((option) => option.classList.contains('selected'));

    // Enable or disable the navigation links based on whether at least one option is selected
    navigationLinks.forEach((link, index) => {
      if (atLeastOneSelected || index === 0) {
        link.parentElement.classList.remove('disabled');
      } else {
        link.parentElement.classList.add('disabled');
      }
    });
  });
});


const planLiElements = document.querySelectorAll('.plan-li');
planLiElements.forEach(function(element) {
  element.addEventListener('click', function() {
    // Remove the active class from all other elements
    planLiElements.forEach(function(el) {
      el.classList.remove('active');
    });
    // Add the active class to the clicked element
    this.classList.add('active');
  });
});


// THIRD-STEP

// Get the subscription type from local storage
let subscriptionType = localStorage.getItem("subscriptionType");

// If the subscription type is not set, default to monthly
if (!subscriptionType) {
  localStorage.setItem("subscriptionType", "monthly");
}

const addsSpans = document.querySelectorAll(".adds-span");


function updateAdds() {
  const monthlyRate = {
    "+$1/mo": "+$1/mo",
    "+$2/mo": "+$2/mo",
  };

  const yearlyRate = {
    "+$1/mo": "+$10/yr",
    "+$2/mo": "+$20/yr",
  };

  const rates = subscriptionType === "monthly" ? monthlyRate : yearlyRate;

  addsSpans.forEach((span) => {
    const text = span.textContent;
    span.textContent = rates[text];
  });
}

// Listen for changes to the state of the toggle on the first page
window.addEventListener("message", function (event) {
  subscriptionType = event.data;
  localStorage.setItem("subscriptionType", subscriptionType);

  // Update the add-ons prices
  updateAdds();
});

// Call the updateAdds function on page load
updateAdds();

// Add my code here

// Variables to store user choices
let selectedPlan = '';
let selectedAddOns = [];

// Function to update the summary section
function updateSummary() {
  // Get the summary section elements
  const chosenPackage = document.querySelector('.chosen-package');
  const chosenService = document.querySelector('.chosen-service');
  const packagePrice = document.querySelector('.package-price');
  const servicePrice = document.querySelector('.service-price');
  const totalSpan = document.querySelector('.total-span');

  // Display the selected plan and add-ons in the summary section
  chosenPackage.textContent = selectedPlan.title;
  packagePrice.textContent = `$${selectedPlan.price}`;

  chosenService.innerHTML = '';
  let totalPrice = parseFloat(selectedPlan.price);


  selectedAddOns.forEach((addOn) => {
    const serviceItem = document.createElement('div');
    serviceItem.classList.add('service-item');
    const title = document.createElement('p');
    title.classList.add('chosen-service'); // Add the 'chosen-service' class
    title.textContent = addOn.title;
    const price = document.createElement('span');
    price.classList.add('service-price'); // Add the 'service-price' class
    price.textContent = `$${addOn.price}`;
    serviceItem.appendChild(title);
    serviceItem.appendChild(price);
    chosenService.appendChild(serviceItem);
  
    totalPrice += parseFloat(addOn.price);
  });
  

  // Display the total price
  totalSpan.textContent = `$${totalPrice.toFixed(2)}`;
}

// Add event listener to the plan options
planOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    // Update the selected plan
    selectedPlan = {
      title: option.querySelector('h5').textContent,
      price: option.querySelector('p').textContent.replace(/[^\d.-]/g, ''),
    };

    // Update the summary section
    updateSummary();
  });
});

// Add event listener to the add-on checkboxes
const addOnCheckboxes = document.querySelectorAll('.adds-li input[type="checkbox"]');
addOnCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    // Update the selected add-ons
    const addOnTitle = checkbox.closest('.adds-li').querySelector('h5').textContent;
    const addOnPrice = checkbox.closest('.adds-li').querySelector('.adds-span').textContent.replace(/[^\d.-]/g, '');

    if (checkbox.checked) {
      selectedAddOns.push({ title: addOnTitle, price: addOnPrice });
    } else {
         // Remove the add-on from the selected add-ons
         selectedAddOns = selectedAddOns.filter((addOn) => addOn.title !== addOnTitle);
        }
    
        // Update the summary section
        updateSummary();
      });
    });
    
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
    
      // Gather the form data
      const formData = {
        plan: selectedPlan,
        addOns: selectedAddOns,
      };
    
      // You can perform further actions with the form data, such as sending it to a server or displaying a success message.
    
      // For now, let's log the form data to the console
      console.log(formData);
    }
    
    // Add event listener to the form submission
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleSubmit);
    