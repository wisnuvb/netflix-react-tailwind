import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthContext } from "./context/AuthContext";

describe("Page App", () => {
  test("Navigate work well", () => {
    const signUp = jest.fn();
    const logIn = jest.fn();
    const logOut = jest.fn();

    render(
      <Router>
        <AuthContext.Provider value={{ signUp, logIn, logOut }}>
          <App />
        </AuthContext.Provider>
      </Router>
    );
    const title = screen.getByTestId("title");
    expect(title).toBeVisible();
  });
});
