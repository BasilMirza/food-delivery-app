import React, { useEffect } from 'react';
import logout from '../utilities/utility';
import {useHistory} from 'react-router-dom'

export default function Logout() {
  let history = useHistory();
  useEffect(() => {
    history.push('/signup')
    logout();
  }, []);
  return <div></div>;
}
