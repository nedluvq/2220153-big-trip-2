import { createElement } from '../render';

const createEventsTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class EventsView {
  get Template () {
    return createEventsTemplate;
  }

  get Element() {
    if (!this.element){
      this.element = createElement(this.get Template());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
