import React from "react";
import { Button } from "react-bootstrap";
import { SyncIcon } from "@primer/octicons-react";

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
      {isLoading && <SyncIcon size={16} className="spinning" />}
      {props.children}
    </Button>
  );
}
