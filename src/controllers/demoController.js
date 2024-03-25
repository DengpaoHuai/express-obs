exports.get = (req, res) => {
  res.status(201).json({ message: "Hello WoRLD" });
};

exports.post = (req, res) => {
  console.log(req.body);
  res.send("Got a POST request");
};
