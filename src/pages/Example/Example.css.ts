import { style } from "@vanilla-extract/css";
import { color } from "../../styles/tokens/color.css";
import { typography } from "../../styles/tokens/typography.css";


export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const text = style({
    fontFamily: '"Paperlogy", sans-serif',
    fontSize: typography.fontSize.text_36,
    fontWeight: typography.fontWeight.regular_4,
    color: color.primary,
    textAlign: "center",
    margin: "1rem 0",
    padding: "0 2rem",
    lineHeight: "1.5"

});