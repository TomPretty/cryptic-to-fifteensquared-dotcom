import React, { useState } from "react";

import translateUrl from "./translateUrl";

type Status = "EMPTY" | "SUCCESS" | "ERROR";

const App: React.FC = () => {
  const [status, setStatus] = useState<Status>("EMPTY");
  const [fifteensquaredUrl, setFifteenSquaredUrl] = useState("");

  const isEmpty = (url: string): boolean => {
    return url.trim() === "";
  };

  const translate = (url: string): boolean => {
    let wasTranslated = false;
    const translatedUrl = translateUrl(url);
    if (translatedUrl) {
      setFifteenSquaredUrl(translatedUrl);
      wasTranslated = true;
    }
    return wasTranslated;
  };

  const handleInputUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    if (isEmpty(url)) {
      setStatus("EMPTY");
    } else if (translate(url)) {
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && status === "SUCCESS") {
      window.open(fifteensquaredUrl, "_blank");
    }
  };

  return (
    <div className="container">
      <h1 className="my-5">Cryptic &rarr; Fifteensquared</h1>
      <div className="my-5">
        <div className="form-group">
          <label htmlFor="url-input">URL</label>
          <input
            id="url-input"
            className={`form-control form-control-lg ${
              status === "ERROR" ? "is-invalid" : ""
            }`}
            type="text"
            autoFocus
            onChange={handleInputUrlChange}
            onKeyPress={handleKeyPress}
          />
          <div className="invalid-feedback">
            Sorry, that URL wasn&apos;t recognised
          </div>
          <small id="url-help" className="form-text text-muted">
            Paste in a URL to get started
          </small>
        </div>

        {status === "SUCCESS" && (
          <a
            className="btn btn-lg btn-primary"
            href={fifteensquaredUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
