import {LOGIN, SIGNUP, LOGOUT} from '../actions/AuthActions';

const initialState = {
	token:null,
	userId:null

};

const AuthReducer = (state = initialState, action)=>{
	switch(action.type){
		case LOGIN:
			return {
				token:action.token,
				userId:action.userId,
				email:action.email
			}
		   case SIGNUP:
		   	return {
		   		token:action.token,
		   		userId:action.userId,
		   		email:action.email,
		   	}
		   case LOGOUT:
		    	return initialState;
		    
		   default:
		   	return state;
	}
};

export default AuthReducer;		