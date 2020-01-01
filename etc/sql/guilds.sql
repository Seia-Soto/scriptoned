CREATE TABLE `scriptoned`.`guilds` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `serviceIdx` VARCHAR(64) NOT NULL , `prefix` VARCHAR(32) NOT NULL DEFAULT '0' , `errorTracing` BOOLEAN NOT NULL DEFAULT TRUE , `userVerification` INT NOT NULL DEFAULT '0' , PRIMARY KEY (`idx`)) ENGINE = InnoDB;
ALTER TABLE `guilds` ADD UNIQUE(`serviceIdx`);
