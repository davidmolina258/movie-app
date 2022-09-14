const API = "https://api.themoviedb.org/3";
export const getData = (url) => {
  return fetch(API + url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNmNDQyODg4YWM5Mjg4YzU1M2JhNGUyYmQyYTIxOCIsInN1YiI6IjYzMTFlNWExZTc4Njg3MDA3ZjVhYWViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.alrOksEz0O9H6Dw7S8N61QbscAEFXLvRXrLUuQMzaK8",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
