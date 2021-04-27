const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ApplicantSchema = new Schema({
    propertyAppliedFor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}],
    firstName: String,
    initial: String,
    lastName: String,
    dob: String,
    ssn: String,
    driversLicense: String,
    maritalStatus: String,
    spouseName: String,
    spouseDOB: String,
    spouseSSN: String,
    spouseDrivers: String,
    desiredMoveIn: String,
    occupantNumber: String,
    occupantOne: String,
    occupantTwo: String,
    occupantThree: String,
    occupantFour: String,
    presentAddress: String,
    presentCity: String,
    presentState: String,
    presentZip: String,
    presentYears: String,
    presentLandlord: String,
    presentLandlordCity: String,
    presentLandlordState: String,
    presentLandlordZip: String,
    presentLandlordPhone: String,
    previousAddress: String,
    previousAddressCity: String,
    previousAddressState: String,
    previousAddressZip: String,
    previousAddressYears: String,
    previousLandlord: String,
    previousLandlordCity: String,
    previousLandlordState: String,
    previousLandlordZip: String,
    previousLandlordPhone: String,
    presentEmployer: String,
    presentSupervisor: String,
    presentPosition: String,
    presentSalary: String,
    presentEmploymentYears: String,
    previousEmployer: String,
    previousSupervisor: String,
    previousPosition: String,
    previousSalary: String,
    previousEmploymentYears: String,
},
    {timestamps: {}}
);

const Applicant = mongoose.model('Applicant', ApplicantSchema)

module.exports = Applicant

