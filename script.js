let people = [
    {
        name: 'Malika',
        age: 12,
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor from 611 gr',
        age: 22,
        budget: 20000,
        rent: 12,
        expenses: [{
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        age: 19,
        budget: 20200,
        rent: 12,
        expenses: [{
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        age: 34,
        budget: 27000,
        rent: 12,
        expenses: [{
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        age: 42,
        budget: 15000,
        rent: 12,
        expenses: [{
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        age: 9,
        budget: 12000,
        rent: 12,
        expenses: [{
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        age: 24,
        budget: 2000,
        rent: 12,
        expenses: [{
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]

let arr_ages = [
    {
        from: 20,
        to: 40,
        count: 0
    },
    {
        from: 10,
        to: 20,
        count: 0
    },
    {
        from: 30,
        to: 50,
        count: 0
    }
]
const setUp = (arr) => {
    let avarage = 0
    let taxMax = {}
    let taxMin = {}
    for (let element of arr) {
        element.totalExp = 0
        for (let expen of element.expenses) {
            element.totalExp += expen.total
        }
        avarage += element.totalExp
        element.totalMoney = (element.budget - element.totalExp) * element.rent / 100
        for (let age of arr_ages) {
            if (element.age >= age.from && element.age <= age.to) {
                age.count++
            } 
        }
    }
    let max = {}
    let min = {}
    // Max exp
    max = arr.reduce((a, b) => a.totalExp > b.totalExp ? a : b)
    console.log(max, 'Больше всех тратит');
    // Min exp
    min = arr.reduce((a, b) => a.totalExp < b.totalExp ? a : b)
    console.log(min, 'Меньше всех тратит');
    // Max tax correct or not I dont know
    taxMax = arr.reduce((a, b) => a.totalMoney > b.totalMoney ? a : b)
    console.log(taxMax, 'Больше всех платит налоги');
    // Min tax correct or not I dont know
    taxMin = arr.reduce((a, b) => a.totalMoney < b.totalMoney ? a : b)
    console.log(taxMin, 'Меньше всех платит налоги');
    // Avarage expenses
    avarage = Math.floor(avarage / arr.length)
    console.log(avarage, 'Общий средний расход');
    // New Array budged  FAIL
    console.log('Денег мало, нового бюджета нет');
    // Age limit
    console.log(arr_ages, 'Возрастные ограничения')
}
setUp(people)