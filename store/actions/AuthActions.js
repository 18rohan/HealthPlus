export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT"

export const SignUp = (email, password) =>{
	return async (dispatch) => {
		const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnTqtwvF8cWN4AFA88HwoHn0MGo6taDeQ',{
			method: 'POST',
			headers:{'Content-Type': 'application/json'},
			body:JSON.stringify({
				email:email,
				password:password,
				returnSecureToken:true,
			})

		});
		if(!response.ok){
			// throw new Error('Some went wrong');
			const ErrorResData = await response.json();
			let message = 'Something went wrong';
			if(ErrorResData.error.message ==='EMAIL_EXISTS'){
				message = 'Email already exists';
			}else if(ErrorResData.error.message ==='OPERATION_NOT_ALLOWED'){
				message = 'Operation is not allowed';
			}else if(ErrorResData.error.message ==='TOO_MANY_ATTEMPTS_TRY_LATER'){
				message = 'Too many attempts';
			}
			throw new Error(message);
		}
		const resData = await response.json();
		dispatch({type:SIGNUP});
	};
};

export const Login = (email, password) =>{

	return async (dispatch) =>{
		const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnTqtwvF8cWN4AFA88HwoHn0MGo6taDeQ',
		{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email:email,
				password:password,
				returnSecureToken:true
			})
		});

		if(!response.ok){
			const ErrorResData = await response.json();
			let message = 'Something went wrong';
			if(ErrorResData.error.message === 'EMAIL_NOT_FOUND'){
				message = 'Email not found';
			}else if(ErrorResData.error.message === 'INVALID_PASSWORD'){
				message = 'Invalid Password';
			}else if(ErrorResData.error.message === 'USER_DISABLED'){
				message = 'User is disabled';
			}
			throw new Error(message);
		}
		const resData = await response.json();
		console.log(resData);
		dispatch({ type:LOGIN, token:resData.idToken, userId:resData.localId, email:resData.email });
	};
};

export const Logout = () =>{
	return {type:LOGOUT};
};