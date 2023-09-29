function printPascalCase(text){
    const regex = /([A-Z][a-z]+)/gm;
    let result = text.match(regex);
    
    console.log(result.join(', '));
}

printPascalCase('SplitMeIfYouCan');
printPascalCase('HoldTheDoor');
printPascalCase('ThisIsSoAnnoyingToDo');