const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Vet schema
const vetSchema = new Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String },
    emailAddress: { type: String },
    licenseNumber: { type: String, required: true },
    veterinarySchool: { type: String, required: true },
    graduationDate: { type: Date, required: true },
    additionalCertifications: [String],
    clinic: { type: String },
    hospital: { type: String },
    practiceName: { type: String, required: true },
    clinicalSpecialization: [String],
    licenseAndRegistration: [String],
    liabilityInsurance_provider: { type: String },
    liabilityInsurance_policyNumber: { type: String },
    verified : { type: Boolean, default: false },
});

// Create the Vet model
const Vet = mongoose.model("Vet", vetSchema);

module.exports = Vet;
