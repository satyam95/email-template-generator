import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const DropdownField = ({ label, value, options, onHandleStyleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <Select
        onValueChange={(v) => onHandleStyleChange(v)}
        defaultValue={value}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownField;
