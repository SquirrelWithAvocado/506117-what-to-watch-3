import { Genres } from "../../../constants/const";
import { Films } from "../../../constants/films";

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {
          Genres.map(
            genre =>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>
          )
        }
      </ul>

      <div className="catalog__films-list">
        {
          Films.map(
            film =>
              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src={film.imagePath} alt={film.name} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">{film.name}</a>
                </h3>
              </article>
          )
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
