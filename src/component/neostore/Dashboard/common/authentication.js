

export const Authentication=()=> {
    if(typeof window==="undefined"){
       return false;
    }
    if (localStorage.getItem("tokens")){
       return true;
    }
    else{
        return false;
    }
}

export default Authentication
