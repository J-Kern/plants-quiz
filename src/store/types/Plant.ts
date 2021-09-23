export type Plant = {
    id: {
        type: number,
        required: true
    },
    optionalGermanPrefix?: string,
    germanName: {
        type: string,
        required: true
    },
    latinName: {
        type: string,
        required: true
    },
    optionalLatinSuffix?: string,
}