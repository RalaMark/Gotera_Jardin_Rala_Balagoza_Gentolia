// Function to encrypt plain text using Caesar cipher with autokey algorithm
function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var shift = parseInt(prompt('Enter the shift (a number between 1 and 25):'));
    
    var encryptedText = '';
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      var encryptedCharCode;
  
      if (i === 0) {
        encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
      } else {
        encryptedCharCode = ((charCode - 97 + inputText.charCodeAt(i - 1) - 97) % 26) + 97;
      }
  
      encryptedText += String.fromCharCode(encryptedCharCode);
    }
    
    document.getElementById('outputText').value = encryptedText;
  }
  
  // Function to decrypt cipher text using Caesar cipher with autokey algorithm
  function decrypt() {
    var inputText = document.getElementById('inputText').value;
    var shift = parseInt(prompt('Enter the shift (a number between 1 and 25):'));
  
    var decryptedText = '';
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      var decryptedCharCode;
  
      if (i === 0) {
        decryptedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
      } else {
        decryptedCharCode = ((charCode - 97 - inputText.charCodeAt(i - 1) + 26) % 26) + 97;
      }
  
      decryptedText += String.fromCharCode(decryptedCharCode);
    }
    
    document.getElementById('outputText').value = decryptedText;
  }
  
  // Function to encrypt plain text using Caesar cipher with symmetric algorithm
function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(prompt('Enter the encryption key (a number between 1 and 25):'));
    
    var encryptedText = '';
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      var encryptedCharCode;
  
      encryptedCharCode = ((charCode - 32 + key) % 95) + 32;
  
      encryptedText += String.fromCharCode(encryptedCharCode);
    }
    
    document.getElementById('outputText').value = encryptedText;
  }
  
  // Function to decrypt cipher text using Caesar cipher with symmetric algorithm
  function decrypt() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(prompt('Enter the decryption key (a number between 1 and 25):'));
  
    var decryptedText = '';
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      var decryptedCharCode;
  
      decryptedCharCode = ((charCode - 32 - key + 95) % 95) + 32;
  
      decryptedText += String.fromCharCode(decryptedCharCode);
    }
    
    document.getElementById('outputText').value = decryptedText;
  }
  