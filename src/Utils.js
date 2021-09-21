export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const inviteScriptPath="http://poradnianefrologiczna.pl/PhpScripts/sendInvite.php";
export const codeGenScriptPath="http:///poradnianefrologiczna.pl/PhpScripts/generateLabCode.php"
export const sendContactMsgPath="http:///poradnianefrologiczna.pl/PhpScripts/sendContactMsg.php"
export const securityTokenPath="http:///poradnianefrologiczna.pl/PhpScripts/securityToken.php"


export const fetchOptions={
    method: 'get',
    mode: "same-origin",
    credentials: "same-origin",
}

//user class to convinently store all user data
export class User{
    constructor(name,surname,age,location,postalCode,height,weight,PESEL) {
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.location=location;
        this.postalCode=postalCode;
        this.height=height;
        this.weight=weight;
        this.PESEL=PESEL;
    }
}

//for questions in which one/or many answers are to be chosen from a list of possible ones
export class ChoiceQuestion{
    constructor(text,answers,multipleChoice) {
        this.text=text;
        this.answers=answers;
    }
}

export class BloodParameter{
    constructor(name,possibleUnits,normForUnits) {
        this.name=name;
        this.possibleUnits=possibleUnits;
        this.normForUnits=normForUnits;
    }
}