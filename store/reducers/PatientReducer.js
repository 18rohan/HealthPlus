import {CREATE_PATIENT,FETCH_PATIENT} from '../actions/PatientAction';
import Patient from '../../Models/patients';
const initialState = {
	patients : []
}


const PatientReducer = (state=initialState, action) =>{
	switch (action.type){
		case FETCH_PATIENT:
			return {
				...state,
				patients:action.patientData
			};
		case CREATE_PATIENT:
			const patient = new Patient(
					action.patientData.id,
					action.patientData.name,
					action.patientData.email,
					action.patientData.contact,
					action.patientData.age,
					action.patientData.gender,
					action.patientData.prescription,
					action.patientData.patientId

				)
			return {
				...state,
				patients:state.patients.concat(patient)
			};
		default:
			return state;
	}
}



export default PatientReducer ;