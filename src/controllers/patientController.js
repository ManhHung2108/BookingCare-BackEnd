import patientService from "../services/patientService";
let handlePostBookAppointment = async (req, res) => {
    try {
        let booking = await patientService.postBookAppointment(req.body);
        return res.status(200).json(booking);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: "Lỗi từ server...",
        });
    }
};

module.exports = {
    handlePostBookAppointment,
};