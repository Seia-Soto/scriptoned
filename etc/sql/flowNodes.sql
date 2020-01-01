CREATE TABLE `scriptoned`.`flowNodes` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `serviceIdx` INT(11) NOT NULL , `name` VARCHAR(32) NOT NULL , `previousNode` INT(11) NOT NULL , `nextNode` INT(11) NOT NULL , `type` VARCHAR(32) NOT NULL , `action` VARCHAR(2048) NOT NULL , PRIMARY KEY (`idx`)) ENGINE = InnoDB;

/*
`serviceIdx`: The flowGroup ID which linked
`type`:
  - event (as initial node)
    - Discord.Event
  - action
`action`: JavaScript created by automation
*/
