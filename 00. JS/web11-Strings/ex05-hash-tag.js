function hashTag(text){
    const regex = /\#[A-Za-z]+/gm;
    let result = (text.match(regex));
    result.forEach(word => console.log(word.slice(1)));
}

hashTag('Everyone uses # to tag a #special word in #facebook');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')