import React, { useState } from "react";

function encryptPassword(password, shift) {
  const encryptedChars = [];
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    let encryptedCharCode;
    if (charCode >= 65 && charCode <= 90) {
      encryptedCharCode = ((charCode - 65 + shift) % 26) + 65; // Uppercase letters
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedCharCode = ((charCode - 97 + shift) % 26) + 97; // Lowercase letters
    } else if (charCode >= 48 && charCode <= 57) {
      encryptedCharCode = ((charCode - 48 + shift) % 10) + 48; // Digits
    } else {
      encryptedCharCode = charCode; // Non-alphabetic characters
    }
    encryptedChars.push(String.fromCharCode(encryptedCharCode));
  }
  return encryptedChars.join("");
}

function CaesarCipher() {
  const [password, setPassword] = useState("");
  const [shift, setShift] = useState(0);
  const [encryptedPassword, setEncryptedPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedPassword = encryptPassword(password, shift);
    setEncryptedPassword(encryptedPassword);
  };

  return (
    <div id="ceasar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="password"
          className="question" 
          id="pwd"
          required autocomplete="off"
          value={password}
          onChange={handlePasswordChange}
        />
        <label for="pwd">
          <span>
            Votre mot de passe
          </span>
        </label>

          <input 
          type="number" 
          name="key number"
          className="question" 
          id="nbr"
          required autocomplete="off"
          value={shift} 
          onChange={handleShiftChange} />
        <label for="nbr">
        <span>votre clef de chiffrement</span>
        </label>
        <button type="submit">Chiffrer</button>
      </form>
      {encryptedPassword && (
  <label htmlFor="encryptedText">Résultat du chiffrement :</label>
)}
      <input
          type="text"
          id="encryptedText"
          name="encrypted Password"
          className="question"
          value={encryptedPassword}
          readOnly
        />
    </div>
  );
}

export { CaesarCipher, encryptPassword };
