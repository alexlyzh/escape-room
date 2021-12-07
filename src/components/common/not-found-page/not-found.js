import {Link} from '../header/header.styled';
import {AppRoute} from '../../../constants';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.Layout>
    <S.Message>
      404 - Страница не найдена
    </S.Message>
    <Link to={AppRoute.Root}>
      Вернуться на главную
    </Link>
  </S.Layout>
)

export {NotFound};
