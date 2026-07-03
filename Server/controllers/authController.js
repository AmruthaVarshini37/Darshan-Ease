exports.register = (req, res) => {
  res.json({
    message: "User Registered Successfully"
  });
};

exports.login = (req, res) => {
  res.json({
    message: "User Login Successfully"
  });
};

exports.logout = (req, res) => {
  res.json({
    message: "User Logout Successfully"
  });
};