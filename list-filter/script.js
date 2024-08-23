const locations = [
  "Sydney",
  "Tokyo",
  "New York",
  "London",
  "Paris",
  "Toronto",
  "Rio de Janeiro",
  "Cape Town",
  "Berlin",
  "Buenos Aires",
  "Melbourne",
  "Los Angeles",
  "Barcelona",
  "Vancouver",
  "Rome",
  "Zurich",
  "Stockholm",
  "Vienna",
  "Auckland",
  "Madrid",
  "Hong Kong",
  "Montreal",
  "Lisbon",
  "Prague",
  "Athens",
  "Copenhagen",
  "Oslo",
  "Helsinki",
  "Chicago",
  "Brussels",
  "Dublin",
  "Edinburgh",
  "Amsterdam",
  "Florence",
  "Venice",
  "San Francisco",
  "Seoul",
  "Munich",
  "Perth",
  "Reykjavik",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Goa"
];


const filterInput = document.getElementById('filter')
const locationListHolder = document.getElementById('location-list')

window.addEventListener('load', () => {
  locationListHolder.textContent = locations
})

filterInput.addEventListener('keyup', (e) => {
  let searchTerm = e.target.value.toLowerCase()
  let filteredLocations = locations.filter((item) => item.toLowerCase().includes(searchTerm))
  locationListHolder.textContent = filteredLocations

  console.log(filteredLocations)
})