import {memo, useState} from 'react'
import "./style.scss";
import {AiOutlineUser,AiOutlineTwitter,AiTwotoneStar,
    AiOutlineMail,AiTwotoneCar,AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/Router/router";

const Header = () => {
    const [menus,setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.pages.home,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.pages.product,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name:"Đồng hồ 1",
                    path:"",
                },
                {
                    name:"Đồng hồ 2",
                    path:"",
                },
                {
                    name:"Đồng hồ 3",
                    path:"",
                },
                {
                    name:"Đồng hồ 4",
                    path:"",
                }
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        }
    ])
    return (
        <>
        <div className="header__top">

            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />watchstore@gmail.com
                            </li>
                            <li>
                                <AiTwotoneCar />Free ship trên toàn quốc
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">

                        <ul>

                            <li>
                                <Link to={"#"}><AiOutlineTwitter /></Link>
                            </li>
                            <li>
                                <Link to={"#"}><AiTwotoneStar/></Link>
                            </li>
                            <li>
                                <Link to={"#"}><AiOutlineUser/></Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3">
                    <div className="header__logo">
                        <h1>WATCH STORE</h1>
                    </div>
                </div>
                <div className="col-xl-3 col-xl-6">
                    <div className="header__menu">
                        <ul>
                            {menus?.map((menus,menuKey) => (
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menus?.path}>{menus?.name}</Link>
                                    {
                                        menus.child && (
                                            <ul className="header__menu__dropdown">
                                                {
                                                    menus.child.map((childItem,childKey) => (
                                                        <li key={'$(menuKey)-$(childKey)'}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        )
                                    }
                                </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li>
                                <Link to="#"><AiOutlineShoppingCart/>
                                    <span>0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default memo(Header);