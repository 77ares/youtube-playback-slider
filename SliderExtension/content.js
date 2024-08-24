window.addEventListener('load', () => {
    // Wait for the YouTube player to load
    const checkInterval = setInterval(() => {
        const videoPlayer = document.querySelector('video');
        const controlBar = document.querySelector('.ytp-left-controls');

        if (videoPlayer && controlBar) {
            clearInterval(checkInterval); // Stop checking once the elements are found

            // Create a container for the speed label and slider
            const speedControlContainer = document.createElement('div');
            speedControlContainer.style.display = 'flex';
            speedControlContainer.style.alignItems = 'center';
            speedControlContainer.style.marginLeft = '10px';

            // Create the speed label
            const speedLabel = document.createElement('span');
            speedLabel.innerText = `${videoPlayer.playbackRate}x`;
            speedLabel.style.color = 'white';
            speedLabel.style.marginRight = '5px';
            speedLabel.className = 'speed-label';

            // Create the speed slider
            const speedSlider = document.createElement('input');
            speedSlider.type = 'range';
            speedSlider.min = 0.5;
            speedSlider.max = 2.0;
            speedSlider.step = 0.1;
            speedSlider.value = videoPlayer.playbackRate;
            speedSlider.style.width = '100px';
            speedSlider.title = 'Playback Speed';

            // Event listener to change playback speed
            speedSlider.addEventListener('input', function () {
                const newSpeed = parseFloat(this.value).toFixed(1);
                videoPlayer.playbackRate = newSpeed;
                speedLabel.innerText = `${newSpeed}x`;
            });

            // Append the speed label and slider to the container
            speedControlContainer.appendChild(speedLabel);
            speedControlContainer.appendChild(speedSlider);

            // Append the container to the control bar
            controlBar.appendChild(speedControlContainer);
        }
    }, 1000); // Check every second until the player is ready
});
