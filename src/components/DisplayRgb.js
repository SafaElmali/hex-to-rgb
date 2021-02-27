import React from "react";
import { copyToClipboard } from "./Toaster";

export const DisplayRgb = ({ color }) => {
  const handleCopyRgb = () => {
    navigator.clipboard.writeText(
      `rgb(${color.red},${color.green},${color.blue})`
    );
    copyToClipboard();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card mt-3 mb-3"
        style={{
          width: "18rem",
          borderRadius: "25px",
          boxShadow:"2px 2px 2px 2px lightgray"
        }}
      >
        <div
          className="card-header text-center card-title-props"
          style={{ color: `rgb(${color.red},${color.green},${color.blue})` }}
        >
          <span>
            rgb({color.red},{color.green},{color.blue})
          </span>
          <button onClick={handleCopyRgb} className="copy-button mt-2">
            Copy this rgb
          </button>
        </div>
        <div className="card-body">
          <p className="text-center card-text-props">Color preview:</p>
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
              margin: "auto",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
