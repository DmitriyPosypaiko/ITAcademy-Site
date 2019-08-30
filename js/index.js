let massage = 'Hello JavaScript!';
alert(massage);

let userAge = prompt('Enter your age');
alert('Your age is' + userAge);

let nextAge = addOne(userAge);
alert('Your age function => '+ nextAge);

if (nextAge >= 18 && userAge < 65) {
    alert('You are adoult')
} else if(userAge >= 65){
    alert('You are retired')
} else {
    alert('You are kid')
}

function addOne(value){
    const newValue = value + 1;
    return newValue
}