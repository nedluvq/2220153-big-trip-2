import FilterView from './view/filters.js';
import TripEventsPresenter from './presenter/trip.js';
import MenuView from './view/main-view.js';
import PointsModel from './model/point-model.js';
import FormCreateView from './view/create-form.js';
import TripInfoView from './view/trip-info-view.js';
import { generateFilter } from './mock/point';
import { render, RenderPosition } from './render.js';


const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const tripMainElement = document.querySelector('.trip-main');
const navigationElement = headerElement.querySelector('.trip-controls__navigation');
const filtersElement = headerElement.querySelector('.trip-controls__filters');
const contentElement = mainElement.querySelector('.trip-events');
tripMainElement.querySelector('.trip-main__event-add-btn')
  .addEventListener('click', () => render(new FormCreateView(), contentElement, RenderPosition.AFTERBEGIN));

const routePresenter = new TripEventsPresenter(contentElement, eventsModel);
const eventsModel = new PointsModel();

routePresenter.init();

render(new MenuView(), navigation);
render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filters);
