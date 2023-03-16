import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import CreateForm from '../view/create-form';
import FormEdit from '../view/form-edit';
import SortingView from '../view/sorting-view';
import { render } from '../render.js';

export default class EventsPresenter {
  constructor() {
    this.eventsList = new EventsView();
  }

  init (tripContainer) {
    this.tripContainer = tripContainer;

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new FormEdit(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++){
      render(new PointView(), this.eventsList.getElement());
    }

    render(new CreateForm(), this.eventsList.getElement());
  }
}
