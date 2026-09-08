import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../src/LandingPage/home/Hero";

describe("Hero Section", () => {
  test("renders the heading 'Invest in everything'", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /invest in everything/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders the hero image with correct alt text", () => {
    render(<Hero />);
    const image = screen.getByAltText(/invest in everything/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/Media/Images/homeHero.png");
  });

  test("renders the description paragraph", () => {
    render(<Hero />);
    const description = screen.getByText(
      /online platform to invest in stocks, derivatives, mutual funds/i
    );
    expect(description).toBeInTheDocument();
  });

  test("renders the 'Sign up for free' button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /sign up for free/i });
    expect(button).toBeInTheDocument();
  });

  test("button has correct bootstrap classes", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /sign up for free/i });
    expect(button).toHaveClass("btn", "btn-primary", "btn-lg");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});