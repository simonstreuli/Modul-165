const { exec } = require("child_process");
const fs = require("fs");
const moment = require("moment");

const backupDir = "./backups";
const backupFileName = `backup-${moment().format("YYYY-MM-DD_HH-mm-ss")}.gz`; // Dateiname für das Backup mit aktuellem Zeitstempel
const dbUrl = process.env.MONGO_URL;

require("dotenv").config();

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

const command = `mongodump --uri ${dbUrl} --gzip --archive=${backupDir}/${backupFileName}`;

console.log("Starting backup process...");

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error("Error creating backup:", error);
    return;
  }
  if (stderr) {
    console.error("Error creating backup:", stderr);
    return;
  }
  console.log("Backup created successfully.");
  console.log("Backup file:", backupFileName);
});
