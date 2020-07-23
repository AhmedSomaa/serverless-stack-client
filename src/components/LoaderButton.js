import React from "react";
import "./LoaderButton.css";
import { Button } from "react-bootstrap";
import { BsArrowRepeat } from "react-icons/bs";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <BsArrowRepeat size={20} className="spinning" />}
      {props.children}
    </Button>
  );
}
