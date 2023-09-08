function survive(partOfDay, place, obj) {
    let action;

    let day = {
        'forest': {
            'knife': 'Hunt for food',
            'container': 'Collect berries',
            'other': 'Explore',
        },
        'desert': {
            'hat': 'Search for water',
            'other': 'Find shade',
        }
    }
    let night = {
        'forest': {
            'firestarter': 'Make a campfire',
            'other': 'Climb a tree for safety',
        },
        'desert': {
            'blanket': 'Sleep',
            'other': 'Keep moving to stay warm',
        }
    }

    if (partOfDay === 'day') {
        day[place][obj] ? action = day[place][obj] : action = day[place].other
    } else {
        night[place][obj] ? action = night[place][obj] : action = night[place].other
    }

    console.log(action);


}

survive('day', 'forest', 'knife');
survive('day', 'forest', 'container');
survive('night', 'forest', 'firestarter');
survive('night', 'desert', 'blanket');
survive('day', 'desert', 'hat');
survive('night', 'desert', 'sword');