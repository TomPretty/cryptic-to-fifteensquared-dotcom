import React, { useState } from "react";
import "./App.css";

type Status = "EMPTY" | "SUCCESS" | "ERROR";

const GUARDIAN_QUIPTIC_URL_REGEX = /theguardian.com\/crosswords\/quiptic\/(\d+)/;

const App: React.FC = () => {
  const [status, setStatus] = useState<Status>("EMPTY");
  const [fifteensquaredUrl, setFifteenSquaredUrl] = useState("");

  const isEmpty = (url: string): boolean => {
    return url.trim() === "";
  };

  const checkForGuardianQuipticMatch = (url: string): boolean => {
    const matches = url.match(GUARDIAN_QUIPTIC_URL_REGEX);
    if (matches) {
      const number = matches[1];
      setFifteenSquaredUrl(
        `https://www.fifteensquared.net/guardian-quiptic-${number}`
      );
      return true;
    }
    return false;
  };

  const checkForMatches = (url: string): boolean => {
    return checkForGuardianQuipticMatch(url);
  };

  const handleInputUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    if (isEmpty(url)) {
      setStatus("EMPTY");
    } else if (checkForMatches(url)) {
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputUrlChange} />

      {status === "EMPTY" && <p>Paste in url to get started</p>}
      {status === "SUCCESS" && (
        <a href={fifteensquaredUrl} target="_blank" rel="noopener noreferrer">
          Open
        </a>
      )}
      {status === "ERROR" && <p>Sorry, that url wasn't recognised</p>}
    </div>
  );
};

export default App;
