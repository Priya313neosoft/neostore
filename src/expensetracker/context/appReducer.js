export  default(state,action)=>{
    console.log(state)
    console.log(action)
    switch(action.type){
        default:
            return state;
        // case 'DELETE_TRANSACTION':
        //     return{
        //         ...state,
        //         transact
        //     }
    }
}