import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { film } from './mocks/film';
import { films } from './mocks/films';
import { promo } from './mocks/promo';
import { reviews } from './mocks/reviews';
import { similar } from './mocks/similar';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {
        ...{
          props: {
            film,
            films,
            promo,
            reviews,
            similar
          }
        }
      }
      />
    </Provider>
  </React.StrictMode>
);
