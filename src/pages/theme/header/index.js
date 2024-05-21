import { memo } from 'react'
import "./style.scss";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={"#"}><AiOutlineUser /></Link>
                                <span>Login</span>
                            </li>
                            <li>
                                a
                            </li>
                            <li>
                                a
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default memo(Header);