import { Outlet } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="header">
        <div className="header__title">Where in the world?</div>
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
