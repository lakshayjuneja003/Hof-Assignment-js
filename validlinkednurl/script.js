function validateLinkedInURL(url) {
    // Define the regular expression to match valid LinkedIn profile URLs
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test if the input URL matches the regular expression
    if (regex.test(url)) {
      console.log(url + " is a valid LinkedIn profile URL.");
    } else {
      console.log(url + " is not a valid LinkedIn profile URL.");
    }
  }
  
  // Examples of input URLs to be validated
  let url1 = "https://www.linkedin.com/in/johndoe123";
  let url2 = "https://www.linkedin.com/in/jane-doe_456";
  let url3 = "https://www.linkedin.com/in/john_doe-789";
  let url4 = "https://www.linkedin.com/in/johndoelongurlwithmorethan30characters";
  
  // Validate each input URL
  validateLinkedInURL(url1);
  validateLinkedInURL(url2);
  validateLinkedInURL(url3);
  validateLinkedInURL(url4);
  