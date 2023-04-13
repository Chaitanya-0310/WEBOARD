import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import {BiBell} from 'react-icons/bi';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import useDarkMode from '../../hooks/useDarkMode';


const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      
      
      <Search />
       <Title />
      <ThemeIcon />
      <Question/>
      <BellIcon />
      <UserCircle />
     
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon'  />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const Search = () => (
  <div className='search'>
    <FaSearch size='18' className='text-secondary' />
    <input className='search-input ml-2' type='text' placeholder='Search Board' />
  </div>
);
const BellIcon = () => <BiBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='36' className='top-navigation-icon' />;
const Question = () => <AiOutlineQuestionCircle size='24' className='top-navigation-icon' />;
const Title = () => <h5 className='title-text '></h5>;






export default TopNavigation;
