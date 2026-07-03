function carousel() {
    let image = document.getElementById('carousel');
    let frame1;
    let frame2;
    let frame3;
    function caro() {
        // Change the frame depending on what it currently is
        if (image.src == frame1) {
            image.src = frame2;
        } else if (image.src == frame2) {
            image.src = frame3;
        } else if (image.src == frame3) {
            image.src = frame1;
        }
    }
    image.addEventListener("click", caro);
}