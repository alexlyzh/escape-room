import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import Spinner from '../common/spinner/spinner';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectIsDataLoaded, selectQuests} from '../../store/reducer/selectors';
import {difficulty, QuestType} from '../../constants';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const params = useParams();
  const id = Number(params.id);
  const quests = useSelector(selectQuests);
  const isDataLoaded = useSelector(selectIsDataLoaded);

  const quest = quests.find((quest) => quest.id === id);

  if (!quest) {
    return <Spinner questPage />;
  }

  const {title, coverImg, level, peopleCount, type, duration, description} = quest;
  const [minPeople, maxPeople] = peopleCount;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const closeBookingModal = () => setIsBookingModalOpened(false);

  return (
    <MainLayout>
    {isDataLoaded &&
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{QuestType[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${minPeople}–${maxPeople} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{difficulty[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingModalClose={closeBookingModal} />}
      </S.Main>}
    </MainLayout>
  );
};

export default DetailedQuest;
