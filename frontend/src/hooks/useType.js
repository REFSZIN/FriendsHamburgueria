import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default function useType() {
  const { userData: user } = useContext(UserContext);

  return user.type;
}
