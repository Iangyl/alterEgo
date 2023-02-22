import { useState, useCallback, useEffect } from 'react';

import IUser from 'lib/IUsers.types';
import { userAPI } from 'utils/constants';

const useGetUser = (userId: number) => {
  const [user, setUser] = useState<IUser>();

  const getUser = useCallback(async () => {
    try {
      const response = await fetch(`${userAPI}/${userId}`);
      const result = await response.json();

      setUser(result);
    } catch (error: unknown) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return user;
};

export default useGetUser;
