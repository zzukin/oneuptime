import Pill, { PillSize } from "../../../UI/Components/Pill/Pill";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Color from "../../../Types/Color";
import * as React from "react";
import { describe, expect, test } from "@jest/globals";

describe("<Pill />", () => {
  test("Checking text", () => {
    const color: Color = new Color("#807149");
    render(<Pill text="Love" color={color} size={PillSize.Small} />);
    expect(screen.getByTestId("pill")).toHaveTextContent("Love");
  });
  test("Test for font-size(Small) ", () => {
    const color: Color = new Color("#807149");
    render(<Pill text="Love" color={color} size={PillSize.Small} />);
    expect(screen.getByTestId("pill")).toHaveStyle("fontSize: 10px");
  });
  test("Test for font-size(Normal) ", () => {
    const color: Color = new Color("#807149");
    render(<Pill text="Love" color={color} size={PillSize.Normal} />);
    expect(screen.getByTestId("pill")).toHaveStyle("fontSize: 13px");
  });
  test("Test for font-size(Large) ", () => {
    const color: Color = new Color("#807149");
    render(<Pill text="Love" color={color} size={PillSize.Large} />);
    expect(screen.getByTestId("pill")).toHaveStyle("fontSize: 15px");
  });
  test("Test for font-size(Extra-large) ", () => {
    const color: Color = new Color("#807149");
    render(<Pill text="Love" color={color} size={PillSize.ExtraLarge} />);
    expect(screen.getByTestId("pill")).toHaveStyle("fontSize: 18px");
  });
  test("Checking for color #fffff", () => {
    const color: Color = new Color("#ffffff");
    render(<Pill text="Love" color={color} size={PillSize.ExtraLarge} />);
    expect(screen.getByTestId("pill")).toHaveStyle("backgroundColor: #ffffff");
  });
  test("Checking for color #ff0000", () => {
    const color: Color = new Color("#ff0000");
    render(<Pill text="Love" color={color} size={PillSize.ExtraLarge} />);
    expect(screen.getByTestId("pill")).toHaveStyle("backgroundColor:  #ff0000");
  });
  test("Checking for color #786598", () => {
    const color: Color = new Color("#786598");
    render(<Pill text="Love" color={color} size={PillSize.ExtraLarge} />);
    expect(screen.getByTestId("pill")).toHaveStyle("backgroundColor:  #786598");
  });
});
