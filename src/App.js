import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apiKey=c032e2d7';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const res = await fetch(`${API_URL}&s=${title}`);
		const data = await res.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies('Spiderman');
	}, []);

	return (
		<div className='app'>
			<h1>MovieLand</h1>

			<div className='search'>
				<input
					type='text'
					placeholder='Search for movie'
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				<img
					src={SearchIcon}
					alt='search'
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{movies?.length > 0 ? (
				<div className='container'>
					<Movies movies={movies} />
				</div>
			) : (
				<div className='empty'>
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
