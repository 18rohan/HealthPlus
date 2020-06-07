import Patient from "../Models/patients";
import Appointment from "../Models/Appointment";

export const PATIENTS=[

	new Patient('p1', 'Jack Ryan', 25, 'male','Crocin Allergid', 'Flu'),
	new Patient('p2', 'John Krasisnki', 35, 'male','Crocin Disprin', 'Common Flu'),
	new Patient('p3', 'Michael Scott', 45, 'male','Crocin Allergid, Disprin', 'Headache'),
	new Patient('p4', 'Tom', 26, 'male','Crocin, Allergid, Combilflam', 'Stomachache'),
	new Patient('p5', 'Pam Halpert', 29, 'female','Crocin, Allergid, rogaine', 'HairLoss'),
	new Patient('p6', 'Ted Mosby', 33, 'male','Crocin, Allergid, remdesivir', 'Coronavirus'),

];



export const APPOINTMENTS=[
	new Appointment('a1','Jack',829473283,'jack@gmail.com','9th January, 2021','2.00 P.M',1200),
	new Appointment('a2','John',829473283,'John@gmail.com','10th January, 2021','3.00 P.M',1200),
	new Appointment('a3','Tom',829473283,'tom@gmail.com','12th January, 2021','6.00 P.M',1200),
	new Appointment('a4','Michael',829473283,'michael@gmail.com','14th January, 2021','7.00 P.M',1200),
	new Appointment('a5','Jerry',829473283,'jerry@gmail.com','16th January, 2021','8.00 P.M',1200),
	new Appointment('a6','Jim',829473283,'jim@gmail.com','17th January, 2021','1.00 P.M',1200),
	

];

