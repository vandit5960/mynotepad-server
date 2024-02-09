const Editor = require("../modal/editor.js");

const getData = async (req, res) => {
  try {
    const name = req.query.name;
    const user = await Editor.findOne({ name: name });
    if (user) {
      const data = user;
      return res.status(200).json({ data });
    } else {
      const createUser = await Editor.create({ name: name });
      const data =
        "<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>";
      return res.status(200).json({ data });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const putData = async (req, res) => {
  try {
    const { name, content } = req.body;

    const updatedData = await Editor.findOneAndUpdate(
      { name: name },
      { content: content },
      { new: true }
    );

    return res.status(200).json({ updatedData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const setPassword = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updatedData = await Editor.findOneAndUpdate(
      { name: name },
      { password: password },
      { new: true }
    );

    return res.status(200).json({ updatedData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const setUsername = async (req, res) => {
};

module.exports = { getData, putData, setPassword,setUsername };
