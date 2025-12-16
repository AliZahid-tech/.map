import { playlistArr } from "/playlist.js";

const playlistHtml = [];
playlistArr.map((obj, ind) => {
  playlistHtml.push(
    `<section class="card">
    <div class="card-start">
        <img src="/images/${playlistArr[ind].albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlistArr[ind].title}</h4>
            <p class="card-artist">${playlistArr[ind].artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
  );
});

document.getElementById("container").innerHTML = playlistHtml;
