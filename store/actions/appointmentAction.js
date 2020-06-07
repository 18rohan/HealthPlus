export const CREATE_APPOINTMENT = "CREATE_APPOINTMENT";

export const CreateAppointment = (Name, contact, email, date, time, fees) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://healthplus-2b9b0.firebaseio.com/appointments.json`,
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
		},
	});
};
