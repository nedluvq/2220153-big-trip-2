const POINT_TYPES = ['taxi', 'airplane','car','hotel check-in','bank'];
const CITY_NAMES = ['Amsterdam','Chamonix','Geneva'];
const DESCRIPTION_TEMPLATES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Aliquam id orci ut lectus varius viverra.'
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


const generatePointModel = () => ({
  price: getRandomInt(PRICE_BOUNDS.MAX),
  dateFrom: getRandomElement(DAYS_FROM_EXAMPLE),
  dateTo: getRandomElement(DAYS_TO_EXAMPLE),
  favorite: Boolean(getRandomInt(1)),
  pictures: `http://picsum.photos/248/152?r=${getRandomInt(20)}`,
  description:getRandomElement(DESCRIPTION_TEMPLATES),
  city: getRandomElement(CITY_NAMES),
  offers: getRandomElement(POINT_TYPES) //Не совсем понимаю, как нужно реализовать логику offers
});

export default generatePointModel;
