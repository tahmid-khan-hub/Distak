
export const generateToken = (length: number = 16): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, (x) => chars[x % chars.length]).join("");
};
