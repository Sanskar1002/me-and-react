import React from "react";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("pink");
  const colors = [
    `AliceBlue`,
    `AntiqueWhite`,
    `Aqua`,
    `Aquamarine`,
    `Azure`,
    `Beige`,
    `Bisque`,
    `Black`,
    `BlanchedAlmond`,
    `Blue`,
    `BlueViolet`,
    `Brown`,
    `BurlyWood`,
    `CadetBlue`,
    `Chartreuse`,
    `Chocolate`,
    `Coral`,
    `CornflowerBlue`,
    `Cornsilk`,
    `Crimson`,
    `Cyan`,
    `DarkBlue`,
    `DarkCyan`,
    `DarkGoldenRod`,
    `DarkGray`,
    `DarkGrey`,
    `DarkGreen`,
    `DarkKhaki`,
    `DarkMagenta`,
    `DarkOliveGreen`,
    `Darkorange`,
    `DarkOrchid`,
    `DarkRed`,
    `DarkSalmon`,
    `DarkSeaGreen`,
    `DarkSlateBlue`,
    `DarkSlateGray`,
    `DarkSlateGrey`,
    `DarkTurquoise`,
    `DarkViolet`,
    `DeepPink`,
    `DeepSkyBlue`,
    `DimGray`,
    `DimGrey`,
    `DodgerBlue`,
    `FireBrick`,
    `FloralWhite`,
    `ForestGreen`,
    `Fuchsia`,
    `Gainsboro`,
    `GhostWhite`,
    `Gold`,
    `GoldenRod`,
    `Gray`,
    `Grey`,
    `Green`,
    `GreenYellow`,
    `HoneyDew`,
    `HotPink`,
    `IndianRed`,
    `Indigo`,
    `Ivory`,
    `Khaki`,
    `Lavender`,
    `LavenderBlush`,
    `LawnGreen`,
    `LemonChiffon`,
    `LightBlue`,
    `LightCoral`,
    `LightCyan`,
    `LightGoldenRodYellow`,
    `LightGray`,
    `LightGrey`,
    `LightGreen`,
    `LightPink`,
    `LightSalmon`,
    `LightSeaGreen`,
    `LightSkyBlue`,
    `LightSlateGray`,
    `LightSlateGrey`,
    `LightSteelBlue`,
    `LightYellow`,
    `Lime`,
    `LimeGreen`,
    `Linen`,
    `Magenta`,
    `Maroon`,
    `MediumAquaMarine`,
    `MediumBlue`,
    `MediumOrchid`,
    `MediumPurple`,
    `MediumSeaGreen`,
    `MediumSlateBlue`,
    `MediumSpringGreen`,
    `MediumTurquoise`,
    `MediumVioletRed`,
    `MidnightBlue`,
    `MintCream`,
    `MistyRose`,
    `Moccasin`,
    `NavajoWhite`,
    `Navy`,
    `OldLace`,
    `Olive`,
    `OliveDrab`,
    `Orange`,
    `OrangeRed`,
    `Orchid`,
    `PaleGoldenRod`,
    `PaleGreen`,
    `PaleTurquoise`,
    `PaleVioletRed`,
    `PapayaWhip`,
    `PeachPuff`,
    `Peru`,
    `Pink`,
    `Plum`,
    `PowderBlue`,
    `Purple`,
    `Red`,
    `RosyBrown`,
    `RoyalBlue`,
    `SaddleBrown`,
    `Salmon`,
    `SandyBrown`,
    `SeaGreen`,
    `SeaShell`,
    `Sienna`,
    `Silver`,
    `SkyBlue`,
    `SlateBlue`,
    `SlateGray`,
    `SlateGrey`,
    `Snow`,
    `SpringGreen`,
    `SteelBlue`,
    `Tan`,
    `Teal`,
    `Thistle`,
    `Tomato`,
    `Turquoise`,
    `Violet`,
    `Wheat`,
    `White`,
    `WhiteSmoke`,
    `Yellow`,
    `YellowGreen`,
  ];

  function buttonBuilder(color) {
    return <Button key={color} color={color} setBgColor={setBgColor} />;
  }
  return (
    <>
      <div
        className="w-full  duration-200 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-wrap justify-center gap-12 py-4">
          {/* <div className="bg-white flex flex-wrap justify-center gap-12 px-4 py-2 rounded-full"> */}
          {colors.map(buttonBuilder)}

          {/* <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setBgColor("red")}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "pink" }}
            onClick={() => setBgColor("pink")}
          >
            Pink
          </button>

          <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >
            green
          </button>

          <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >
            blue
          </button>

          <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "orange" }}
            onClick={() => setBgColor("orange")}
          >
            orange
          </button>

          <button
            className="outline-none px-4 py-2 rounded-3xl text-white"
            style={{ backgroundColor: "gray" }}
            onClick={() => setBgColor("gray")}
          >
            Gray
          </button> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
