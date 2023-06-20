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
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="key">Clé de chiffrement :</label>
        <input
          type="text"
          id="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <button onClick={handleEncryptClick}>Chiffrer</button>
      <div>
        <label htmlFor="encryptedText">Texte chiffré :</label>
        <input
          type="text"
          id="encryptedText"
          value={encryptedText}
          readOnly
        />
      </div>
    </div>
  );
};

export  default VernamCipher ;
