import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Column, Text } from 'src/components';

const Example: React.FC = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);

  const fetchUser = async () => {
    const { data } = await axios.get('/users');
    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      {users.map(({ name }) => (
        <Text>{name}</Text>
      ))}
    </Column>
  );
};

export default Example;
