const Doctor = require('../models/doctorModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const register = async(req,res)=>{
    try {
        const {
            fullName,
            phoneNumber,
            emailAddress,
            licenseNumber,
            veterinarySchool,
            graduationDate,
            additionalCertifications,
            clinic,
            hospital,
            practiceName,
            clinicalSpecialization,
            licenseAndRegistration,
            liabilityInsurance_provider,
            liabilityInsurance_policyNumber
        } = req.body;
        const hashedLicesceNumber = await bcrypt.hash(licenseNumber,10);
        const doctor = await Doctor.findOne({emailAddress});
        console.log(doctor)
        if(doctor){
            return res.json({success: false,message: 'User already exists'});
        }

        const newDoc = new Doctor({
            fullName,
            phoneNumber,
            emailAddress,
            licenseNumber : hashedLicesceNumber,
            veterinarySchool,
            graduationDate,
            additionalCertifications,
            clinic,
            hospital,
            practiceName,
            clinicalSpecialization,
            licenseAndRegistration,
            liabilityInsurance_provider,
            liabilityInsurance_policyNumber
        });
        const result = await newDoc.save();
        res.status(201).json({success: true,message: 'Your application has been successfully submitted. The verification process may take up to a week or two. You will be notified once your registration is verified.',result});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false,message: error.message});
    }
}
const login = async (req, res)=>{
    try {
        const {email,licenseNumber} = req.body;
        const doctor = await Doctor.findOne({emailAddress : email});
        if(doctor?.isVerified === false){
            return res.json({success: false,isDoctor: false,message: 'Your registration is not verified yet'});
        }
        if(!doctor){
            return res.json({success: false,isDoctor: false,message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(licenseNumber,doctor.licenseNumber);
        if(!isMatch){
            return res.json({success: false,isDoctor: true,message: 'Invalid credentials'});
        }
        const token = jwt.sign({email: doctor.email, id: doctor._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({success: true, result: doctor, token,message: `Welcome ${doctor.fullName}`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false,message: error.message});
    }
}

const docAuth = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.body.userId);
        
        if (!doctor || !doctor.isVerified) {
            return res.json({ success: false, message: 'Doctor not found' });
        }

        const doctorWithoutPassword = {
            name: doctor.fullName,
            email: doctor.emailAddress,
            lisenceNumber: doctor.lisenceNumber,
            isDoctor: doctor.isVerified,
        };
        
        res.status(200).json({ success: true, data: doctorWithoutPassword, message: `Welcome ${doctor.fullName}!!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    login,
    register,
    docAuth
}