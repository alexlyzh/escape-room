import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {useDispatch, useSelector} from 'react-redux';
import {getFilteredQuests, selectIsDataLoaded, selectQuestTypeFilter} from '../../../../store/reducer/selectors';
import {AppRoute, difficulty, QuestType} from '../../../../constants';
import {generatePath} from 'react-router-dom';
import {ActionCreator} from '../../../../store/actions';
import Spinner from '../../../common/spinner/spinner';

const renderIconByType = (type) => {
  switch (type) {
    case QuestType.all:
      return <IconAllQuests/>;
    case QuestType.adventures:
      return <IconAdventures/>;
    case QuestType.horror:
      return <IconHorrors/>;
    case QuestType.mystic:
      return <IconMystic/>;
    case QuestType.detective:
      return <IconDetective/>;
    case QuestType['sci-fi']:
      return <IconScifi/>;
    default:
      return null;
  }
};

const QuestsCatalog = () => {
  const dispatch = useDispatch();
  const quests = useSelector(getFilteredQuests);
  const questTypeFilter = useSelector(selectQuestTypeFilter);
  const isDataLoaded = useSelector(selectIsDataLoaded);
  const questTypes = Object.keys(QuestType);

  return (
    <>
      <S.Tabs>
        {questTypes.map((type) => (
            <S.TabItem key={type}>
              <S.TabBtn
                isActive={type === questTypeFilter}
                onClick={() => dispatch(ActionCreator.changeQuestTypeFilter(type))}
              >
                { renderIconByType(QuestType[type]) }
                <S.TabTitle>{QuestType[type]}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          ))}
      </S.Tabs>

      <S.QuestsList>
        {!isDataLoaded ? <Spinner homePage /> : null}
        {isDataLoaded && quests.map((quest) => {
          const {id, title, previewImg, level, peopleCount} = quest;
          const [minPeople, maxPeople] = peopleCount;
          return (
            <S.QuestItem key={id}>
              <S.QuestItemLink to={generatePath(AppRoute.Quest, { id })}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${minPeople}–${maxPeople} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {difficulty[level]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          );
        })}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
