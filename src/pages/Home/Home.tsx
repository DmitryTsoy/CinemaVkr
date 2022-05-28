import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Button from '@mui/material/Button';
import './Home.scss'

const Home = () => {
  const movieList = useSelector((state: RootState) => state.movieList.movieList);


  return (

    <>
      <div className="main">
        <div className="movie__info">
          {movieList.length !== 0 ?
            <div>
              <h1>{movieList[0].name}</h1>
              <p>{movieList[0].discription}</p>
            </div>
            :
            <h1>Нет данных</h1>}
        </div>

        <div className="botton__buy">
          <Button variant="contained">Купить билет</Button>
        </div>
        <div className="botton__trailer">
          <Button variant="contained">Contained</Button>
        </div>
      </div>
    </>

  )
}
export { Home };