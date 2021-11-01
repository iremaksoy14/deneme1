import React from "react";
import { ProgressBar } from "react-bootstrap";

export function CheckerModalProgress() {
  return (
    <ProgressBar
      variant="success"
      animated
      now={100}
      style={{ height: "3px", width: "100%" }}
    />
  );
}
