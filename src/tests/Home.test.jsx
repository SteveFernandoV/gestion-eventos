import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home", () => {
  test("renderiza el título principal", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Sistema de Gestión de Eventos/i)
    ).toBeInTheDocument();
  });
});