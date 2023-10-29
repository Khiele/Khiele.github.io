const usedCars = [
    {
        year: 2018,
        make: "Toyota",
        model: "Camry",
        mileage: 30000,
        price: 18000,
        color: "Silver",
        gasMileage: "25 mpg city, 35 mpg highway",
        image: "img/Camry,toyota.webp",
    },
    {
        year: 2016,
        make: "Honda",
        model: "Civic",
        mileage: 45000,
        price: 14000,
        color: "White",
        gasMileage: "30 mpg city, 40 mpg highway",
        image: "img/civic,honda.webp",
    },
    {
        year: 2017,
        make: "Ford",
        model: "Fusion",
        mileage: 35000,
        price: 16000,
        color: "Black",
        gasMileage: "28 mpg city, 38 mpg highway",
        image: "img/fusion,ford.webp",
    },
    {
        year: 2019,
        make: "Nissan",
        model: "Altima",
        mileage: 25000,
        price: 17000,
        color: "Blue",
        gasMileage: "27 mpg city, 36 mpg highway",
        image: "img/altima,nissan.jpg",
    },
    {
        year: 2015,
        make: "Chevrolet",
        model: "Malibu",
        mileage: 50000,
        price: 12000,
        color: "Red",
        gasMileage: "25 mpg city, 37 mpg highway",
        image: "img/malibu,chevrolet.jpg",
    },
    {
        year: 2016,
        make: "Volkswagen",
        model: "Passat",
        mileage: 40000,
        price: 15000,
        color: "Gray",
        gasMileage: "29 mpg city, 40 mpg highway",
        image: "img/passat,volkswagon.webp",
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        mileage: 22000,
        price: 16000,
        color: "Silver",
        gasMileage: "30 mpg city, 41 mpg highway",
        image: "img/elantra, hyundai.webp",
    },
    {
        year: 2014,
        make: "Subaru",
        model: "Outback",
        mileage: 60000,
        price: 14000,
        color: "Green",
        gasMileage: "22 mpg city, 30 mpg highway",
        image: "img/outback,subaru.webp",
    },
    {
        year: 2017,
        make: "Mazda",
        model: "CX-5",
        mileage: 32000,
        price: 19000,
        color: "Blue",
        gasMileage: "24 mpg city, 31 mpg highway",
        image: "img/cx5, mazda.webp",
    },
    {
        year: 2018,
        make: "Kia",
        model: "Sorento",
        mileage: 28000,
        price: 17000,
        color: "White",
        gasMileage: "22 mpg city, 29 mpg highway",
        image: "img/sorrento,kia.webp",
    },
    {
        year: 2015,
        make: "Dodge",
        model: "Challenger",
        mileage: 30000,
        price: 24000,
        color: "Black",
        gasMileage: "19 mpg city, 30 mpg highway",
        image: "img/challenger,dodge.webp",
    },
    {
        year: 2017,
        make: "Cadillac",
        model: "XT5",
        mileage: 28000,
        price: 32000,
        color: "Red",
        gasMileage: "19 mpg city, 27 mpg highway",
        image: "img/XT5, cadillac.jpg",
    },
    {
        year: 2018,
        make: "Jaguar",
        model: "F-PACE",
        mileage: 26000,
        price: 38000,
        color: "Blue",
        gasMileage: "18 mpg city, 23 mpg highway",
        image: "img/F-pace,jaguar.webp",
    },
    {
        year: 2019,
        make: "Tesla",
        model: "Model S",
        mileage: 18000,
        price: 55000,
        color: "Black",
        gasMileage: "Electric (370 miles per charge)",
        image: "img/modelS,tesla.webp",
    },
    {
        year: 2020,
        make: "Porsche",
        model: "Cayenne",
        mileage: 22000,
        price: 68000,
        color: "White",
        gasMileage: "20 mpg city, 26 mpg highway",
        image: "img/cayenne,porsche.webp",
    },
    {
        year: 2017,
        make: "Lexus",
        model: "ES",
        mileage: 29000,
        price: 26000,
        color: "White",
        gasMileage: "21 mpg city, 30 mpg highway",
        image: "img/ES, lexus.jpg",
    },
    {
        year: 2016,
        make: "BMW",
        model: "5 Series",
        mileage: 32000,
        price: 27000,
        color: "Black",
        gasMileage: "23 mpg city, 34 mpg highway",
        image: "img/5,BMW.webp",
    },
    {
        year: 2015,
        make: "Audi",
        model: "A3",
        mileage: 18000,
        price: 28000,
        color: "Silver",
        gasMileage: "24 mpg city, 34 mpg highway",
        image: "img/a3,audi.avif",
    },
];


//Script for working navbar 
// Get the input element and button
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Get the car listings container
const carListings = document.getElementById("carListings");

//Function to handle the search
function handleSearch() {

    //Get the search input value and convert it to lowercase for case-insensitive search
    const searchTerm = searchInput.value.toLowerCase();

    //Get all car cards
    const carCards = carListings.querySelectorAll(".car-card");

    //Loop through car cards and hides any that does not match the search
    carCards.forEach((carCard) => {
        const carText = carCard.innerText.toLowerCase();
        if (carText.includes(searchTerm)) {

            carCard.style.display = "block";
        } else {
            carCard.style.display = "none";
        }
    });
}

//Add an event listener to the search button
searchButton.addEventListener("click", handleSearch);

//Optionally, listens for changes in the search input and trigger the search dynamically instead of a need for a button
searchInput.addEventListener("input", handleSearch);


//Filter bar scripting
function createCarCards(cars) {
    const carContainer = document.getElementById("carListings");
    carContainer.innerHTML = "";

    cars.forEach((car) => {
        //Create HTML elements for each car card
        const card = document.createElement("div");
        card.className = "car-card"; // Add your card styling class

        // Fill in the card content
        card.innerHTML = `
        <img src="${car.image}" alt="${car.make} ${car.model} Image">
        <h2>${car.make} ${car.model}</h2>
        <p>Price: $${car.price}</p>
        <p>Year: ${car.year}</p>
        <p>Color: ${car.color}</p>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
        <div class="button-container">
          <button>More Details</button>
        </div>
      `;

        //Append the card to the car container
        carContainer.appendChild(card);
    });
}

//Function to filter cars based on filter criteria
function filterCars() {
    const yearFilter = document.getElementById("yearFilter").value;
    const makeFilter = document.getElementById("makeFilter").value;
    const mileageFilter = document.getElementById("mileageFilter").value;
    const colorFilter = document.getElementById("colorFilter").value;
    const priceFilter = document.getElementById("priceFilter").value;

    //Filter cars based on selected criteria
    const filteredCars = usedCars.filter((car) => {
        return (
            (yearFilter === "-select-" || car.year === parseInt(yearFilter)) &&
            (makeFilter === "-select-" || car.make === makeFilter) &&
            (mileageFilter === "-select-" || car.mileage <= parseInt(mileageFilter)) &&
            (colorFilter === "-select-" || car.color === colorFilter) &&
            (priceFilter === "-select-" || car.price <= parseInt(priceFilter))
        );
    });

    //Initializww car lsiitng for filtered selections
    createCarCards(filteredCars);
}

//Attach change event listeners to filter select elements
document.getElementById("yearFilter").addEventListener("change", filterCars);
document.getElementById("makeFilter").addEventListener("change", filterCars);
document.getElementById("mileageFilter").addEventListener("change", filterCars);
document.getElementById("colorFilter").addEventListener("change", filterCars);
document.getElementById("priceFilter").addEventListener("change", filterCars);

//Initialize car listings with all cars
createCarCards(usedCars);