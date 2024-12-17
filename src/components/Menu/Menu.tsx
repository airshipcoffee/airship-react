import { FC } from "react";

import Styles from "./Menu.module.scss";

interface MenuProps {
  items: {
    text: string;
  }[];
}

export const Menu: FC<MenuProps> = ({ items }) => (
  <nav className={Styles.menu}>
    <ul>
      {items.map((item) => (
        <li>
          <a href="#">{item.text}</a>
        </li>
      ))}
    </ul>
  </nav>
);
