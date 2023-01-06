


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
## RESTfull сервіс для управління даними