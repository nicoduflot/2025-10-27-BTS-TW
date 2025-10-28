window.addEventListener('DOMContentLoaded', function () {
    console.log('chargement des contrôles du videoplayer');

    const videos = document.querySelectorAll('.videoplayer');

    const tab = [1, 2, 3, 4, 5];
    tab.map((donnee, id, tableau) => {
        console.log(donnee, id, tableau);
    });

    videos.forEach((video) => {
        const videoFile = video.querySelector('video');
        const playPauseBtn = video.querySelector('.playPauseBtn');
        const progressBar = video.querySelector('.progressRange');
        const muteBtn = video.querySelector('.muteBtn');
        const fullscreenBtn = video.querySelector('.fullscreenBtn');
        playPauseBtn.addEventListener('click', () => {
            if (videoFile.paused) {
                videoFile.play();
                playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            } else {
                videoFile.pause();
                playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            }
        });
        videoFile.addEventListener('timeupdate', () => {
            const progress = (videoFile.currentTime / videoFile.duration) * 100;
            progressBar.value = progress;
        });

        progressBar.addEventListener('input', () => {
            const time = (progressBar.value / 100) * videoFile.duration;
            videoFile.currentTime = time;
        });

        muteBtn.addEventListener('click', () => {
            videoFile.muted = !videoFile.muted;
            muteBtn.innerHTML = videoFile.muted ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
        });

        fullscreenBtn.addEventListener('click', () => {
            if (videoFile.requestFullscreen) {
                videoFile.requestFullscreen();
            } else if (videoFile.mozRequestFullScreen) {
                videoFile.mozRequestFullScreen();
            } else if (videoFile.webkitRequestFullscreen) {
                videoFile.webkitRequestFullscreen();
            } else if (videoFile.msRequestFullscreen) {
                videoFile.msRequestFullscreen();
            }
        });
    });





});