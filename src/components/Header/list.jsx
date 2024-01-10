import { Link } from "react-router-dom"
import style from './assets/css/style.module.css'
import { useState } from "react";

export default function List({props}) {

    const [hover, setHover] = useState(false);

    const active = () => {
      setHover(true);
    };
  
    const deactive = () => {
      setHover(false);
    };
  
    const getTextColor = () => {
      if (hover) {
        return "#FF8303";
      } else {
        if (props.listSelect) {
          return "#FF8303";
        } else {
          return "#fff ";
        }
      }
    };

    return (
        <>
            <li className={style.hiddenText}>
                <Link  
                  className={style.link}
                  onMouseEnter={active}
                  onMouseLeave={deactive}
                  to={props.nav.next}
                  style={{color: getTextColor()}}>
                  {props.nav.pages}
                </Link>
            </li>
        </>
    )
}