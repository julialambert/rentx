import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  function handleBackPress(){
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBackPress}/>
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']}/>
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 590</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380km/h' icon={speedSvg}/>
          <Accessory name='3.2s' icon={accelerationSvg}/>
          <Accessory name='800 HP' icon={forceSvg}/>
          <Accessory name='Gasolina' icon={gasolineSvg}/>
          <Accessory name='Auto' icon={exchangeSvg}/>
          <Accessory name='2 pessoas' icon={peopleSvg}/>
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}