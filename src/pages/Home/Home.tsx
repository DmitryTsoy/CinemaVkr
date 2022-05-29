import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Button from '@mui/material/Button';
import './Home.scss'
import MainFilm from "../../components/MainFilm/MainFilm";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const movieList = useSelector((state: RootState) => state.movieList.movieList);


  return (

    <div className="home">
      <MainFilm />
    </div>

  )
}
export { Home };