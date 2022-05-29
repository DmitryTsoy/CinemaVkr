


export type movieDataTypeElement = {
  title: string,
  originalTitle: string,
  discription: string,
  background: string,
  poster: string,
  date: string,
  time: string,
  actorsList: string[],
  genres: string[],
  direction: string,
  trailer: string,
  countries: string[],
  raiting: string,
}





export type movieDataType =
  movieDataTypeElement[];


export const movieMain: movieDataTypeElement =
{
  title: "Джон Уик 3",
  originalTitle: "John Wick 3 : Parabellum",
  discription: "Лучший в мире наемный убийца Джон Уик приговорен к смертной казни самими же киллерами за нарушение законов преступной гильдии. Но сотням наемников не по зубам один гений изящного искусства убивать.",
  background: "https://res.cloudinary.com/dhp6tpvfl/image/upload/v1653772880/Cinima/stretched-1920-1080-1012576_evbu93.jpg",
  poster: "",
  date: "",
  time: "",
  actorsList: [],
  genres: [],
  direction: "",
  trailer: "",
  countries: [],
  raiting: "",
}

export const movieData: movieDataType =
  [
    {
      title: "Джон Уик 3",
      originalTitle: "John Wick 3 : Parabellum",
      discription: "Лучший в мире наемный убийца Джон Уик приговорен к смертной казни самими же киллерами за нарушение законов преступной гильдии. Но сотням наемников не по зубам один гений изящного искусства убивать.",
      background: "https://res.cloudinary.com/dhp6tpvfl/image/upload/v1653772880/Cinima/stretched-1920-1080-1012576_evbu93.jpg",
      poster: "",
      date: "",
      time: "",
      actorsList: [],
      genres: [],
      direction: "",
      trailer: "",
      countries: [],
      raiting: "",
    }
  ]

