// filtering text to protect injection
export function filterInputText(str) {
  const filtered = str.replace(/</g, "").replace(/>/g, "").replace(/\d/g, "");
  return filtered;
}
