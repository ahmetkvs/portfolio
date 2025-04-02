import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../hooks/useLightDarkTheme");
vi.mock("../../hooks/useLangTheme");
import ThemeSwitchers from "./ThemeSwitchers";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";

describe("ThemeSwitchers Component", () => {
  let mockSetLdTheme;
  let mockSetLangTheme;

  beforeEach(() => {
    mockSetLdTheme = vi.fn();
    mockSetLangTheme = vi.fn();
    useLightDarkTheme.mockReturnValue({
      ldTheme: "light",
      setLdTheme: mockSetLdTheme,
    });
    useLangTheme.mockReturnValue({
      langTheme: "en",
      setLangTheme: mockSetLangTheme,
    });
  });

  it("should render correctly with initial light theme and English language", () => {
    render(<ThemeSwitchers />);
    expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument();
    expect(screen.getByLabelText("Türkçe'ye geç")).toBeInTheDocument();

    const darkModeSwitch = screen.getByRole("checkbox", { name: /dark mode/i });
    const langSwitch = screen.getByRole("checkbox", { name: /türkçe'ye geç/i });

    expect(darkModeSwitch).not.toBeChecked();
    expect(langSwitch).not.toBeChecked();
  });

  it("should render correctly with initial dark theme and Turkish language", () => {
    useLightDarkTheme.mockReturnValue({
      ldTheme: "dark",
      setLdTheme: mockSetLdTheme,
    });
    useLangTheme.mockReturnValue({
      langTheme: "tr",
      setLangTheme: mockSetLangTheme,
    });
    render(<ThemeSwitchers />);
    expect(screen.getByLabelText("Karanlık Mod")).toBeInTheDocument();
    expect(screen.getByLabelText("Switch to English")).toBeInTheDocument();

    const darkModeSwitch = screen.getByRole("checkbox", {
      name: /karanlık mod/i,
    });
    const langSwitch = screen.getByRole("checkbox", {
      name: /switch to english/i,
    });

    expect(darkModeSwitch).toBeChecked();
    expect(langSwitch).toBeChecked();
  });

  it("should call setLdTheme when the dark mode switch is clicked (light -> dark)", () => {
    render(<ThemeSwitchers />);
    const darkModeSwitch = screen.getByRole("checkbox", { name: /dark mode/i });
    fireEvent.click(darkModeSwitch);
    expect(mockSetLdTheme).toHaveBeenCalledTimes(1);
  });

  it("should call setLdTheme when the dark mode switch is clicked (dark -> light)", () => {
    useLightDarkTheme.mockReturnValue({
      ldTheme: "dark",
      setLdTheme: mockSetLdTheme,
    });
    useLangTheme.mockReturnValue({
      langTheme: "tr",
      setLangTheme: mockSetLangTheme,
    });
    render(<ThemeSwitchers />);
    const darkModeSwitch = screen.getByRole("checkbox", {
      name: /karanlık mod/i,
    });
    fireEvent.click(darkModeSwitch);
    expect(mockSetLdTheme).toHaveBeenCalledTimes(1);
  });

  it("should call setLangTheme when the language switch is clicked (en -> tr)", () => {
    render(<ThemeSwitchers />);
    const langSwitch = screen.getByRole("checkbox", { name: /türkçe'ye geç/i });
    fireEvent.click(langSwitch);
    expect(mockSetLangTheme).toHaveBeenCalledTimes(1);
  });

  it("should call setLangTheme when the language switch is clicked (tr -> en)", () => {
    useLangTheme.mockReturnValue({
      langTheme: "tr",
      setLangTheme: mockSetLangTheme,
    });
    render(<ThemeSwitchers />);
    const langSwitch = screen.getByRole("checkbox", {
      name: /switch to english/i,
    });
    fireEvent.click(langSwitch);
    expect(mockSetLangTheme).toHaveBeenCalledTimes(1);
  });

  it("should display updated labels when language changes", () => {
    const { rerender } = render(<ThemeSwitchers />);
    expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument();
    expect(screen.getByLabelText("Türkçe'ye geç")).toBeInTheDocument();
    useLangTheme.mockReturnValue({
      langTheme: "tr",
      setLangTheme: mockSetLangTheme,
    });
    rerender(<ThemeSwitchers />);
    expect(screen.getByLabelText("Karanlık Mod")).toBeInTheDocument();
    expect(screen.getByLabelText("Switch to English")).toBeInTheDocument();
    expect(screen.queryByLabelText("Dark Mode")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Türkçe'ye geç")).not.toBeInTheDocument();
  });
});
