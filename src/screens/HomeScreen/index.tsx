import React from 'react';
import * as S from './styles';

export default function HomeScreen() {
  return (
    <S.Container>
      <S.StyledImage
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('../../assets/logo.png')}
        resizeMode="center"
      />
    </S.Container>
  );
}
