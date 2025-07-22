
  const viewer = document.getElementById("viewer");
  let frame = 1;
  let totalFrames = 12;

  
  function updateFrame(num) {
    const padded = num.toString().padStart(2, '0');
    viewer.src = `images/chair-${padded}.png`;
  }

  function rotateOnce(callback) {
    let currentFrame = 1;
    const interval = setInterval(() => {
      updateFrame(currentFrame);
      currentFrame++;
      if (currentFrame > totalFrames) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 1000);
  }


  function zoomedRotate(callback) {
    viewer.style.transform = "scale(1.5)";
    let currentFrame = 1;
    const interval = setInterval(() => {
      updateFrame(currentFrame);
      currentFrame++;
      if (currentFrame > totalFrames) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 1000); 
  }

  function zoomOut(callback) {
    viewer.style.transform = "scale(1)";
    setTimeout(() => {
      if (callback) callback();
    }, 1000);
  }

  function runSequence() {
    rotateOnce(() => {
      zoomedRotate(() => {
        zoomOut(() => {
          // Optional repeat
          setTimeout(runSequence, 1000);
        });
      });
    });
  }

  
  runSequence();

