function softUniStudents(list) {
    let courses = {}

    for (const el of list) {
        if (el.includes(':')) {
            let [name, capacity] = el.split(': ');
            if (!(name in courses)) {
                courses[name] = [{capacity: 0, count: 0, students: []}];
            }
            courses[name][0].capacity += Number(capacity);
        } else {
            let info = el.split(' ');
            let courseName = info.pop();

            info.pop();

            let email = info.pop();
            let userInfo = info.shift();
            let username = userInfo.slice(0, userInfo.indexOf('['));
            let credits = Number(userInfo.slice(userInfo.indexOf('[') + 1, userInfo.indexOf(']')));

            if (courseName in courses && courses[courseName][0].capacity > 0) {
                courses[courseName][0].count += 1;
                courses[courseName][0].capacity -= 1;
                courses[courseName][0].students.push({username: username, credits: credits, email: email});
            }

        }
    }
    let sorted = Object.entries(courses).sort((a, b) => {
        return b[1][0].count - a[1][0].count;
    })

    for (const entry of sorted) {
        let info = entry[1][0];

        console.log(`${entry[0]}: ${info.capacity} places left`)

        info.students.sort((a, b) => {
            return b.credits - a.credits;
        }).forEach((s) => {
            console.log(
                `--- ${s.credits}: ${s.username}, ${s.email}`
            );
        })


    }
}

// softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
softUniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
);