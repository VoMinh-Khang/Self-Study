
let loading = false;

const Youtubelogo = document.querySelector("#youtube-logo");
const Searchbar = document.querySelector("#search-bar");
const Rightsection = document.querySelector("#right-section")
const sidebar = document.querySelector("sidebar");
const videoPreview = document.querySelector("video-preview");


function retrieveVideoData() {

  const apiKey = 'AIzaSyDTYj8lClEz67nyqj6UJ1bisEDUedRwXBU';
  

  const videoId = 'A2CSTTF41uM&t=7422s';
  
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;


  fetch(url)
    .then(response => response.json())
    .then(data => {

      const videoTitle = data.items[0].snippet.title;
      const videoThumbnail = data.items[0].snippet.thumbnails.default.url;

      const titleElement = document.querySelector('.video-title');
      const thumbnailElement = document.querySelector('.thumbnail');

      titleElement.textContent = videoTitle;
      thumbnailElement.src = videoThumbnail;
    })
    .catch(error => {
      console.error('Error retrieving video data:', error);
    });
}