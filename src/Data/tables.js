import twoPerson from '../assets/icons/tables/2-seats.svg'
import fourPerson from '../assets/icons/tables/4-person.svg'
import fivePerson from '../assets/icons/tables/5-person.svg'
import sixPerson from '../assets/icons/tables/6-person.svg'
import eightPerson from '../assets/icons/tables/7-person.svg'



export const tables = [
    {
        id: 1, 
        title: "Table 1", 
        status: "available",
        image:twoPerson,
        seats: 2,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:fourPerson,
        seats: 4,
    }, {
        id: 1, 
        title: "Table 1", 
        status: "Booked",
        image:fivePerson,
        seats: 5,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:sixPerson,
        seats: 6,
    },
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:eightPerson,
        seats: 8,
    },

    {
        id: 1, 
        title: "Table 1", 
        status: "available",
        image:twoPerson,
        seats: 2,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:fourPerson,
        seats: 4,
    }, {
        id: 1, 
        title: "Table 1", 
        status: "Booked",
        image:fivePerson,
        seats: 5,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:sixPerson,
        seats: 6,
    },
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:eightPerson,
        seats: 8,
    },

    {
        id: 1, 
        title: "Table 1", 
        status: "available",
        image:twoPerson,
        seats: 2,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:fourPerson,
        seats: 4,
    }, {
        id: 1, 
        title: "Table 1", 
        status: "Booked",
        image:fivePerson,
        seats: 5,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:sixPerson,
        seats: 6,
    },
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:eightPerson,
        seats: 8,
    },

    {
        id: 1, 
        title: "Table 1", 
        status: "available",
        image:twoPerson,
        seats: 2,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:fourPerson,
        seats: 4,
    }, {
        id: 1, 
        title: "Table 1", 
        status: "Booked",
        image:fivePerson,
        seats: 5,
    }, 
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:sixPerson,
        seats: 6,
    },
    {
        id: 1, 
        title: "Table 1", 
        status: "available", 
        image:eightPerson,
        seats: 8,
    },


]


 export const getAvailableTable = (status) => {
    return tables.filter(item => item.status === status.toLowerCase())
}


