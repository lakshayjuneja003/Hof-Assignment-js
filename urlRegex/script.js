let input = "https://www.example.com";

let regex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;// it is a condition which is used to check the url 

if (regex.test(input)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
