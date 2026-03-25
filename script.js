document.getElementById("openBtn").addEventListener("click", function () {
  document.body.innerHTML = `
        <video id="vid" width="100%" autoplay controls muted>
            <source src="video/video.mp4" type="video/mp4">
        </video>
    `;

  const vid = document.getElementById("vid");

  vid.muted=true;
  vid.play().catch((error) => {
    console.log("Autoplay failed:",error);
  });
});
