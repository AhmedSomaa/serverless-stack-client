import React, { useState, useEffect } from "react";
import config from "../config";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details,
    });
  }

  return <div className="Settings"></div>;
}
