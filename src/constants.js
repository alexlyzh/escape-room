const questTypes = ['sci-fi', 'detective', 'adventures', 'mystic', 'horror'];

const AppRoute = {
  Root: '/',
  Contacts: '/contacts',
  Quest: '/quest/:id'
};

const ApiRoute = {
  Quests: '/quests',
  Quest: '/quest/:id',
  Orders: '/orders',
};

const Difficulty = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'простой'
};

const QuestType = {
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  adventures: 'Приключения',
  'sci-fi': 'Sci-fi',
};

export {
  questTypes,
  AppRoute,
  ApiRoute,
  Difficulty,
  QuestType,
};
