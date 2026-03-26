document.getElementById("openBtn").addEventListener("click", function () {
  document.body.innerHTML = `
        <video id="vid" width="100%" height="auto" autoplay controls>
            <source src="video/video.mp4" type="video/mp4">
        </video>
    `;

  const vid = document.getElementById("vid");


  vid.play().catch(() => {
    console.log("Autoplay with sund blocked by browser.");
  });
});
