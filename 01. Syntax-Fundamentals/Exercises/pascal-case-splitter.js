function solve(text) {
    let result;
    result = text.split(/(?=[A-Z])/).join(', ')
    return result
}

console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));
console.log(solve('HoldTheDoor'));
console.log(solve('ThisIsSoAnnoyingToDo'));