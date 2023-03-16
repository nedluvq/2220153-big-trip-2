const POINT_TYPES = ['taxi', 'airplane','car','hotel check-in','bank'];
const CITY_NAMES = ['Amsterdam','Chamonix','Geneva'];
const DESCRIPTION_TEMPLATES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Aliquam id orci ut lectus varius viverra.'
];
const OFFERS_TEMPLATE = [
  {
    id: 1,
    type: 'add luggage',
    price: 30
  },
  {
    id: 2,
    type: 'switch to comfort class',
    price: 100
  },
  {
    id: 3,
    type: 'add meal',
    price: 15
  },
  {
    id: 4,
    type: 'add luggage',
    price: 30
  },
  {
    id: 5,
    type: 'choose seats',
    price: 15
  },
  {
    id: 6,
    type: 'travel by train',
    price: 40
  }
];
const PRICE_BOUNDS = {
  MIN: 100,
  MAX: 500,
};
const DAYS_FROM_EXAMPLE = [
  '10:30',
  '12:25',
  '14:30',
  '16:20',
  '14:20',
  '16:00',
];
const DAYS_TO_EXAMPLE = [
  '11:00',
  '13:35',
  '16:05',
  '17:00',
  '13:00',
  '19:00'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomElement = (examplesArray) => {
  const element = examplesArray[getRandomInt(examplesArray.length)];
  return element;
};


const generatePointModel = () => (
  {
    price: getRandomInt(PRICE_BOUNDS.MAX),
    dateFrom: getRandomElement(DAYS_FROM_EXAMPLE),
    dateTo: getRandomElement(DAYS_TO_EXAMPLE),
    favorite: Boolean(getRandomInt(1)),
    pictures: `http://picsum.photos/248/152?r=${getRandomInt(20)}`,
    description:getRandomElement(DESCRIPTION_TEMPLATES),
    city: getRandomElement(CITY_NAMES),
    pointType: getRandomElement(POINT_TYPES),
    offers: getRandomElement(OFFERS_TEMPLATE)

  });

export default class GenerateModel {
  getModel() {
    this.element = generatePointModel();
    return this.element;
  }
}
