const mongoose = require("mongoose");

module.exports.connect = mongoose.connect(process.env.DATABASE_URL)
                                    .then(() => console.log("Successfully connected to <task-management-application> database..."))
                                    .catch(err=> console.log("Failed connecting <task-management-application> database!"));