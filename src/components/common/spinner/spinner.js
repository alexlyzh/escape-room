import * as S from './spinner.styled';

const Spinner = (props) => {
  return (
    <S.Center {...props}>
      <span className="visually-hidden">Loading...</span>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
      <S.Wave/>
    </S.Center>
  );
};

export default Spinner;
