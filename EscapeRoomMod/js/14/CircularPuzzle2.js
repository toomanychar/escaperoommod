if (getFlag("14_r") == "1") {
	document.getElementById("text").innerHTML = "Dieses Puzzle habe ich schon gelöst."
} else {
	document.querySelectorAll('.circle').forEach((circle, index) => {
    let rotation = Math.floor(Math.random() * 360); // Random initial rotation
    const targetRotation = 0; // Target rotation angle for alignment

    // Apply the initial random rotation
    circle.style.transform = `rotate(${rotation}deg)`;

    circle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const startX = e.clientX;
        let initialRotation = rotation;

        function onMouseMove(e) {
            const deltaX = e.clientX - startX;
            rotation = initialRotation + deltaX;
            circle.style.transform = `rotate(${rotation}deg)`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            // Check alignment each time rotation stops
            checkAlignment();
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});
}



// Function to check alignment with refined success criteria
function checkAlignment() {
    const layers = document.querySelectorAll('.circle');
    let isAligned = true;

    layers.forEach((layer, index) => {
        // Extract and normalize the rotation angle
        const currentRotation = parseFloat(layer.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
        const normalizedRotation = ((currentRotation % 360) + 360) % 360;

        // Log the rotation to help with debugging
        console.log(`Layer ${index + 1}: Rotation = ${normalizedRotation} degrees`);

        // Check if the current rotation is within the accepted range (0-2 or 358-360)
        if (!((normalizedRotation >= 0 && normalizedRotation <= 2) || (normalizedRotation >= 358 && normalizedRotation <= 360))) {
            isAligned = false;
        }
    });

    if (isAligned) {
		alert('Herzlichen Glückwunsch, Sie haben das Puzzle gelöst!');
		setFlag("14_r", 1)
    }
}
