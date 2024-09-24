const passwordBox = document.getElementById("password");
const length = 9; // Define the desired length of the password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+}";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";

    // Add one character from each character set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Continue adding random characters until desired length is reached
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }


    passwordBox.value = password;
}

    function copyPassword(){
        passwordBox.select();
        document.execCommand("copy");
    }
