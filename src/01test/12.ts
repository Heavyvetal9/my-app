type StudentType = {
    id: number
    name: string
    age: number
    address: AddressType[]
    diplom: DiplomType[]

}

type AddressType = {
    id: number
    title: string
    country: string
}


type DiplomType = {
    id: number
    vuz: string
    facultet: string
}
const student: StudentType = {
    id: 1,
    name: 'Vitaly',
    age: 41,
    address: [
        {
            id: 1,
            title: 'SPB',
            country: 'Russia'
        },
        {
            id: 2,
            title: 'belarus',
            country: 'Minsk'
        },
    ],
    diplom: [
        {
            id: 1,
            vuz: 'PVGUS',
            facultet: 'engineer',
        },
        {
            id: 2,
            vuz: 'PVGUS',
            facultet: 'economist'
        }

    ]
}
console.log(student.diplom[1].facultet)