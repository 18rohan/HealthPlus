import Patient from '../../Models/patients';
export const CREATE_PATIENT = "CREATE_PATIENT";
export const FETCH_PATIENT  = "FETCH_PATIENT";

export const fetchPatient = (id,name,email,contact,age,gender,prescription)=>{
	return async (dispatch,getState) =>{
		const userId = getState().auth.userId
		try{
			const response = await fetch(`https://healthplus-2b9b0.firebaseio.com/patients.json`);

			if(!response.ok){
				throw new Error('Something went wrong');
			}

			const resData = await response.json();
			console.log("THIS IS PATIENT ACTION!!!");
			console.log(resData);
			const loadedPatients = [];
			for(const key in resData){
				loadedPatients.push(
					new Patient(
					key,
					resData[key].name,
					resData[key].email,
					resData[key].contact,
					resData[key].age,
					resData[key].gender,
					resData[key].prescription,
					resData[key].patientId,

				)

					);
			}
			dispatch({
		type: 'FETCH_PATIENT',
		patientData:loadedPatients.find(patient => patient.patientId === userId)
	})
		} catch (err){
			throw err;
		}
	};
	
};

export const deletePatient = (id) =>{
	return async(dispatch,getState)=>{
		const token = getState.auth.token;
		await fetch(`https://healthplus-2b9b0.firebaseio.com/patients/${id}.json?auth=${token}`,
			{method:'DELETE'});

	};
	dispatch({
		type: 'DELETE',
		patientId:id
	})
};
export const CreatePatient = (id, name, email,contact,age,gender,prescription)=>{
	return async (dispatch,getState) => {
		const token = getState().auth.token;
		const userId = getState().auth.userId;
		const Email = getState().auth.email;
		try{
			const response = await fetch(`https://healthplus-2b9b0.firebaseio.com/patients.json?auth=${token}`,{
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify({
					id,
					name,
					email,
					contact,
					age,
					gender,
					prescription,
					patientId:userId,
				})
			})
			if (!response.ok){
				throw new Error('Something went wrong');
			}


		} catch (err){

		}
	};
	dispatch({
		type: 'CREATE_PATIENT',
		patientData:{
			id:userId,
			name:name,
			email:Email,
			contact:contact,
			age:age,
			gender:gender,
			prescription:prescription,
			patientId:userId,

		}
	});

		
}