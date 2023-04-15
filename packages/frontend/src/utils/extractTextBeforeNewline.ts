export const extractTextBeforeNewline = (text: string) => {
  let index = text.indexOf("\n");
  if (index === -1) {
    return text;
  }
  return text.substring(0, index);
}