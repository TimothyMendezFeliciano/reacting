import { getByText, render, screen, within } from "@testing-library/react";
import AxolotlPage from "./axolotl";
import userEvent from "@testing-library/user-event";

describe("Axolotl Page", () => {
  test("displays amount of axolotl cards corectly", () => {
    // Arrange
    render(<AxolotlPage />);

    const cards = screen.getAllByRole("img", {
      name: "Axolotl Image",
      exact: false,
    });
    // Act
    // Assert
    expect(cards.length).toEqual(10);
  });

  test("displays love icon number correctly", async () => {
    // Arrange
    render(<AxolotlPage />);

    const loveIconButton = await screen.findAllByRole("button", {
      name: "loveIcon",
      exact: true,
    });

    // Act
    loveIconButton.forEach((value, index) => {
      userEvent.click(value);
    });

    const likesValue = await screen.findAllByText("1");

    // Assert
    expect(loveIconButton).toHaveLength(10);
    likesValue.forEach((value, index) => {
      expect(value).toHaveTextContent("1");
      expect(value).not.toHaveTextContent("0");
      expect(value).not.toHaveTextContent("2");
    });
  });
});
