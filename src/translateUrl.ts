const GUARDIAN_QUIPTIC_URL_REGEX = /theguardian.com\/crosswords\/quiptic\/(\d+)/;

const translateGuardianQuipticUrl = (url: string): string | null => {
  const matches = url.match(GUARDIAN_QUIPTIC_URL_REGEX);
  if (matches) {
    const number = matches[1];
    return `https://www.fifteensquared.net/guardian-quiptic-${number}`;
  }
  return null;
};

const GUARDIAN_CRYPTIC_URL_REGEX = /theguardian.com\/crosswords\/cryptic\/(\d+)/;

const translateGuardianCrypticUrl = (url: string): string | null => {
  const matches = url.match(GUARDIAN_CRYPTIC_URL_REGEX);
  if (matches) {
    const number = matches[1];
    return `https://www.fifteensquared.net/guardian-cryptic-${number}`;
  }
  return null;
};

const translateUrl = (url: string): string | null => {
  return translateGuardianQuipticUrl(url) || translateGuardianCrypticUrl(url);
};

export default translateUrl;
