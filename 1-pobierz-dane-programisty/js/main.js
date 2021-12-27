$(document).ready(function () {

    /* console.log(`AJAX - 1- pobierz dane programisty`); */

    $('#get-data').click(function () {

        /* console.log(`funkcja pobierania po kliknieciu przycisku pobierz dane`); */


        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {

                  console.log(data);
                /*   console.log(data.imie);
                  console.log(data.nazwisko);  
                  console.log(data.zawod); */
                  /* console.log(data);   */

                let newDiv = $('<div id="dane-programisty">Dane programisty:</div>');
                $('body').append(newDiv);

                let pimie = $('<p></p>');
                let pnazwisko = $('<p></p>');
                let pzawod = $('<p></p>');
                let pfirma = $('<p></p>');

                pimie.text(`Imię: ${data.imie}`);
                pnazwisko.text(`Nazwisko: ${data.nazwisko}`);
                pzawod.text(`Zawód: ${data.zawod}`);
                pfirma.text(`Firma: ${data.firma}`);

                console.log(pfirma)/*  */ 

                newDiv.append(pimie);
                newDiv.append(pnazwisko);
                newDiv.append(pzawod);
                newDiv.append(pfirma);

            })

            .fail(function (error) {
                console.error(error);
            })

    });

})



