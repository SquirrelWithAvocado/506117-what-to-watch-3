import { useAppDispatch, useAppSelector } from '../../../hooks';
import { postFavouriteAction } from '../../../store/api-actions';
import { getFavourites } from '../../../store/data/user-data/selectors';

type MyListProps = {
  filmId?: string;
}

export default function MyList({filmId} : MyListProps): JSX.Element {
  const films = useAppSelector(getFavourites);
  const isInList = filmId && films.map((f) => f.id).includes(filmId, 0);
  const dispatcher = useAppDispatch();

  const handleClick = () => {
    if (filmId !== undefined) {
      dispatcher(postFavouriteAction({
        id: filmId,
        status: isInList ? 1 : 0
      }));
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {
        isInList ?
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }

      <span>My list</span>
      <span className="film-card__count">{films.length}</span>
    </button>
  );
}
