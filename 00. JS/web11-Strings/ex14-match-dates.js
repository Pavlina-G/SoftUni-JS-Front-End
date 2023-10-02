function matchDates(dates) {
    const regex = /\b(?<day>\d{2})([-./])(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})\b/gm;
    let matches = dates[0].matchAll(regex)
    for (let m of matches) {
        let day = m.groups['day'];
        let month = m.groups['month'];
        let year = m.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016']);
matchDates(['1/Jan-1951 23/October/197 11-Dec-2010 18.Jan.2014']);