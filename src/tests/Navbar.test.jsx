import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
  test("muestra el nombre del sistema", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Gestión de Eventos/i)
    ).toBeInTheDocument();
  });
});