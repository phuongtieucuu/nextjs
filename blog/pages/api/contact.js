export default function handle(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || !message) {
      return res.status(422).json({ message: "Invalid input." });
    }
    const newData = { email, name, message };
    return res.json({
      message: "Success",
      data: newData,
    });
  }

  return res.json({
    message: "Not found!!",
  });
}
