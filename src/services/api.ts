const BASE_URL = `https://www.omdbapi.com`

export function fetchMovieApi(value: string, page: number) {
  return fetch(`${BASE_URL}/?apikey=${process.env.REACT_APP_MOVIE_APP_KEY}&s=${value}&page=${page}`).then((response) =>
    response.json()
  )
}
