import React, { useState } from "react";

function encryptPassword(password, shift) {
  const encryptedChars = [];
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    let encryptedCharCode;

    if (charCode >= 65 && charCode <= 90) {
      // Lettre majuscule
      encryptedCharCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lettre minuscule
      encryptedCharCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
    } else if (charCode >= 48 && charCode <= 57) {
      // Chiffre
      encryptedCharCode = ((charCode - 48 + shift) % 10 + 10) % 10 + 48;
    } else {
      // Symbole
      encryptedCharCode = charCode;
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
    <div id="caesar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="password"
          className="question" 
          id="pwd"
          required autoComplete ="off"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="pwd">
          <span>
            Votre mot de passe
          </span>
        </label>

          <input 
          type="number" 
          name="key number"
          className="question" 
          id="nbr"
          required autoComplete ="off"
          value={shift} 
          onChange={handleShiftChange} />
        <label htmlFor="nbr">
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
