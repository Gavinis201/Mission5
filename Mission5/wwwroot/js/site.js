function calcTotal(){
    // Get the input values using jQuery
    let inputHours = parseFloat($('#hours').val());
    let hourlyRate = parseInt($('#rate').val());

    // Check if the input values are valid and positive numbers
    if (isNaN(inputHours) || inputHours <= 0) {
        alert("Please enter a valid positive number for hours.");
        return;
    }
    if (isNaN(hourlyRate) || hourlyRate <= 0) {
        alert("Please enter a valid positive number for the rate.");
        return;
    }

    // Calculate the total
    let total = inputHours * hourlyRate;

    // Set the total value in the total input field using jQuery
    $('#total').val(total);
}