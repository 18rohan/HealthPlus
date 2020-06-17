import Patient from '../../Models/patients';
export const CREATE_PATIENT = "CREATE_PATIENT";


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

		}
	});

		
}