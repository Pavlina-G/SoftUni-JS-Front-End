class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function showTickets(ticketInfo = [], sortingCriteria) {


    let tickets = []

    for (let t of ticketInfo) {
        // const ticket = {
        //     'destination': '',
        //     'price': 0,
        //     'status': '',
        // }
        let [place, price, status] = t.split('|')
        // ticket.destination = place;
        // ticket.price = price;
        // ticket.status = status;
        // tickets.push(ticket);
        tickets.push(new Ticket(place, price, status))
    }

    tickets.sort((a, b) => {
        if (sortingCriteria === 'price') {
            a[sortingCriteria] - b[sortingCriteria]
        } else {
            a[sortingCriteria].localeCompare(b[sortingCriteria])
        }
    })

    // (a[sortingCriteria] > b[sortingCriteria]) ? 1 : ((b[sortingCriteria] > a[sortingCriteria]) ? -1 : 0))
    // .forEach(t => console.log(t));

    return tickets;

}

console.log(showTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

console.log(showTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

console.log(showTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));
