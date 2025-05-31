const API_KEY = "API from api.nasa.gov"; 
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

fetch(APOD_URL)
  .then(response => response.json())
  .then(data => {
    document.getElementById("date").textContent = `Date: ${data.date}`;
    document.getElementById("title").textContent = data.title;
    document.getElementById("explanation").textContent = data.explanation;
    document.getElementById("apod-img").src = data.url;
  })
  .catch(error => {
    console.error("Error fetching NASA data:", error);
  });
