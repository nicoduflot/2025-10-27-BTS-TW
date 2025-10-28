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


    const audios = document.querySelectorAll('.audio');

    audios.forEach(audio=>{
        const audioFile = audio.querySelector('audio');
        const playPauseBtn = audio.querySelector('.playPauseBtn');
        const progressBar = audio.querySelector('.progress-bar');
        const currentTime = audio.querySelector('.currentTime');
        const durationTime = audio.querySelector('.duration');

        let isPlaying = false;

        playPauseBtn.addEventListener('click', () => {
            if (audioFile.paused) {
                audioFile.play();
                playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            } else {
                audioFile.pause();
                playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            }
            isPlaying = !isPlaying;
        });

        audioFile.addEventListener('timeupdate', ()=>{
            const progress = ( audioFile.currentTime / audioFile.duration) * 100;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
            currentTime.textContent = formatTime(audioFile.currentTime);
            durationTime.textContent = formatTime(audioFile.duration);
        });

        function formatTime(seconds){
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}: ${remainingSeconds.toString().padStart(2, '00')}`;
        }
    });

});