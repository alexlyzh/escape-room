import {AppRoute} from '../../../constants';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.Layer>
    <S.Message>
      404 - Страница не найдена
    </S.Message>
    <S.Link to={AppRoute.Root}>
      Вернуться на главную
    </S.Link>
  </S.Layer>
)

export {NotFound};
