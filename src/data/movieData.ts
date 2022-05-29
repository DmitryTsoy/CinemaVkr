


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
  country: string,
  raiting: string,
  type: string,
}

export type movieDataType =
  movieDataTypeElement[];


export const movieMain: movieDataTypeElement =
{
  title: "Джон Уик 3",
  originalTitle: "John Wick 3 : Parabellum",
  discription: "Лучший в мире наемный убийца Джон Уик приговорен к смертной казни самими же киллерами за нарушение законов преступной гильдии. Но сотням наемников не по зубам один гений изящного искусства убивать.",
  background: "https://res.cloudinary.com/dhp6tpvfl/image/upload/v1653824464/Cinima/vVpEOvdxVBP2aV166j5Xlvb5Cdc_jin9zg.jpg",
  poster: "https://image.tmdb.org/t/p/original/9zbl69Zl5E7nZ7O3eX81UVqDfY9.jpg",
  date: "",
  time: "",
  actorsList: [],
  genres: [],
  direction: "",
  trailer: "",
  country: "USA",
  raiting: "8.3",
  type: "Сейчас в  кино",
}

export const movieData: movieDataType =
  [
    {
      title: "Джон Уик 3",
      originalTitle: "John Wick 3 : Parabellum",
      discription: "Лучший в мире наемный убийца Джон Уик приговорен к смертной казни самими же киллерами за нарушение законов преступной гильдии. Но сотням наемников не по зубам один гений изящного искусства убивать.",
      background: "https://res.cloudinary.com/dhp6tpvfl/image/upload/v1653824464/Cinima/vVpEOvdxVBP2aV166j5Xlvb5Cdc_jin9zg.jpg",
      poster: "https://image.tmdb.org/t/p/original/9zbl69Zl5E7nZ7O3eX81UVqDfY9.jpg",
      date: "2019",
      time: "",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8.3",
      type: "Сейчас в кино",
    },




  ]

