import { UserOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { MAIN_COLOR } from '../../constants/colors';
import { DIALOGUES, SETTINGS, USERS } from '../../constants/navigation';

import './navbar.scss'

type Props = {
  currentPage: string;
  setCurrentPage: (value: string) => void;
}

export const Navbar = ({ currentPage, setCurrentPage }: Props) => {

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-option">
          <UserOutlined 
            onClick={() => setCurrentPage(USERS)}
            style={{ 
              color: `${ currentPage === USERS ? MAIN_COLOR : '' }`,
              fontSize: '1.6em'
            }} 
          />
        </div>

        <div className="navbar-option">
          <MessageOutlined
            onClick={() => setCurrentPage(DIALOGUES)}
            style={{ 
              color: `${ currentPage === DIALOGUES ? MAIN_COLOR : '' }`,
              fontSize: '1.6em'
            }} 
          />
        </div>

        <div className="navbar-option">
          <SettingOutlined
            onClick={() => setCurrentPage(SETTINGS)}
            style={{ 
              color: `${ currentPage === SETTINGS ? MAIN_COLOR : '' }`,
              fontSize: '1.6em'
            }} 
          />
        </div>
      </div>
    </div>
  );
}