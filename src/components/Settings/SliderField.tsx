import React from "react";
import { Slider } from "../ui/slider";

const SliderField = ({ label, value, onHandleStyleChange, type = "px" }) => {
  const FormattedValue = (value_) => {
    return Number(value_.toString().replace(type, ""));
  };
  return (
    <div>
      <label>{label}</label>
      <Slider
        defaultValue={[FormattedValue(value)]}
        max={100}
        step={1}
        onValueChange={(v) => onHandleStyleChange(v + type)}
      />
    </div>
  );
};

export default SliderField;
