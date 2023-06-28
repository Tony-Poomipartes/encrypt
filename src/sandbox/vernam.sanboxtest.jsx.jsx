import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import { encryptPassword } from "../components/caesar";
import VernamCipher from "../components/vernam";

jest.mock("../components/caesar", () => ({
  encryptPassword: jest.fn((password, key) => `Encrypted:${password}-${key}`),
}));

describe("VernamCipher", () => {
  test("should encrypt and decrypt the password correctly", () => {
    const { getByLabelText, getByText } = render(<VernamCipher />);

    // Enter password
    const passwordInput = getByLabelText("Votre mot de passe");
    fireEvent.change(passwordInput, { target: { value: "password" } });

    // Enter key
    const keyInput = getByLabelText("votre clef de chiffrement");
    fireEvent.change(keyInput, { target: { value: "11111111" } });

    // Click encrypt button
    const encryptButton = getByText("Chiffrer");
    fireEvent.click(encryptButton);

    // Check if the encrypted text is displayed
    const encryptedText = getByLabelText("Texte chiffré:").value;
    expect(encryptedText).toBe("Encrypted:p-1Encrypted:a-1Encrypted:s-1Encrypted:s-1Encrypted:w-1Encrypted:o-1Encrypted:r-1Encrypted:d-1");

    // Click decrypt button
    const decryptButton = getByText("Déchiffrer");
    fireEvent.click(decryptButton);

    // Check if the decrypted text is displayed
    const decryptedText = getByLabelText("Texte déchiffré:");
    expect(decryptedText).toHaveValue("Encrypted:p-1Encrypted:a-1Encrypted:s-1Encrypted:s-1Encrypted:w-1Encrypted:o-1Encrypted:r-1Encrypted:d-1");
  });
});
