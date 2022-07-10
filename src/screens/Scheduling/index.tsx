import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Footer
} from './styles';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails')
  }

  function handleBackPress(){
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton 
          onPress={handleBackPress}
          color={theme.colors.shape}
        />
        <Title>Escolha uma {'\n'}data de início e {'\n'}fim do aluguel</Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue>18/06/2022</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue>18/06/2022</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}