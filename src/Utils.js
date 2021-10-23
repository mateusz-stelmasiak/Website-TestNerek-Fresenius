export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const inviteScriptPath= "/PhpScripts/sendInvite.php";
export const codeGenScriptPath="/PhpScripts/generateLabCode.php"
export const sendContactMsgPath="/PhpScripts/sendContactMsg.php"
export const checkZIPPath="/PhpScripts/checkZIP.php"
export const submitResultsToDbPath="/PhpScripts/submitResultsToDb.php"
export const securityTokenPath="/PhpScripts/securityToken.php"


export const fetchOptions={
    method: 'get',
    mode: "same-origin",
    credentials: "same-origin",
}

//user class to convinently store all user data
export class User{
    constructor(age,height,weight,PESEL,zip) {
        this.age=age;
        this.height=height;
        this.weight=weight;
        this.PESEL=PESEL;
        this.zip=zip;
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
    constructor(name,possibleUnits,normForUnits,explainer) {
        this.name=name;
        this.possibleUnits=possibleUnits;
        this.normForUnits=normForUnits;
        this.explainer=explainer;
    }
}
export function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

