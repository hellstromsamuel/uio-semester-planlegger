import { FC } from "react";
import { CirclePicker } from "react-color";

interface ColorPickerProps {
  colorCode: string;
  setColorCode: (color: string) => void;
}

export const ColorPicker: FC<ColorPickerProps> = ({
  colorCode,
  setColorCode,
}) => {
  const onChangeColor = (color: any, event: any) => {
    setColorCode(
      "rgb(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + ", 0.5)"
    );
  };

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <CirclePicker color={colorCode} onChange={onChangeColor} />
    </div>
  );
};
