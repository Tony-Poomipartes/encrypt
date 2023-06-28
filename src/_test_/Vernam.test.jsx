import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import VernamCipher from "../components/vernam";

describe("VernamCipher", () => {
  test("renders input fields and buttons", () => {
    const { getByLabelText, getByText } = render(<VernamCipher />);

    const passwordInput = getByLabelText("Votre mot de passe");
    const keyInput = getByLabelText("Votre clef de chiffrement");
    const encryptButton = getByText("Chiffrer");
    const decryptButton = getByText("Déchiffrer");

    expect(passwordInput).toBeInTheDocument();
    expect(keyInput).toBeInTheDocument();
    expect(encryptButton).toBeInTheDocument();
    expect(decryptButton).toBeInTheDocument();
  });

  test("handles encryption and decryption", () => {
    const { getByLabelText, getByText, getByTestId } = render(<VernamCipher />);

    const passwordInput = getByLabelText("Votre mot de passe");
    const keyInput = getByLabelText("Votre clef de chiffrement");
    const encryptButton = getByText("Chiffrer");
    const decryptButton = getByText("Déchiffrer");

    // Entrer les valeurs dans les champs de saisie
    fireEvent.change(passwordInput, { target: { value: "aaa" } });
    fireEvent.change(keyInput, { target: { value: "111" } });

    // Vérifier que les champs de saisie ont été mis à jour
    expect(passwordInput.value).toBe("aaa");
    expect(keyInput.value).toBe("111");

    // Cliquer sur le bouton de chiffrement
    fireEvent.click(encryptButton);

    // Vérifier que le texte chiffré est affiché
    const encryptedText = getByText("Texte chiffré:");
    expect(encryptedText).toBeInTheDocument();
    expect(encryptedText).toHaveTextContent("Texte chiffré:");

    // Cliquer sur le bouton de déchiffrement
    fireEvent.click(decryptButton);

    // Vérifier que le texte déchiffré est affiché
    const decryptedText = getByText("Texte déchiffré:");
    expect(decryptedText).toBeInTheDocument();
    expect(decryptedText).toHaveTextContent("Texte déchiffré:");
  });
});
