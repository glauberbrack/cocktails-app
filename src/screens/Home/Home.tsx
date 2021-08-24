import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import store from 'src/stores';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Column, Row, Text } from 'src/components';

const Home: React.FC = () => {
  const { colors } = useTheme();

  const fetchDrinks = async () => {
    await store.drinks.fetchDrinks();
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <Column alignItems='center' flex={1} justifyContent='center' mt={50} p='16px'>
      <Row alignItems='center' mb='10px'>
        <Text color={colors.primary} mr={2}>
          App Cocktails
        </Text>
        <Icon name='rocket' size={24} color={colors.primary} />
      </Row>

      <ScrollView>
        {store.drinks.drinks.map(({ strDrink }) => (
          <Text color={colors.primary}>{strDrink}</Text>
        ))}
      </ScrollView>
    </Column>
  );
};

export default observer(Home);
