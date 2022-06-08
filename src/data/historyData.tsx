export type THistoryReservedPlaces = { row: number, place: number }

export type THistoryElement = {

    filmName: string,
    sessionName: string,
    sessionDate: string,
    sessionTime: string,
    reservedPlaces: THistoryReservedPlaces[],
    ticketPrice: number,
    nameHall: string,


};


export type THistory = THistoryElement[];

export const historyData: THistory = [

    {
        filmName: "Джон Уик 3",
        sessionName: "Джон Уик 3 17:00",
        sessionDate: "17:00",
        sessionTime: "17:00 - 19:00",
        reservedPlaces: [{ row: 2, place: 1 }, { row: 2, place: 2 }],
        ticketPrice: 250,
        nameHall:"Зал №1"
    },

]






