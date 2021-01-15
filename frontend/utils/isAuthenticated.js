const isAuthenticted = () => {
    if(localStorage.getItem("token")) {
        return true;
    }
    return false;
}

export default isAuthenticted;