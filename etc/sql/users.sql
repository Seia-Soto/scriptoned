CREATE TABLE `scriptoned`.`users` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `serviceIdx` VARCHAR(64) NOT NULL , `language` VARCHAR(2) NOT NULL , `updateNotifying` BOOLEAN NOT NULL DEFAULT TRUE , `errorTracing` BOOLEAN NOT NULL DEFAULT TRUE , PRIMARY KEY (`idx`)) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `users` ADD UNIQUE(`serviceIdx`);
