export type MovieType = {
  _id: string;
  title: string;
  year: number;
  rating: number;
  actors: Array<string>;
};

export type MoviesType = Array<MovieType>;
