const {
  fibonacci,
  extractPrimes,
  lcmArray,
  hcfArray
} = require("../services/math_service");

const { askAI } = require("../services/ai_service");
const { validateSingleKey } = require("../utils/validators");

exports.handleBFHL = async (req, res) => {
  try {
    const { key, value } = validateSingleKey(req.body);
    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(value);
        break;

      case "prime":
        data = extractPrimes(value);
        break;

      case "lcm":
        data = lcmArray(value);
        break;

      case "hcf":
        data = hcfArray(value);
        break;

      case "AI":
        data = await askAI(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: "mohnish2155.be23@chitkara.edu.in",
          error: "Invalid key"
        });
    }

    res.status(200).json({
      is_success: true,
      official_email: "mohnish2155.be23@chitkara.edu.in",
      data
    });

  } catch (err) {
    res.status(400).json({
      is_success: false,
      official_email: "mohnish2155.be23@chitkara.edu.in",
      error: err.message
    });
  }
};
