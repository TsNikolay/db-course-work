const database = require("./db");

exports.getAll = (req, res) => {
  const request = `SELECT * FROM selectedOption`;
  database.query(request, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result);
  });
};

exports.get = (req, res) => {
  const request = `SELECT * FROM selectedOption WHERE id=${req.params.id}`;
  database.query(request, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

exports.add = (req, res) => {
  const { id , option_id} = req.body;
  if (!(id && option_id))
    return res
      .status(400)
      .json("OptionID, ID are required");
  database.query(`SELECT * FROM selectedOption WHERE id=${id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length !== 0)
      return res.status(404).json(`Option with such id ${id} exists`);
    const request =
      `INSERT INTO selectedOption(id, option_id) VALUES(${id}, ${option_id})`;
    database.query(request, (err, result) => {
       if (err) return res.status(500).json(err);
      res.status(201).json(`Option with such id ${id} added`);
    });
  });
};

exports.update = (req, res) => {
  const { id, option_id } = req.body;
  if (!(id && option_id)) return res.status(400).json( "Required id and option_id" );
  database.query(`SELECT * FROM selectedOption WHERE option_id=${option_id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json("No option with such option_id");
    
    const request = `UPDATE selectedOption SET id=${id} WHERE option_id=${option_id}`;
    database.query(request, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(`Option with option_id ${option_id} updated`); 
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json("Id required");
  const request = `DELETE FROM selectedOption WHERE id=${id}`;
  database.query(`SELECT * FROM selectedOption WHERE id=${id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("No option with such id");
    database.query(request, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(`Option with id ${id} was deleted`);
    });
  });
};