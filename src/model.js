const GenevaModel = {
  name,
  timeFrom: '10:30',
  timeTo: '11:00',
  timeTotal: '30M',
  price: '20$',
  city: 'Geneva',
  offers: {
    addLuggagePrice: '30€ ',
    switchToComfortPrice: '100€',
    addMealPrice: '15€',
    chooseSeatsPrice: '5€',
    anotherWayPrice: '40€'
  },
  favorite: true,
  description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
  pictures: ['http://picsum.photos/248/152?r=1','http://picsum.photos/248/152?r=2','http://picsum.photos/248/152?r=3'],
};

const ChamonixModel = {
  name,
  timeFrom: '12:25',
  timeTo: '13:35',
  timeTotal: '01H 10M',
  price: '160$',
  city: 'Chamonix',
  offers: {
    addLuggagePrice: '50€ ',
    switchToComfortPrice: '80€',
    addMealPrice: '25€',
    chooseSeatsPrice: '15€',
    anotherWayPrice: '-20€'
  },
  favorite: false,
  description: 'Chamonix-Mont-Blanc (usually given to Chamonix) is a resort town in France, close to the border with Switzerland and Italy. It is located at the foot of Mont Blanc, the highest peak in the Alps.',
  pictures: ['http://picsum.photos/248/152?r=4','http://picsum.photos/248/152?r=5','http://picsum.photos/248/152?r=6'],
};

export default {GenevaModel, ChamonixModel};
