import { Outlet, useNavigate } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  const navigate = useNavigate();

  const onTitleClickHandler = () => {
    navigate("/");
  };
  return (
    <div className="navigation">
      <div className="header">
        <div className="header__title" onClick={onTitleClickHandler}>
          Where in the world?
        </div>
        <div className="header__dark-mode">
          <span>
            <ion-icon name="moon-outline"></ion-icon>
          </span>
          Dark Mode
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
