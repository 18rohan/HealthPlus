import {CREATE_PATIENT,FETCH_PATIENT,UPDATE_PATIENT} from '../actions/PatientAction';
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
		case UPDATE_PATIENT:
				// const patientIndex = state.patients.find(pat => pat.id === action.patientId);

				const Updatedpatient = new Patient(
					action.patientId,
					action.name,
					state.patients.email,
					action.contact,
					state.patients.age,
					state.patients.gender,
					action.prescription,
					action.patientId,
				)

				const updatedUserProfile = [...state.patients];
				updatedUserProfile = Updatedpatient

				console.log(updatedUserProfile);
				return {
					...state,
					patients :updatedUserProfile,
				}
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