/* /* Mobile-menu rozwjanie i zwijanie */

$(document).ready(function () {
    $('.mobile-hamburger').click(function () {
        $('.open-menu-holder').slideDown();
    })

    $('.mobile-menu-close').click(function () {
        $('.open-menu-holder').slideUp();
    })

})

let appForm = document.getElementById('app-form');

// console.log(appForm);

/* Funkcja - tworzenie spotkania */

const createAppointment = (app) => {

    let appmessage = document.querySelector('.appointment-info');

     fetch ('https://akademia108.pl/api/ajax/post-appointment.php', {
        
        headers: {
            
            'Content-Type': 'application/json',

        },

        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(app)
    })

    .then (response => response.json())
    .then (responseJSON => {
                                                                          
        // console.log(responseJSON);
        let message = responseJSON.appointment.name;
        appmessage.innerText = `Dziękujemy ${message}. Zostałeś zapisany!`;
        appmessage.style.color = 'black';

    })

    .catch((error) => {

        console.error('Error:', error);
        window.alert(`Błąd: serwer nie odpowiada`);

    });
        
}



/* Funkcja - Walidacja formularza */
const validate = (event) => {

    event.preventDefault();

    let appError = document.querySelector('.appointment-info');

    let formFields = document.querySelectorAll('.field');

    let flagFields = true;

    // console.log(formFields);

    let appointment = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('phone').value,
        phone: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
    };


    for (let i = 0; i < formFields.length; i++) {

        if (formFields[i].value.trim() === '') {

            flagFields = false;
            formFields[i].classList.add('error');

        }

        else {

            formFields[i].classList.remove('error');

        } 

    }

    if (flagFields) {

        if (validateDate(formFields[4].value)) {

            appError.innerText = '';
            createAppointment (appointment);

        }

        else {
            appError.innerText = 'Podałeś nieaktualną datę!';
            appError.style.color = 'red';
        }

    }

    else {

        appError.innerText = 'ERROR - uzupełnij brakujące pola formularza';
        appError.style.color = 'red';
        
    }

}


/* Funkcja - Walidacja daty formularza */

function validateDate(date){
     
    let inputDate = new Date(date);
    let today = new Date();

    if(today > inputDate) {

       return false;

    }else {

       return true;

    }

}

appForm.addEventListener('submit', validate);