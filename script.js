let KeyList = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
let password = '';

function passwd(pLength){
    password = '';

    for(i=0; i<pLength; i++){
        password += KeyList.charAt(Math.floor(Math.random() * KeyList.length))
    }

    return password;
}

function Genpasswd(passL) {
    document.passwd.input.value = passwd(passL);
}