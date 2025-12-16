import { playlistArr } from "/playlist.js";

const playlistHtml = playlistArr.map((obj, ind) => {
  return `<section class="card">
    <div class="card-start">
        <img src="/images/${obj.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${obj.title}</h4>
            <p class="card-artist">${obj.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `;
});

document.getElementById("container").innerHTML = playlistHtml;
