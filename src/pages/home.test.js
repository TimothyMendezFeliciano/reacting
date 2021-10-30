import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./home";

describe("HomeFormComponent", () => {
  test("renders User Form if the button was not clicked", () => {
    render(<Home />);
    const hasUserFormTitle = screen.getByText("User Form", { exact: false });

    expect(hasUserFormTitle).toBeInTheDocument();
  });

  test("renders User Form if the button WAS clicked", () => {
    // Arrange
    render(<Home />);

    // Act
    const buttonElement = screen.getByRole("button", {
      name: "Change me, Senpai!",
    });
    userEvent.click(buttonElement);

    // Assert
    const hasFormedUserTitle = screen.getByText("formed User", {
      exact: false,
    });
    expect(hasFormedUserTitle).toBeInTheDocument();
  });

  test("does not render User Form if the button was clicked", () => {
    // Arrange
    render(<Home />);

    // Act
    const buttonElement = screen.getByRole("button", {
      name: "Change me, Senpai!",
    });
    userEvent.click(buttonElement);

    // Assert
    const doesNotHaveUserForm = screen.queryByText("User Form", {
      exact: false,
    });
    expect(doesNotHaveUserForm).toBeNull();
  });

  test("renders Price title", () => {
    // Child components can also be tested from their parent components.

    // Arrange
    render(<Home />);

    // Act
    // ...

    // Assert
    const priceTitle = screen.getByText("Price", { exact: true });

    expect(priceTitle).toBeInTheDocument();
  });

  describe("Async calls", () => {
    test("render card info", async () => {
      // Arrange
      render(<Home />);

      // Act
      // ...

      // Assert
      const fetchPreviewCards = await screen.findAllByRole("span");

      expect(fetchPreviewCards).toHaveClass("Card");
    });
  });
});
