// string decomposition NFKD and removing non-word character Š => Sˇ then ˇ is replace by empty
export function removeDiacritics(str) {
  return str.normalize("NFKD").replace(/[^\w]/g, "");
}
