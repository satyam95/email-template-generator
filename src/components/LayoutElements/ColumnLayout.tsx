import React from "react";

const ColumnLayout = ({ layout }) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div key={index} className="p-2 flex justify-center items-center bg-gray-100 border border-dashed">{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
