import React from "react";
import { Input } from "../ui/input";

const InputStyleField = ({
  label,
  value,
  onHandleStyleChange,
  type = "px",
}) => {
  const FormattedValue = (value_) => {
    return Number(value_.toString().replace(type, ""));
  };
  return (
    <div>
      <label>{label} ({value})</label>
      <div className="flex">
        <Input
          type="text"
          value={FormattedValue(value)}
          onChange={(e) => onHandleStyleChange(e.target.value + type)}
        />
        <h2 className="p-1 bg-gray-100 rounded-r-lg -ml-2">px</h2>
      </div>
    </div>
  );
};

export default InputStyleField;
