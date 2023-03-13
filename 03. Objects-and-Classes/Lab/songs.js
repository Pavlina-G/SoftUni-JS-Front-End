function songsName(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = []

    let songsNum = inputArray.shift();
    let typeFilter = inputArray.pop();

    for (const songData of inputArray) {

        [type, name, time] = songData.split('_')
        songs.push(new Song(type, name, time))
    }

    for (const song of songs) {
        if (typeFilter === 'all') {
            console.log(song.name);
        } else if (typeFilter === song.typeList) {
            console.log(song.name);
        }
    }

}

songsName([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
songsName([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
songsName([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);