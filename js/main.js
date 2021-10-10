const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME_IN_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const randomInt = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return('Use correct values!');
  } else {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
};

const randomFloat = (min, max, decimalPlaces) => {
  if (min < 0 || max < 0 || min > max) {
    return('Use correct values!');
  } else {
    const rand = Math.random() * (max - min) + min;
    return rand.toFixed(decimalPlaces);
  };
};

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length-1)];
};

const uniqueRandomArr = (elements) => {
  const newArr = [];
  const arrLength = _.random(0, elements.length-1);
  let currentValue = getRandomArrayElement(elements);
  while (arrLength !== newArr.length-1) {
    while (newArr.includes(currentValue)) {
      currentValue = getRandomArrayElement(elements);
    }
    newArr.push(currentValue);
  }
  return newArr;
};

const leadingZero = (index) => {
  if (index < 10) {
    index = '0' + index;
  }
  return index.toString();
};

const createAuthor = (index) => {
  return {
    avatar: 'img/avatars/user' + leadingZero(index) + '.png',  
  };
};

const createOffer = (location) => {
  return {
    title: 'Тестовый заголовок',
    address: location.lat + ' ,' + location.lng,
    price: randomInt(23000, 75000),
    type: getRandomArrayElement(TYPES),
    rooms: randomInt(1,9),
    guests: randomInt(1,5),
    checkin: getRandomArrayElement(TIME_IN_OUT),
    checkout: getRandomArrayElement(TIME_IN_OUT),
    features: uniqueRandomArr(FEATURES),
    description: 'Тестовое описание',
    photos: uniqueRandomArr(PHOTOS), 
  };
};

const createLocation = () => {
  return {
    lat: randomFloat(35.65000, 35.70000, 5),  
    lng: randomFloat(139.70000, 139.80000, 5),
  };
};

//Создаем объявление
const createAnnouncement = (index) => {
  
  const location = createLocation();

  return {
    author: createAuthor(index),
    offer: createOffer(location),
    location: location,
  };
};

const arrAnnouncements = [];
for (let index = 1; index <= 10; index++) {
  arrAnnouncements.push(createAnnouncement(index));
}

console.log(arrAnnouncements);

const test1 = getRandomPositiveFloat(1,3);
const test2 = getRandomPositiveInteger(1,3);
