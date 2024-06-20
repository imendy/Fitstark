document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const question = option.closest('.question');
            const siblings = question.querySelectorAll('.option');
            
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            
            option.classList.add('selected');
        });
    });
});



function changeMeasurement(element, increment) {
    const valueElement = element.parentElement.querySelector('.value');
    let currentValue = parseFloat(valueElement.textContent);
    currentValue += increment;
    if (currentValue < 0) currentValue = 0; // Prevent negative values
    valueElement.textContent = currentValue.toFixed(1);
}



const customTogglePassword = document.getElementById('custom-toggle-password');
const customTogglePasswordHide = document.getElementById('custom-toggle-password-hide');
const customPassword = document.getElementById('custom-password');
customTogglePassword.addEventListener('click', function () {
    const type = customPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    customPassword.setAttribute('type', type);
    customTogglePassword.style.display = 'none';
    customTogglePasswordHide.style.display = 'block';
});
customTogglePasswordHide.addEventListener('click', function () {
    const type = customPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    customPassword.setAttribute('type', type);
    customTogglePassword.style.display = 'block';
    customTogglePasswordHide.style.display = 'none';
});

const customToggleConfirmPassword = document.getElementById('custom-toggle-confirm-password');
const customToggleConfirmPasswordHide = document.getElementById('custom-toggle-confirm-password-hide');
const customConfirmPassword = document.getElementById('custom-confirm-password');
customToggleConfirmPassword.addEventListener('click', function () {
    const type = customConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    customConfirmPassword.setAttribute('type', type);
    customToggleConfirmPassword.style.display = 'none';
    customToggleConfirmPasswordHide.style.display = 'block';
});
customToggleConfirmPasswordHide.addEventListener('click', function () {
    const type = customConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    customConfirmPassword.setAttribute('type', type);
    customToggleConfirmPassword.style.display = 'block';
    customToggleConfirmPasswordHide.style.display = 'none';
});


document.getElementById('signUpButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});


document.getElementById('btnSubmit').addEventListener('click', function() {
    window.location.href = 'index.html';
});



document.addEventListener('DOMContentLoaded', function () {
    const plans = document.querySelectorAll('.plan');
    
    plans.forEach(plan => {
        plan.addEventListener('click', function () {
            // Remove the 'selected-plan' class from all plans
            plans.forEach(p => p.classList.remove('selected-plan'));
            // Add the 'selected-plan' class to the clicked plan
            this.classList.add('selected-plan');
        });
    });
});





const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');

let active = 1;

nextButton.addEventListener("click", () => {
    active++;
    if (active > steps.length) active = steps.length;
    updateProgress();
})


prevButton .addEventListener("click", () => {
    active--;
    if (active < 1) {
        active = 1
    }
    updateProgress();
})


const updateProgress = () => {
    console.log('steps.length =>' + steps.length);
    console.log('active =>' + active);

    // toggle .active class for each list item
    steps.forEach((step, i) => {
        if (i == (active - 1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' +i)
        } else {
            step.classList.remove('active');
            form_steps[i].classList.remove('active')
        }
    })


    // enable or disable prev and next buttons
    if (active === 1) {
        prevButton.disabled = true;
    } else if (active == steps.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

updateProgress();