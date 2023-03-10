import { Outlet, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

import './navigation.styles.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.ui.loading);
  const theme = useSelector((state) => state.ui.theme);

  const onTitleClickHandler = () => {
    navigate('/');
  };

  const onChangeThemeHandler = () => {
    dispatch(uiActions.toggleTheme());
    document.body.setAttribute('data-theme', theme);
  };

  return (
    <div className="navigation">
      {loading || (
        <div className="header">
          <div className="header__container">
            <div className="header__container__title" onClick={onTitleClickHandler}>
              Where in the world?
            </div>

            <div className="header__container__dark-mode" onClick={onChangeThemeHandler}>
              <span>
                {theme === 'light' ? (
                  <ion-icon name="sunny"></ion-icon>
                ) : (
                  <ion-icon name="moon"></ion-icon>
                )}
              </span>
              {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Navigation;
