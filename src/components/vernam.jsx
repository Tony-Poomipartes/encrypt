import React, { useState } from "react";
import { encryptPassword } from "../components/caesar";

const handleEncrypt = (password, key) => {
  if (password.length !== key.length) {
    return "Erreur : la longueur du mot de passe et de la clé doit être identique";
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

const handleDecrypt = (encryptedPassword, key) => {
  if (encryptedPassword.length !== key.length) {
    console.log("Erreur : la longueur du mot de passe chiffré et de la clé doit être identique");
    return "Erreur : la longueur du mot de passe chiffré et de la clé doit être identique";
  }

  let decryptedText = "";
  for (let i = 0; i < encryptedPassword.length; i++) {
    const encryptedChar = encryptedPassword[i];
    const keyChar = key[i];
    const decryptedChar = encryptPassword(encryptedChar, -parseInt(keyChar)); // Utilisation d'une clé négative
    decryptedText += decryptedChar;
  }

  return decryptedText;
};

const VernamCipher = () => {
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncryptClick = () => {
    const encryptedText = handleEncrypt(password, key);
    setEncryptedText(encryptedText);
  };

  const handleDecryptClick = () => {
    const decryptedText = handleDecrypt(encryptedText, key);
    setDecryptedText(decryptedText);
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
      <button onClick={handleDecryptClick}>Déchiffrer</button>
      <div>
      {encryptedText && (
  <label htmlFor="encryptedText">Résultat du chiffrement :</label>
)}
        <textarea
          type="text"
          id="encryptedText"
          class="question"
          value={ encryptedText }
          readOnly
        ></textarea>
                <textarea
          type="text"
          id="encryptedText"
          class="question"
          value={ decryptedText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export  default VernamCipher ;
