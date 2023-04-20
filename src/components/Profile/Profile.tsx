import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { showCurrentUser } from '../../store/authReducer';
import { AUTHORIZED_USER } from '../../constants/actions';
import { Loader } from '../Loader/Loader';
import { RootState } from '../../store/store';
import { checkCookie } from '../../utils/cookies';
import { User } from './User';

import './profile.scss';

const Profile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  console.log(user)

  useEffect(() => {
    setIsLoading(true);
    showCurrentUser().then(({ success, data }: any) => {
      if(success) {
        dispatch({ type: AUTHORIZED_USER, user: data });
      } else {
        checkCookie();
      }
      setIsLoading(false);
    });
  }, [dispatch]);
  
  return (
    <>
      { isLoading && <Loader /> }
      { user && <User user={user} /> }
    </>
  )
}

export default Profile;