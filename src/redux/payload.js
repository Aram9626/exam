const defstate={
    loginPayload:{
        email:'',
        password:'',
    },
    signupPayload:{
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        password:'',
        role:'user'
    },
    confirmP:'',
    clear:false,
};
export default function payload(state=defstate, action) {
    switch (action.type){
        case "CLEAR":
            return{
                ...state,
                clear:action.value
            };
        case "LOGINPAYLOAD":
            return{
                ...state,
                loginPayload:action.value
            };
        case "SIGNUPPAYLOAD":
            return{
                ...state,
                signupPayload:action.value
            };
        case "CONFIRMPASS":
            return{
                ...state,
                confirmP:action.value
            };
        default:
            return state
    }
}