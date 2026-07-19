const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    console.log("========== AUTH MIDDLEWARE ==========");

    // Print Authorization Header
    console.log("Authorization Header:", req.headers.authorization);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log("No Authorization Header Found");
      return res.status(401).json({
        message: "Access Denied. No Token Provided",
      });
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    console.log("Received Token:", token);

    // Verify Token
    const verified = jwt.verify(token, "mysecretkey");

    console.log("Verified User:", verified);

    req.user = verified;

    console.log("Authentication Successful");
    console.log("====================================");

    next();
  } catch (error) {
    console.log("Authentication Error:");
    console.log(error);

    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;