import Appointment from '../../Models/Appointment';


export const CREATE_APPOINTMENT = "CREATE_APPOINTMENT";
export const FETCH_APPOINTMENTS = "FETCH_APPOINTMENTS";


export const FetchAppointments = () =>{

	return async (dispatch,getState) => {
		const userId = getState().auth.userId;
		try{
			const response = await fetch(`https://healthplus-2b9b0.firebaseio.com/appointments.json`);	
			if (!response.ok){
				throw new Error("Something went wrong");
			}

			const resData = await response.json();
			console.log(resData);
			const loadedAppointments = [];
			for (const key in resData){
				loadedAppointments.push(
					new Appointment(
						key,
						resData[key].Name,
						resData[key].contact,
						resData[key].email,
						resData[key].date,
						resData[key].time,
						resData[key].fees,
						resData[key].patientId


						)
					);
			}
			dispatch({
				type:FETCH_APPOINTMENTS,
				appointments:loadedAppointments.filter(appointment => appointment.patientId === userId )
			})
			}catch (err){
				throw err;
			}
		} 
		
	};



export const CreateAppointment = (Name, contact, email, date, time, fees) => {
	return async (dispatch, getState) => {
		const token = getState().auth.token
		const userId = getState().auth.userId
		const response = await fetch(
			`https://healthplus-2b9b0.firebaseio.com/appointments.json?auth=${token}`,
			{
				method: "POST",
				header: { "content-Type": "application/json" },
				body: JSON.stringify({
					Name,
					contact,
					email,
					date,
					time,
					fees,
					patientId:userId,
				}),
			}
		);
		if (!response.ok) {
			throw new Error("Something went wrong");
		}
	};
	dispatch({
		type: CREATE_APPOINTMENT,

		appointmentData: {
			Name: Name,
			contact: contact,
			email: email,
			date: date,
			time: time,
			fees: fees,
			patientId:userId
		},
	});
};
