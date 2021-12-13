const ALL_QUESTS_FILTER_NAME = 'all'

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

const difficulty = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'простой'
};

const QuestType = {
  [ALL_QUESTS_FILTER_NAME]: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
};

export {
  AppRoute,
  ApiRoute,
  difficulty,
  QuestType,
  ALL_QUESTS_FILTER_NAME,
};
