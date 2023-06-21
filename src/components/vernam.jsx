import React, { useState } from "react";
import { encryptPassword } from "../components/caesar";

const handleEncrypt = (password, key) => {
  if (password.length !== key.length) {
    console.log("Erreur : la longueur du mot de passe et de la clé doit être identique");
    return "";
  }

  let encryptedText = "";
  for (let i = 0; i < password.length; i++) {
    const passwordChar = password[i];
    const keyChar = key[i];
    const encryptedChar = encryptPassword(passwordChar, parseInt(keyChar));
    encryptedText += encryptedChar;
  }

  return encryptedText;
};

const VernamCipher = () => {
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleEncryptClick = () => {
    const encryptedText = handleEncrypt(password, key);
    setEncryptedText(encryptedText);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          class="question" 
          id="password"
          required autocomplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
                <label for="pwd">
          <span>
            Votre mot de passe
          </span>
        </label>
      </div>
      <div>
        <input
          type="text"
          id="key"
          class="question"
          required autocomplete="off" 
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <label for="nbr">
        <span>votre clef de chiffrement</span>
        </label>
      </div>
      <button onClick={handleEncryptClick}>Chiffrer</button>
      <div>
      {encryptedText && (
  <label htmlFor="encryptedText">Résultat du chiffrement :</label>
)}
        <input
          type="text"
          id="encryptedText"
          class="question"
          value={ encryptedText}
          readOnly
        />
      </div>
    </div>
  );
};

export  default VernamCipher ;
