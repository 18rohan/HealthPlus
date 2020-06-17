import {CREATE_PATIENT} from '../actions/PatientAction';
import Patient from '../../Models/patients';
const initialState = {
	patients = []
}


const CreatePatientReducer = (state=intialState, action) =>{
	switch (action.type){
		case CREATE_PATIENT:
			const patient = new Patient(
					action.patientData.id,
					action.patientData.name,
					action.patientData.email,
					action.patientData.contact,
					action.patientData.age,
					action.patientData.gender,
					action.patientData.prescription,

				)
			return {
				...state,
				patients:state.patients.concat(patient)
			}
		default:
			return state
	}
}

export const createPatientReducer 