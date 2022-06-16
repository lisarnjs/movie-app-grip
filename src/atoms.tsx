import { atom } from 'recoil'

interface IMovieCardProps {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const favoriteCardOpenState = atom({
  key: 'favoriteCardOpen',
  default: false,
})

export const clickMovieState = atom<IMovieCardProps>({
  key: 'clickMovie',
  default: { Title: 'title', Year: 'year', imdbID: 'imdbID', Type: 'type', Poster: 'poster' },
})
