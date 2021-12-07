import {Link} from '../header/header.styled';
import {AppRoute} from '../../../constants';
import {NotFoundLayout, NotFoundMessage} from './not-found.styled';

const NotFound = () => (
  <NotFoundLayout>
    <NotFoundMessage>
      404 - Страница не найдена
    </NotFoundMessage>
    <Link to={AppRoute.Root}>
      Вернуться на главную
    </Link>
  </NotFoundLayout>
)

export {NotFound};
