import translateUrl from "./translators";

describe("translateUrl", () => {
  it("translates a valid Guardian Quiptic url", () => {
    const url = "https://www.theguardian.com/crosswords/quiptic/1084";
    const fifteensquaredUrl =
      "https://www.fifteensquared.net/guardian-quiptic-1084";

    expect(translateUrl(url)).toEqual(fifteensquaredUrl);
  });

  it("translates a valid Guardian Cryptic url", () => {
    const url = "https://www.theguardian.com/crosswords/cryptic/28233";
    const fifteensquaredUrl =
      "https://www.fifteensquared.net/guardian-cryptic-28233";

    expect(translateUrl(url)).toEqual(fifteensquaredUrl);
  });

  it("returns null for an invalid url", () => {
    const url = "https://www.notvalid.com/1084";
    expect(translateUrl(url)).toBeNull();
  });
});
