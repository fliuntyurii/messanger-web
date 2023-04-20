import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from "../Navbar/Navbar";
import { Header } from '../Navbar/Header';
import { DIALOGUES, SETTINGS, USERS } from '../../constants/navigation';
import { DialoguesList } from '../Dialogue/DialoguesList';
import Profile from'../Profile/Profile';
import Users from './Users';

import './home.scss';
import { RootState } from '../../store/store';

export const Home = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState<string>(DIALOGUES);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <Header
        currentPage={currentPage}
      />
      <div className='home-page'>
        { 
          currentPage === USERS && <Users />
        }
        {
          currentPage === DIALOGUES && <DialoguesList />
        } 
        { 
          currentPage === SETTINGS && <Profile />
        }
      </div>     
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}