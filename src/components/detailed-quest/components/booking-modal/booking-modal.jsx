import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {useEffect, useState} from 'react';
import {isEscKeyDown} from '../../../../utils';
import {useFormState} from '../../../../hooks/use-form-state';
import {useDispatch} from 'react-redux';
import {ApiActions} from '../../../../store/api-actions';

const adaptInputNamesToBackend = (order) => {
  return {
    name: order['booking-name'],
    phone: order['booking-phone'],
    peopleCount: Number(order['booking-people']),
    isLegal: order['booking-legal'],
  };
};

const checkPhoneValidity = ({target}) => {
  let validity = '';

  if (/[^\d]/.test(target.value)) {
    validity = 'Введите 11 цифр';
  }

  target.setCustomValidity(validity);
  target.reportValidity();
};

const initialState = {
  'booking-name': '',
  'booking-phone': '',
  'booking-people': '',
  'booking-legal': false,
};

const BookingModal = ({ onBookingModalClose}) => {
  const dispatch = useDispatch();
  const [order, onInputChange, onCheckboxChange] = useFormState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModalClose = (evt) => {
    if (isEscKeyDown(evt)) {
      onBookingModalClose();
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(ApiActions.PostOrder(adaptInputNamesToBackend(order), setIsSubmitting, onBookingModalClose));
  };

  useEffect(() => {
    document.addEventListener('keydown', handleModalClose);
    return () => document.removeEventListener('keydown', handleModalClose);
  });

  return (
    <S.BlockLayer data-popup="popup">
      <S.Modal>
        <S.ModalCloseBtn onClick={onBookingModalClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="http://localhost:3001/orders"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              value={order['booking-name']}
              onChange={onInputChange}
              disabled={isSubmitting}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              value={order['booking-phone']}
              minLength="11"
              maxLength="11"
              onChange={(evt) => {
                checkPhoneValidity(evt);
                onInputChange(evt);
              }}
              disabled={isSubmitting}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              value={order['booking-people']}
              onChange={onInputChange}
              disabled={isSubmitting}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={isSubmitting}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={order['booking-legal']}
              onChange={onCheckboxChange}
              disabled={isSubmitting}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                {'Я согласен с '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
