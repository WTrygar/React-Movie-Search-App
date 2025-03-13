const API_KEY = "b236f8e434124f55c181988c17d59602";
const BASE_URL = "https://www.themoviedb.org/3";

export const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjM2ZjhlNDM0MTI0ZjU1YzE4MTk4OGMxN2Q1OTYwMiIsIm5iZiI6MTc0MTg3OTEwMi4zODEsInN1YiI6IjY3ZDJmNzNlZTE4OGVhYTQ3YzFkZTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vKuXpVLzKKvamVzMMgI0PDxeVOyzw7hBgKwzNT2AOdI",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
