class Appointment{
	constructor(id, Name, contact, email,  date, time, fees,patientId){
		this.id = id;
		this.Name = Name;
		this.contact = contact;
		this.email = email;
		this.date = date;
		this.time = time;
		this.fees = fees;
		this.patientId = patientId
	}
}

export default Appointment;