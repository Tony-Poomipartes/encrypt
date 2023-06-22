import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PasswordGenerator from '../components/generator';

describe('PasswordGenerator', () => {
  test('should generate a password with the selected options', () => {
    const { getByLabelText, getByText } = render(<PasswordGenerator />);
    
    // Set the password length to 10
    const passwordLengthInput = getByLabelText('Password Length:');
    fireEvent.change(passwordLengthInput, { target: { value: '10' } });
    
    // Check the "Include Lowercase Letters" checkbox
    const includeLowercaseCheckbox = getByLabelText('Include Lowercase Letters');
    fireEvent.click(includeLowercaseCheckbox);
    
    // Check the "Include Uppercase Letters" checkbox
    const includeUppercaseCheckbox = getByLabelText('Include Uppercase Letters');
    fireEvent.click(includeUppercaseCheckbox);
    
    // Check the "Include Numbers" checkbox
    const includeNumbersCheckbox = getByLabelText('Include Numbers');
    fireEvent.click(includeNumbersCheckbox);
    
    // Check the "Include Symbols" checkbox
    const includeSymbolsCheckbox = getByLabelText('Include Symbols');
    fireEvent.click(includeSymbolsCheckbox);
    
    // Click the "Generate Password" button
    const generateButton = getByText('Generate Password');
    fireEvent.click(generateButton);
    
    // Check if the generated password is displayed
    const generatedPasswordText = getByText('Generated Password:');
    expect(generatedPasswordText).toBeInTheDocument();
  });
});
