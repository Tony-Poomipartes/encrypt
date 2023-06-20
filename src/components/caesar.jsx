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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mot de passe :
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Chiffre :
          <input type="number" value={shift} onChange={handleShiftChange} />
        </label>
        <button type="submit">Chiffrer</button>
      </form>
      {encryptedPassword && (
        <p>Résultat du chiffrement : {encryptedPassword}</p>
      )}
    </div>
  );
}

export { CaesarCipher, encryptPassword };
