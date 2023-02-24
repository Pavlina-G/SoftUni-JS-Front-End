// function reversedChars(ch1, ch2, ch3){
//     console.log(ch3, ch2, ch1)
// }

function reversedChars(ch1, ch2, ch3){
    let list = []
    list.push(ch1, ch2, ch3)
    console.log(list.reverse().join(' '))
}

reversedChars('A',
'B',
'C'
)

reversedChars('1',
    'L',
    '&'
)