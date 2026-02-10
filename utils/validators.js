exports.validateSingleKey = (body) => {
  if (!body || typeof body !== "object") {
    throw new Error("Request body must be a JSON object");
  }

  const keys = Object.keys(body);

  if (keys.length !== 1) {
    throw new Error("Request must contain exactly one key");
  }

  const key = keys[0];
  const value = body[key];

  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  }

  return { key, value };
};
