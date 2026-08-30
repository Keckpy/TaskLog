-- To access database from github codespaces use the below command
-- mysql -h YOUR_DB_HOST -P YOUR_DB_PORT -u YOUR_DB_USER -p YOUR_DB_NAME
-- If you get "mysql: command not found" run the below code in the CLI
-- sudo apt update && sudo apt install -y mysql-client

DROP TABLE IF EXISTS Notes;

CREATE TABLE Notes (
    noteID INT AUTO_INCREMENT PRIMARY KEY,
    notes TEXT NOT NULL,
    dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
    priority BOOLEAN DEFAULT FALSE,
    dateCompleted DATETIME
);

