import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Ajout de l'importation

import { Description } from "../components/Description";

describe("Description", () => {
  test("should render the description correctly", () => {
    const { getByText } = render(<Description />);
    const descriptionText = getByText(
      "crypté vos mots de passes avec le chiffrement de César ou le chiffre de Vernam( ou masque jetable)"
    );
    expect(descriptionText).toBeInTheDocument();
  });
});
