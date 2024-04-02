const mongoose = require("mongoose");
//Destructuring
const { Schema } = mongoose;

//schema structure
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

//now schema will be created in the database
mongoose.model("users", userSchema);
