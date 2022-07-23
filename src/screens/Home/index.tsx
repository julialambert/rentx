import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO>([]);
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any){
      ctx.positionX = positionX.value;
    },
    onActive(event, ctx: any){
      positionX.value = event.translationX + event.translationX;
      positionY.value = event.translationY + event.translationY;
    },
    onEnd(){
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {
      car
    })
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }

    fetchCars()
  },[]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    })
  },[])

  return (
    <Container>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='trasparent' 
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          
          {!loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
          
        </HeaderContent>  
      </Header>
      {loading ? <LoadAnimation /> : 
        <>
          <CarList 
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => 
              <Car data={item} onPress={() => handleCarDetails(item)}/>
            }    
          />

          <PanGestureHandler
            onGestureEvent={onGestureEvent}
          >
            <Animated.View
              style={[
                myCarsButtonStyle,
                {
                  position: 'absolute',
                  bottom: 13,
                  right: 22
                }
              ]}
            >
              <ButtonAnimated 
                style={[styles.button, { backgroundColor: theme.colors.main }]}
                onPress={handleOpenMyCars}
              >
                <Ionicons 
                  name='ios-car-sport' 
                  size={32} 
                  color={theme.colors.shape}
                />
              </ButtonAnimated>
            </Animated.View>
          </PanGestureHandler>
        </> 
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})