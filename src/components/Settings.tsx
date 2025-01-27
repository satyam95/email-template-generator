"use client";
import { useSelectedElement } from "@/context/SelectedElementContext";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import { AArrowUp, AlignCenter, AlignLeft, AlignRight, CaseLower, CaseUpper } from "lucide-react";
import ToggleGroupField from "./Settings/ToggleGroupField";
import DropdownField from "./Settings/DropdownField";

const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "right",
    icon: AlignRight,
  },
];

const TextTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpper,
  },
  {
    value: "lowercase",
    icon: CaseLower,
  },
  {
    value: "capitalize",
    icon: AArrowUp,
  },
];

const Settings = () => {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    console.log(fieldName, "value" + value);

    // copy of current SelectedElement
    const updatedData = { ...selectedElement };
    // update the specific Field
    updatedData.layout[selectedElement.index][fieldName] = value;
    // update orginal SelectedElement
    setSelectedElement(updatedData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    let updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: [fieldValue],
          },
        },
      },
    };
    setSelectedElement(updateElement);
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.content && (
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.textarea && (
        <TextAreaField
          label={"Text Area"}
          value={element?.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )}
      {element?.style?.textAlign && (
        <ToggleGroupField
          label={"Text Align"}
          value={element?.style?.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
        />
      )}
      {element?.url && (
        <InputField
          label={"url"}
          value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)}
        />
      )}

      {element?.style?.backgroundColor && (
        <ColorPickerField
          label={"Background Color"}
          value={element?.style?.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}
      {element?.style?.color && (
        <ColorPickerField
          label={"Text Color"}
          value={element?.style?.color}
          onHandleStyleChange={(value) => onHandleStyleChange("color", value)}
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label={"Font Size"}
          value={element?.style?.fontSize}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontSize", value)
          }
        />
      )}
      {element?.style?.textTransform && (
        <ToggleGroupField
          label={"Text Transform"}
          value={element?.style?.textTransform}
          options={TextTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label={"Padding"}
          value={element?.style?.padding}
          onHandleStyleChange={(value) => onHandleStyleChange("padding", value)}
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label={"Border Radius"}
          value={element?.style?.borderRadius}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("borderRadius", value)
          }
        />
      )}
      {element?.style?.width && (
        <SliderField
          label={"Width"}
          value={element?.style?.width}
          type="%"
          onHandleStyleChange={(value) => onHandleStyleChange("width", value)}
        />
      )}
      {element?.style?.fontWeight && (
        <DropdownField
          label={"Font Weight"}
          value={element?.style?.fontWeight}
          options={['normal', 'bold']}
          onHandleStyleChange={(value) => onHandleStyleChange("fontWeight", value)}
        />
      )}
      
    </div>
  );
};

export default Settings;
