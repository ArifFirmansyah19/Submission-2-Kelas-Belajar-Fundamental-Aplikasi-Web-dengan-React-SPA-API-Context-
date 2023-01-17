import React from "react";
import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { FiLogOut, FiHome, FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import {LocaleConsumer} from '../contexts/LocaleContext'

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
    {
      ({ locale, toggleLocale}) => {
        return (
          <nav className="navigation">
            <ul>
            <li>
                <Link to="/">
                    <FiHome />
                </Link>
            </li>
            <li>
                <Link to="/add">
                    <FiPlusCircle />
                </Link>
            </li>
              <li>
                <button onClick={toggleLocale} className='change-language'>
                  {locale === "id" ? "en" : "id"}
                </button>
              </li>
              <li>
                <ToggleTheme />
              </li>
              <li>
                <button onClick={logout} className="button-logout">
                  {name} <FiLogOut />
                </button>
              </li>
            </ul>
          </nav>
           );
          }
        }
      </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;



