
const defstate={
    rol:false,
    modalLogIn:false,
    modalLogOut:false,
    categories:[],
    checkRadio:'radio1',
    report:[]
};
export default function reducer(state=defstate,action) {
    switch (action.type){
        case "SCROLL":
            return{
                ...state,
                rol:action.mem
            };
        case "MODALLOGIN":
            return{
                ...state,
                modalLogIn:!state.modalLogIn
            };
        case "MODALLOGOUT":
            return{
                ...state,
                modalLogOut:!state.modalLogOut
            };
        case "GETCATEGORY":
            return{
                ...state,
                categories:action.value
            };
        case "CHECKRADIO":
            return{
                ...state,
                checkRadio:action.value
            };
        case "GETREPORT":
            return{
                ...state,
                report:action.value
            };
        default:
            return state
    }
}