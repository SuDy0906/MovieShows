import { Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieBookingPage from './Pages/MovieBookingPage';
import MoviesPage from './Pages/MoviesPage';

function App() {

  return (
    <div style={{ backgroundColor: "black" }}>
    <BrowserRouter>
      <Link to="/">
        <Card className='sticky-nav' style={{ backgroundColor: "black" }}>
          <h1 className='text-center m-2'>
            Movie Shows
          </h1>
        </Card>
      </Link>
      <Routes>
        <Route exact path='/' element={<MoviesPage />} />
        <Route exact path='/bookmovie/:id' element={<MovieBookingPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
