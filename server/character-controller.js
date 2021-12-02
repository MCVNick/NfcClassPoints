module.exports = {
  getCharacterInfo: async (req, res) => {
    const {id} = req.query;
    const db = req.app.get('db');

    let data = await db.character.getCharacterInfo(id);
    data = data;

    res.status(200).send(data);
  },
};
