import { createElement } from '../render';

const createEventsTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class EventsView {
  getTemplate () {
    return createEventsTemplate;
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
