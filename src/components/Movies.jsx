import React from 'react';
import Movie from './Movie';

const Movies = ({ movies }) => {
	return (
		<>
			{movies.map((movie, index) => (
				<Movie key={index} movie={movie} />
			))}
		</>
	);
};

export default Movies;
