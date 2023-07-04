import React, { useState } from "react";
import { encryptPassword } from "./caesar";
/**
 * Encrypts a password using a key.
 * @param password The password to encrypt.
 * @param key The key used for encryption.
 * @returns The encrypted password.
 */
const handleEncrypt = (password: string, key: string): string => {
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

/**
 * Decrypts an encrypted password using a key.
 * @param {string} encryptedPassword - The encrypted password.
 * @param {string} key - The key used for decryption.
 * @returns {string} - The decrypted password.
 */
const handleDecrypt = (encryptedPassword, key) => {
  if (encryptedPassword.length !== key.length) {
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


type VernamCipherProps = {};

type VernamCipherState = {
  password: string;
  key: string;
  encryptedText: string;
  decryptedText: string;
};

const VernamCipher: React.FC<VernamCipherProps> = () => {
  const [state, setState] = useState<VernamCipherState>({
    password: '',
    key: '',
    encryptedText: '',
    decryptedText: '',
  });

  const handleEncryptClick = () => {
    const encryptedText = handleEncrypt(state.password, state.key);
    setState({ ...state, encryptedText });
  };

  const handleDecryptClick = () => {
    const decryptedText = handleDecrypt(state.password, state.key);
    setState({ ...state, decryptedText });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="question"
          id="password"
          required
          autoComplete="off"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <label htmlFor="password">
          <span>Votre mot de passe</span>
        </label>
      </div>
      <div>
        <input
          type="text"
          id="key"
          className="question"
          required
          autoComplete="off"
          value={state.key}
          onChange={(e) => setState({ ...state, key: e.target.value })}
        />
        <label htmlFor="key">
          <span>Votre clef de chiffrement</span>
        </label>
      </div>
      <button onClick={handleEncryptClick}>Chiffrer</button>
      <button onClick={handleDecryptClick}>Déchiffrer</button>
      {state.encryptedText && (
        <div className="generatedPassword">
          <h3>Texte chiffré:</h3>
          <h4>{state.encryptedText}</h4>
        </div>
      )}
      {state.decryptedText && (
        <div className="generatedPassword">
          <h3>Texte déchiffré:</h3>
          <h4>{state.decryptedText}</h4>
        </div>
      )}
    </div>
  );
};

export  default VernamCipher ;
