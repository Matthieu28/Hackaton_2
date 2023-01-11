require("dotenv").config();
const jwt = require("jsonwebtoken");

const createJwt = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: parseInt(process.env.JWT_EXPIRES, 10),
  });
  return token;
};

const verifyToken = (req, res, next) => {
  // on récupère le token dans les cookies de la requête
  const { userToken } = req.cookies;

  // si il n'a pas de token, on retourne un 401
  if (!userToken) {
    return res.sendStatus(401);
  }

  // on va vérifier si le token est valide
  try {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    // console.log(decoded);
    delete decoded.iat;
    delete decoded.exp;

    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
};

module.exports = {
  createJwt,
  verifyToken,
};
