const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const words = text.split(" ");
  const truncatedText = words.slice(0, maxLength).join(" ");
  return `${truncatedText} ...`;
};
export default truncateText;
