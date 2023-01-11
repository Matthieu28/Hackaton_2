const argon2 = require("argon2");

const hashPassword = async (password) => {
  const hashedPassword = await argon2.hash(password);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const verifiedPassword = await argon2.verify(hashedPassword, password);
  return verifiedPassword;
};

module.exports = {
  hashPassword,
  verifyPassword,
};
