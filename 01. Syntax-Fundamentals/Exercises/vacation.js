// function vacation(numPeople, typeGroup, day) {
//     let price = 0;
//     let totalPrice = 0;
//
//     if (typeGroup === 'Students') {
//         if (day === 'Friday') {
//             price = 8.45;
//         } else if (day === 'Saturday') {
//             price = 9.80;
//         } else if (day === 'Sunday') {
//             price = 10.46;
//         }
//         totalPrice = numPeople * price;
//         if (numPeople >= 30) {
//             totalPrice -= totalPrice * 0.15;
//         }
//     } else if (typeGroup === 'Business') {
//         if (day === 'Friday') {
//             price = 10.90;
//         } else if (day === 'Saturday') {
//             price = 15.60;
//         } else if (day === 'Sunday') {
//             price = 16;
//         }
//         totalPrice = numPeople * price;
//         if (numPeople >= 100) {
//             totalPrice -= 10 * price;
//         }
//
//     } else if (typeGroup === 'Regular') {
//         if (day === 'Friday') {
//             price = 15;
//         } else if (day === 'Saturday') {
//             price = 20;
//         } else if (day === 'Sunday') {
//             price = 22.50;
//         }
//         totalPrice = numPeople * price;
//         if (numPeople >= 10 && numPeople <= 20) {
//             totalPrice -= totalPrice * 0.05;
//         }
//     }
//     console.log(`Total price: ${totalPrice.toFixed(2)}`)
// }

function vacation(numPeople, typeGroup, day) {
    let price = 0;
    let totalPrice = 0;

    switch (typeGroup) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            totalPrice = numPeople * price;
            if (numPeople >= 30) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            totalPrice = numPeople * price;
            if (numPeople >= 100) {
                totalPrice -= 10 * price;
            }
            break;
        case 'Regular' :
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            totalPrice = numPeople * price;
            if (numPeople >= 10 && numPeople <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday"
)
vacation(40,
    "Regular",
    "Saturday"
)