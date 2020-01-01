CREATE TABLE `scriptoned`.`flowGroups` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `serviceIdx` VARCHAR(64) NOT NULL , `name` VARCHAR(32) NOT NULL , `description` VARCHAR(256) NOT NULL , PRIMARY KEY (`idx`)) ENGINE = InnoDB;

/*
`serviceIdx`: The guild ID that assigned
*/
