exports.healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "mohnish2155.be23@chitkara.edu.in"
  });
};
