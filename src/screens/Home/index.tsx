import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
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

export function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO>([]);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {
      car
    })
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        if(isMounted){
          setCars(response.data);
        }
      } catch (error) {
        console.log(error)
      }finally{
        if(isMounted){
          setLoading(false);
        }
      }
    }

    fetchCars();
    return () => {
      isMounted = false;
    };
  },[]);

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
        <CarList 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Car data={item} onPress={() => handleCarDetails(item)}/>
          }    
        />
      }
    </Container>
  );
}