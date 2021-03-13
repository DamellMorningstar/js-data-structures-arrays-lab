// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => {
    drivers.push(name);
}
    
const destructivelyPrependDriver = (name) => {
    drivers.unshift(name);
}
    
const destructivelyRemoveLastDriver = (name) => {
    drivers.pop();
}
    
const destructivelyRemoveFirstDriver = (name) => {
    drivers.shift();
}
    
const appendDriver = (name) => {
    return [...drivers, name];
}

const prependDriver = (name) => {
    return [name, ...drivers];
}

const removeFirstDriver = ()  => {
    return drivers.slice(1);

}

const removeLastDriver = ()  => {
    return drivers.slice(0, drivers.length - 1);
}


