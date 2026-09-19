CREATE TABLE Departments (
    departmentID INT AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(50) NOT NULL,
    departmentCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Benches (
    benchID INT AUTO_INCREMENT PRIMARY KEY,
    benchName VARCHAR(50) NOT NULL,
    benchCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Employees (
    employeeID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    departmentID INT,
    benchID INT,
    employeeCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (departmentID) REFERENCES Departments(departmentID),
    FOREIGN KEY (benchID) REFERENCES Benches(benchID)
);