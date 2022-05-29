


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
    {
      title: "Титаник",
      originalTitle: "Titanic",
      discription: "Запретная любовь на фоне гибели легендарного лайнера. Великий фильм-катастрофа — в отреставрированной версии",
      background: "",
      poster: "https://image.tmdb.org/t/p/original/21DaLge7C6dVu7dzB0ui9gweIEt.jpg",
      date: "1997",
      time: "194",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8.4",
      type: "Сейчас в кино",
    },
    {
      title: "Мстители: Война бесконечности",
      originalTitle: "Avengers: Infinity War",
      discription: "Титан Танос вынашивает страшный план — угрозу всей Вселенной. Предпоследний фильм о суперкоманде Marvel",
      background: "",
      poster: "https://image.tmdb.org/t/p/original/84EwFHyqNSzijE5UCovtk2aC57v.jpg",
      date: "2018",
      time: "149",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8",
      type: "Сейчас в кино",
    },
    {
      title: "Властелин колец: Возвращение короля",
      originalTitle: "The Lord of the Rings: The Return of the King",
      discription: "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды.",
      background: "",
      poster: "https://image.tmdb.org/t/p/original/wNB551TsEb7KFU3an5LwOrgvUpn.jpg",
      date: "2018",
      time: "201",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8.6",
      type: "Сейчас в кино",
    },

    {
      title: "Интерстеллар",
      originalTitle: "Interstellar",
      discription: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
      background: "",
      poster: "http://image.tmdb.org/t/p/original/mS4EvhsrT0SQZOlWrQEzWI5KiUa.jpg",
      date: "2014",
      time: "169",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8.6",
      type: "Сейчас в кино",
    },

    {
      title: "1+1",
      originalTitle: "Untouchable",
      discription: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы.",
      background: "",
      poster: "https://imdb-api.com/posters/original/323BP0itpxTsO0skTwdnVmf7YC9.jpg",
      date: "2011",
      time: "112",
      actorsList: [],
      genres: ["one", "two", "three"],
      direction: "",
      trailer: "",
      country: "USA",
      raiting: "8",
      type: "Сейчас в кино",
    },

 


  ]

