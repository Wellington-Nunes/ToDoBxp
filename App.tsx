import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  padding: 0 20px;
`;

const StyledImage = styled.Image`
  width: 300px;
`;

/* eslint-disable @typescript-eslint/no-require-imports */
export default function App() {
  return (
    <Container>
      <StyledImage
        source={require('./src/assets/logo.png')}
        resizeMode="center"
      />
    </Container>
  );
}
