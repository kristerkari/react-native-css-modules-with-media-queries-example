import iconFont from "../android/app/src/main/assets/fonts/icomoon.ttf";

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: "icomoon";
  font-weight: normal;
  font-variant: normal;
}`;

const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

document.head.appendChild(style);
