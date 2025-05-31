const API_KEY = "yzrevBAkpJvECWG3Bgpn1xHdXA30QfTU8xm975pY"; 
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
