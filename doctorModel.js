const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number },
  discription: { type: String },
  area:{type: String},
  image: {
    data: Buffer, // Store the image data as a Buffer
    contentType: String // Store the content type (e.g., image/png, image/jpeg)
  }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
