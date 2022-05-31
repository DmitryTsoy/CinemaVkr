
export type TSessionListElement = {

    filmName: string,
    sessionName: string,
    sessionDate: string,
    sessionTime: string,
    colRow: number,
    colPlace: number,
    nameHall: string,
    reservedPlaces: { row: number, place: number }[],
};


export type TSessionList = TSessionListElement[];


export const sessionList: TSessionList = [
    {
        filmName: "Джон Уик 3",
        sessionName: "Джон Уик 3 19:00",
        sessionDate: "19:00",
        sessionTime: "19:00 - 21:00",
        colRow: 9,
        colPlace: 15,
        nameHall: "Зал 1",
        reservedPlaces: [{ row: 1, place: 1 },],
    },

    {
        filmName: "Джон Уик 3",
        sessionName: "Джон Уик 3 21:00",
        sessionDate: "21:00",
        sessionTime: "21:00 - 23:00",
        colRow: 9,
        colPlace: 15,
        nameHall: "Зал 1",
        reservedPlaces: [{ row: 2, place: 1 },],
    },


]






