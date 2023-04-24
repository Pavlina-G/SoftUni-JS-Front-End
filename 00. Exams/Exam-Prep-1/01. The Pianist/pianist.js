function favoritePianoPieces(info) {
    let numberOfPieces = Number(info.shift())

    // let piecesCollection = []
    let pieceCollection = {}

    let commands = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changePieceKey,
    }

    for (let i = 0; i < numberOfPieces; i++) {
        const [piece, composer, key] = info.shift().split('|')
        pieceCollection[piece] = {composer, key};
    }

    for (const line of info) {
        let lineInfo = line.split('|')
        let command = lineInfo.shift()

        if (command === 'Stop') {
            printResult()
            break;
        }
        if (command.startsWith('Add')) {
            const [piece, composer, key] = lineInfo
            addPiece(piece, composer, key);
        } else if (command.startsWith('Remove')) {
            const [piece] = lineInfo
            removePiece(piece);
        } else {
            const [piece, newKey] = lineInfo
            changePieceKey(piece, newKey)
        }

    }
    function addPiece(piece, composer, key) {

        if (piece in pieceCollection) {
            console.log(`${piece} is already in the collection!`);
        } else {
            pieceCollection[piece] = {composer, key}
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }

    }

    function removePiece(piece) {
        if (piece in pieceCollection) {
            delete pieceCollection[piece];
            console.log(`Successfully removed ${piece}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function changePieceKey(piece, newKey) {
        if (piece in pieceCollection) {
            pieceCollection[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function printResult() {
        for (const piece in pieceCollection) {
            let {composer, key} = pieceCollection[piece]
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
        }
    }


}

favoritePianoPieces([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);