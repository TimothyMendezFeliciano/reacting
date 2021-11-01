import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";

describe("AxolotlPage", () => {
  test("navigates to Axolotl correctly", () => {
    // Arrange
    render(<Layout />);

    // Act
    const buttonElement = screen.getByRole("link", {
      name: "Axolotl",
      exact: false,
    });
    userEvent.click(buttonElement);

    // Assert

    expect(buttonElement).toHaveAttribute("href", "/axolotl");
  });

  test("navigates Home correctly", () => {
    // Arrange
    render(<Layout />);

    // Act
    const buttonElement = screen.getByRole("link", {
      name: "Home",
      exact: false,
    });

    userEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("href", "/");
  });

  test("navigates to Pokemon correctly", () => {
    // Arrange
    render(<Layout />);

    // Act
    const buttonElement = screen.getByRole("link", {
      name: "Pokemon",
      exact: false,
    });

    userEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("href", "/pokemon");
  });
});
