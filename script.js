

function validateSyntax() {

    const regex = /^pet_[a-zA-Z0-9]+$/;

    let input = document.getElementById('petInput').value;
    
    // Validation logic goes here

    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here

    // Check if input starts with 'pet_' and followed by alphanumeric characters

    if (input.match(regex)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    document.getElementById('result').innerText = result;
}
