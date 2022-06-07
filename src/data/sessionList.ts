
export type TSessionListElement = {

  filmName: string,
  sessionName: string,
  sessionDate: string,
  sessionTime: string,
  colRow: number,
  colPlace: number,
  nameHall: string,
  reservedPlaces: { row: number, place: number }[],
  ticketPrice: number,
};


export type TSessionList = TSessionListElement[];

/*
export const sessionList: TSessionList = [
  {
    filmName: "Джон Уик 3",
    sessionName: "Джон Уик 3 17:00",
    sessionDate: "17:00",
    sessionTime: "17:00 - 19:00",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 1",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
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
    reservedPlaces: [{ row: 3, place: 1 },],
  },
  {
    filmName: "Джон Уик 3",
    sessionName: "Джон Уик 3 23:00",
    sessionDate: "23:00",
    sessionTime: "23:00 - 01:00",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 1",
    reservedPlaces: [{ row: 4, place: 1 },],
  },
  {
    filmName: "Джон Уик 3",
    sessionName: "Джон Уик 3 01:00",
    sessionDate: "01:00",
    sessionTime: "01:00 - 03:00",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 1",
    reservedPlaces: [{ row: 2, place: 1 },],
  },

  {
    filmName: "Титаник",
    sessionName: "Титаник 12:00",
    sessionDate: "12:00",
    sessionTime: "12:00 - 15:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 1",
    reservedPlaces: [{ row: 2, place: 1 },],
  },

  {
    filmName: "Титаник",
    sessionName: "Титаник 16:00",
    sessionDate: "16:00",
    sessionTime: "16:00 - 19:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 1",
    reservedPlaces: [{ row: 2, place: 1 },],
  },

  {
    filmName: "Мстители: Война бесконечности",
    sessionName: "Мстители: Война бесконечности 10:00",
    sessionDate: "10:00",
    sessionTime: "10:00 - 12:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
  {
    filmName: "Мстители: Война бесконечности",
    sessionName: "Мстители: Война бесконечности 13:00",
    sessionDate: "13:00",
    sessionTime: "13:00 - 15:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
  {
    filmName: "Властелин колец: Возвращение короля",
    sessionName: "Властелин колец: Возвращение короля 16:00",
    sessionDate: "16:00",
    sessionTime: "16:00 - 18:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
  {
    filmName: "Властелин колец: Возвращение короля",
    sessionName: "Властелин колец: Возвращение короля 19:00",
    sessionDate: "19:00",
    sessionTime: "19:00 - 21:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },

  {
    filmName: "Властелин колец: Возвращение короля",
    sessionName: "Властелин колец: Возвращение короля 19:00",
    sessionDate: "19:00",
    sessionTime: "19:00 - 21:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
  {
    filmName: "Интерстеллар",
    sessionName: "Интерстеллар 20:00",
    sessionDate: "20:00",
    sessionTime: "20:00 - 22:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
  {
    filmName: "Интерстеллар",
    sessionName: "Интерстеллар 23:00",
    sessionDate: "23:00",
    sessionTime: "23:00 - 01:30",
    colRow: 9,
    colPlace: 15,
    nameHall: "Зал 2",
    reservedPlaces: [{ row: 2, place: 1 },],
  },
]





*/
