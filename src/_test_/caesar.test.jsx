import React from "react";
// import { render, fireEvent } from "@testing-library/react";
const {render, fireEvent , screen }= require('@testing-library/react')
import '@testing-library/jest-dom/matchers';
import { encryptPassword, CaesarCipher } from "../components/caesar";

describe("encryptPassword", () => {
  test("should encrypt password correctly", () => {
    const encryptedPassword = encryptPassword("HelloWorld", 3);
    expect(encryptedPassword).toBe("KhoorZruog");
  });
});

describe("CaesarCipher", () => {
  test("should encrypt password on form submit", () => {
    const { getByLabelText, getByText, queryByDisplayValue } = render(<CaesarCipher />);
    
    const passwordInput = getByLabelText("Votre mot de passe");
    fireEvent.change(passwordInput, { target: { value: "HelloWorld" } });
    
    const shiftInput = getByLabelText("votre clef de chiffrement");
    fireEvent.change(shiftInput, { target: { value: "3" } });
    
    const submitButton = getByText("Chiffrer");
    fireEvent.click(submitButton);
    
    const encryptedText = queryByDisplayValue("KhoorZruog");
    expect(encryptedText).toBeTruthy();
  });
});

