//Train ticket calculation

//Declaration
//Name
const formBtn = document.getElementById("generate");
const kmInput = document.getElementById("km");
const ageSelect = document.getElementById("age");

//Elaboration
generate.addEventListener("click",
    function() {
        //Price calculation with km and age
        const userKm = parseInt(kmInput.value);
        console.log(userKm);
        const userAge = ageSelect.value;
        console.log(userAge);
        //Price calculation
        let price = 0.21;

        let cost;

        cost = price * userKm;

        if (userAge === 'Minorenne') {
            cost = cost - (cost * 20 / 100);
        }   else if (userAge === 'Over 65') {
            cost = cost - (cost * 40 / 100);
        }   else {
            cost = price * userKm;
        }
        
        const random = (90000,92911);
        Math.floor(Math.random() * (92911 - 90000) + 90000);
        
        //Final Output
        //Showing the price for each age
        document.querySelector('.carrozza').innerHTML =
        Math.floor(Math.random() * 11);
        document.querySelector('.cp').innerHTML = random;
        document.querySelector('.costo').innerHTML = cost;
    }
);