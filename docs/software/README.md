# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними

## SQL-скрипт

```

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`answer` ;

CREATE TABLE IF NOT EXISTS `mydb`.`answer` (
  `user_id` INT NOT NULL,
  `text` TEXT NOT NULL,
  `data` DATE NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `answer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_selectedOption_id_idx` (`answer_id` ASC) VISIBLE,
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_selectedOption_id`
    FOREIGN KEY (`answer_id`)
    REFERENCES `mydb`.`selectedOption` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`category` ;

CREATE TABLE IF NOT EXISTS `mydb`.`category` (
  `category_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `mydb`.`option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`option` ;

CREATE TABLE IF NOT EXISTS `mydb`.`option` (
  `type` TEXT(255) NOT NULL,
  `text` TEXT(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_id_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_question_id`
    FOREIGN KEY (`question_id`)
    REFERENCES `mydb`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`question` ;

CREATE TABLE IF NOT EXISTS `mydb`.`question` (
  `type` TEXT(255) NOT NULL,
  `text` TEXT(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `topic` TEXT(255) NOT NULL,
  `quiz_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quiz_id_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_quiz_id`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `mydb`.`quiz` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`quiz` ;

CREATE TABLE IF NOT EXISTS `mydb`.`quiz` (
  `type` TEXT(255) NOT NULL,
  `text` TEXT(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `topic` TEXT(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `creator_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_creator_id_idx` (`creator_id` ASC) VISIBLE,
  CONSTRAINT `fk_creator_id`
    FOREIGN KEY (`creator_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`selectedOption`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`selectedOption` ;

CREATE TABLE IF NOT EXISTS `mydb`.`selectedOption` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `option_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_option_id_idx` (`option_id` ASC) VISIBLE,
  CONSTRAINT `fk_option_id`
    FOREIGN KEY (`option_id`)
    REFERENCES `mydb`.`option` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```
## REST-full сервіс для управління даними

### Файл підключення до бази данних

```
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ubuntu",
  database: "mydb",
});

module.exports = connection;
```

### Основний файл серверу
```
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();
const port = process.env.PORT || 8888;

connection.connect((error) => {
    if(error){
        console.log("Error caught")
    } else {
        console.log("Connection successful")
    }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

app.listen(port)
```

### Файл роутера
```
module.exports = (app) => {
  const option = require("./controllers");

  app.route("/api/selectedOptions").get(option.getAll);
  app.route("/api/selectedOption/:id").get(option.get);
  app.route("/api/selectedOptions/add").post(option.add);
  app.route("/api/selectedOption/patch").patch(option.update);
  app.route("/api/selectedOption/:id").delete(option.delete);
};
```

### Файл обробників запитів
```
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
```
