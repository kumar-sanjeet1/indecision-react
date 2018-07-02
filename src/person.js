

const isAdult = (age) => 18 < age;

export const canDrink = (age) => {
    if(21 < age) {
        return `yes, ${age} is allowed to drink`;
    }else {
        return 'Calling the police';
    }
}

export default (arg) => {
    return 'function Called with ' + arg;
}

export { isAdult }


export const obj = {
    name:'sanjeet',
    printName: function() {
        return this.name
    }
}
