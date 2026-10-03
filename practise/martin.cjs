function isValidTitle(value) {
  if (typeof value !== "string") return false;

  const trimmedLength = value.trim().length;
  return trimmedLength >= 1 && trimmedLength <= 80;
}

module.exports = { isValidTitle };
