const jwt = require("jsonwebtoken");

const verifyToken = (context) => {
  const token = context.req.cookies.bearer;
  if (!token) return null;
  if (token) {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    return user.user;
  }
};

module.exports = verifyToken;
