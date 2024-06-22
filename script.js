document.getElementById('signing-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const agree1 = document.querySelector('input[name="agree1"]').checked;
    const agree2 = document.querySelector('input[name="agree2"]').checked;
    const agree3 = document.querySelector('input[name="agree3"]').checked;
    const signature = document.getElementById('signature').value;

    if (!agree1 || !agree2) {
        alert('You must agree to both statements.');
        return;
    }

    if (!agree3) {
        alert('Help is on the way.');
        return;
    }

    if (signature.trim() === '') {
        alert('Please provide your signature.');
        return;
    }

    // Process the form data
    console.log('Form submitted successfully!');
    console.log('Agree 1:', agree1);
    console.log('Agree 2:', agree2);
    console.log('Agree 3:', agree3);
    console.log('Signature:', signature);

    alert('Form submitted successfully!');

    // Optionally, send the data to a server using fetch or XMLHttpRequest
    // For this example, we'll just reset the form
    document.getElementById('signing-form').reset();
});
