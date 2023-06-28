import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false); // Checkbox cochée par défaut
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(Number(event.target.value));
  };

  const handleOptionChange = (event) => {
    const optionName = event.target.name;
    const optionValue = event.target.checked;

    switch (optionName) {
      case 'includeLowercase':
        setIncludeLowercase(optionValue);
        break;
      case 'includeUppercase':
        setIncludeUppercase(optionValue);
        break;
      case 'includeNumbers':
        setIncludeNumbers(optionValue);
        break;
      case 'includeSymbols':
        setIncludeSymbols(optionValue);
        break;
      default:
        break;
    }
  };

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let characters = '';
    let password = '';

    if (includeLowercase) {
      characters += lowercaseLetters;
    }
    if (includeUppercase) {
      characters += uppercaseLetters;
    }
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeSymbols) {
      characters += symbols;
    }
    
    // If no checkboxes are selected, include lowercase letters by default
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      characters = lowercaseLetters;
    }

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };
  return (
    <div>
      <div>
        <label htmlFor="passwordLength">Password Length:</label>
        <input
          type="range"
          id="passwordLength"
          min="2"
          max="70"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
        <span>{passwordLength}</span>
      </div>
      <div className="checkbox-wrapper-47">
        
        <input
          type="checkbox"
          id="cb-46"
          name="includeLowercase"
          checked={includeLowercase}
          onChange={handleOptionChange}
        />
        
        <label htmlFor="cb-46">Include Lowercase Letters</label>
    </div>
      <div className="checkbox-wrapper-47">
        
          <input
            type="checkbox"
            id="cb-47"
            name="includeUppercase"
            checked={includeUppercase}
            onChange={handleOptionChange}
          />
          
          <label htmlFor="cb-47">Include Uppercase Letters</label>
      </div>
      <div className="checkbox-wrapper-47">
          <input
            type="checkbox"
            id="cb-48"
            name="includeNumbers"
            checked={includeNumbers}
            onChange={handleOptionChange}
          />
          <label htmlFor="cb-48">Include Numbers</label>
      </div>
      <div className="checkbox-wrapper-47">
          <input
            type="checkbox"
            id="cb-49"
            name="includeSymbols"
            checked={includeSymbols}
            onChange={handleOptionChange}
          />
          <label htmlFor="cb-49">Include Symbols</label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {generatedPassword && (
        <div className='generatedPassword'>
          <h4>Generated Password:</h4>
          <h5>{generatedPassword}</h5>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;