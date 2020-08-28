const genPass = (max) => {
    if (max == null || max == "" || max == undefined){
        max = 20
    }
    let password = "";
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.`!@#$%^&*()_+=*"
    for (let i = 0; i < max; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length)+1)
    }
    return password;
}
