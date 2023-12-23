import useLocalStorage from './localStorage';


const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };


  return (
    <div className='light-dark-theme'  data-theme={theme}>
      <button className='btn-theme' onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeChanger;