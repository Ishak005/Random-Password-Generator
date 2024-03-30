//RANDOM PASSWORD GENERTOR

function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){

    const LowerCaseChars = "abcdefghijklmnopqrsturwxyz";
    const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars = "0123456789";
    const SymbolsChars = "!@#&";

    let allowedChars = "";
    let password = "";

    allowedChars += LowerCaseChars ? LowerCaseChars : "";
    allowedChars += UpperCaseChars ? UpperCaseChars : "";
    allowedChars += NumberChars ? NumberChars : "";
    allowedChars += SymbolsChars ? SymbolsChars : "";

    if(lenght <= 0){
        return '(Password lenght must be at least 1)';
    }
    if(allowedChars.length === 0){
        return '(At least 1 set charachter needs to be selected)';
    }

    for(let i=0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    return password;
};

const passwordlenght = 4;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password =  generatePassword(passwordlenght,
                                    includeLowerCase,
                                    includeUpperCase,
                                    includeNumber,
                                    includeSymbols 
                                    );

console.log(`Generated password: ${password}`);