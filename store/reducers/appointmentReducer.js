import {CREATE_APPOINTMENT, FETCH_APPOINTMENTS} from '../actions/appointmentAction';
import Appointment from '../../Models/Appointment';
import {APPOINTMENTS} from '../../Data/dummyData';


// import Appointments dummy data, then concatenate new Appointment to it..

const initialState = {
	appointments: [],

}

const AppointmentReducer = (state = initialState, action) =>{
	switch (action.type) {
		case FETCH_APPOINTMENTS:
			return {appointments : action.appointments};
		case CREATE_APPOINTMENT:
			const NewAppointment = new Appointment(
													new Date().toString(),
													action.appointmentData.Name,
													action.appointmentData.contact,
													action.appointmentData.email,
													action.appointmentData.date,
													action.appointmentData.time,
													action.appointmentData.fees,
													action.appointmentData.patientId
												 )
			return {
				...state,
				appointments : state.appointments.concat(NewAppointment)
			};
		default:
			return state;
	}
}

export default AppointmentReducer;
