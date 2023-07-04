import React, { useState, ChangeEvent, FormEvent } from 'react';

/**
 * Encrypts the given password using the provided shift value.
 * 
 * @param password - The password to be encrypted.
 * @param shift - The shift value used for encryption.
 * @returns The encrypted password.
 */
function encryptPassword(password: string, shift: number): string {
  const encryptedChars: string[] = [];
  for (let i: number = 0; i < password.length; i++) {
    const charCode: number = password.charCodeAt(i);
    let encryptedCharCode: number;

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letter
      encryptedCharCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letter
      encryptedCharCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
    } else if (charCode >= 48 && charCode <= 57) {
      // Digit
      encryptedCharCode = ((charCode - 48 + shift) % 10 + 10) % 10 + 48;
    } else {
      // Symbol
      encryptedCharCode = charCode;
    }

    encryptedChars.push(String.fromCharCode(encryptedCharCode));
  }

  return encryptedChars.join("");
}


type CaesarCipherProps = {};

function CaesarCipher(props: CaesarCipherProps): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [shift, setShift] = useState<number>(0);
  const [encryptedPassword, setEncryptedPassword] = useState<string>("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShiftChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShift(parseInt(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
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
          onChange={handleShiftChange} 
        />
        <label htmlFor="nbr">
          <span>votre clef de chiffrement</span>
        </label>
        <button type="submit">Chiffrer</button>
      </form>
      {encryptedPassword && (
      <div className='generatedPassword'>
      <h3>Mot de passe chiffré:</h3>
      <h4>{encryptedPassword}</h4>
    </div>
      )}
    </div>
  );
}

export { CaesarCipher, encryptPassword };
