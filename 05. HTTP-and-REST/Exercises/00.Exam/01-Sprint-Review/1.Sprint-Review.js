function sprintReview(data) {
    let num = data.shift();
    let reviewData = {};
    let commands = {
        'Add New': addNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': removeTask,
    }

    let allStatus = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    }

    for (let i = 0; i < num; i++) {
        let line = data.shift();
        let [assignee, taskId, title, status, pointsStr] = line.split(':');
        let estimatedPoints = Number(pointsStr);

        if (!(assignee in reviewData)) {
            reviewData[assignee] = [{taskId, title, status, estimatedPoints}];
        } else {
            reviewData[assignee].push({taskId, title, status, estimatedPoints});
        }
    }

    for (const line of data) {

        if (line.startsWith('Add')) {
            let [command, assignee, taskId, title, status, points] = line.split(':');
            let estimatedPoints = Number(points);
            commands[command](assignee, taskId, title, status, estimatedPoints);
        } else if (line.startsWith('Change')) {
            let [command, assignee, taskId, status] = line.split(':');
            commands[command](assignee, taskId, status);
        } else {
            let [command, assignee, index] = line.split(':');
            commands[command](assignee, Number(index));
        }
    }

    for (const assignee in reviewData) {
        reviewData[assignee].forEach((obj) => {
            allStatus[obj.status] += obj.estimatedPoints
        })
    }

    let doneTotal = 0;
    let restTotal = 0;

    for (const status in allStatus) {
        if (status.includes('Done')) {
            doneTotal += allStatus[status];
            console.log(`Done Points: ${allStatus[status]}pts`);
        } else {
            restTotal += allStatus[status];
            console.log(`${status}: ${allStatus[status]}pts`);
        }

    }

    if (doneTotal >= restTotal) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }


    function addNewTask(assignee, taskId, title, status, estimatedPoints) {
        if (assignee in reviewData) {
            reviewData[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeTaskStatus(assignee, taskId, newStatus) {
        if (!(assignee in reviewData)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
            for (const data of reviewData[assignee]) {
                if (data.taskId === taskId) {
                    data.status = newStatus;
                    break;
                } else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }
        }
    }

    function removeTask(assignee, idx) {

        if (!(assignee in reviewData)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
            if (idx > reviewData[assignee].length - 1 || idx < 0) {
                console.log(`Index is out of range!`);
            } else {
                reviewData[assignee].splice(idx, 1);
            }
        }
    }
}

// sprintReview([
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]
// );

sprintReview(  [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
);