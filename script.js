const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');




document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const currentTimeDisplay = document.querySelector(".current-time");
    const durationDisplay = document.querySelector(".duration");
    const progressBar = document.querySelector('.active-line');
    let isPlaying = false;

    playPauseButton.addEventListener("click", function() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.classList.remove("bx-pause");
            playPauseButton.classList.add("bxs-right-arrow");
        } else {
            audioPlayer.play();
            playPauseButton.classList.remove("bx-play");
            playPauseButton.classList.add("bx-pause");
        }
        isPlaying = !isPlaying;
    });

    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = formatTime(audioPlayer.currentTime);
        const duration = formatTime(audioPlayer.duration);
        currentTimeDisplay.textContent = currentTime;
        durationDisplay.textContent = duration;
        updateProgressBar();
    });

    audioPlayer.addEventListener('ended', function() {
        playPauseButton.classList.remove("bx-pause");
        playPauseButton.classList.add("bxs-right-arrow");
        isPlaying = false;
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function updateProgressBar() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

function toggleAudio(audioId, title, artist, albumCover) {
    var audio = document.getElementById(audioId);
    var songTitle = document.querySelector(".song-info h3");
    var artistName = document.querySelector(".song-info h5");
    var albumCoverImg = document.querySelector(".song-info img");

    if (audio.paused) {
        audio.play();
        songTitle.textContent = title;
        artistName.textContent = artist;
        albumCoverImg.src = albumCover;
    } else {
        audio.pause();
    }
}
