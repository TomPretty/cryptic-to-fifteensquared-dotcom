import {
  translateGuardianQuipticUrl,
  translateGuardianCrypticUrl,
} from "./translators";

describe("translateGuardianQuipticUrl", () => {
  it("translates a valid url", () => {
    const url = "https://www.theguardian.com/crosswords/quiptic/1084";
    const fifteensquaredUrl =
      "https://www.fifteensquared.net/guardian-quiptic-1084";

    expect(translateGuardianQuipticUrl(url)).toEqual(fifteensquaredUrl);
  });
  it("returns null for an invalid url", () => {
    const url = "https://www.nottheguardian.com/1084";
    expect(translateGuardianQuipticUrl(url)).toBeNull();
  });
});

describe("translateGuardianCrypticUrl", () => {
  it("translates a valid url", () => {
    const url = "https://www.theguardian.com/crosswords/cryptic/28233";
    const fifteensquaredUrl =
      "https://www.fifteensquared.net/guardian-cryptic-28233";

    expect(translateGuardianCrypticUrl(url)).toEqual(fifteensquaredUrl);
  });
  it("returns null for an invalid url", () => {
    const url = "https://www.nottheguardian.com/28233";
    expect(translateGuardianCrypticUrl(url)).toBeNull();
  });
});
