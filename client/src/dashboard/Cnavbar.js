import React, { useState } from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import Customlink from '../components/Customlink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faHouseChimney } from '@fortawesome/free-solid-svg-icons'
const Cnavbar = ({ to, title }) => {
  const n_Array = [
    {
      link: "home",
      name: "হোম",
      icon:"house-chimney"
    },
    {
      link: "articles",
      name: "প্রবন্ধ",
      icon:"file-signature"
    },
    {
      link: "videos",
      name: "ভিডিও",
      icon:"video"
    },
    {
      link: "books",
      name: "বই",
      icon:"book"
    },
    {
      link: "contact",
      name: "যোগাযোগ",
      icon:"envelope"
    },
  ];
  const myIcons = {
    google: faHouseChimney
  }
  const example = 'google';
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
    // let resolved = useResolvedPath(to);
    // let match = useMatch({ path: resolved.pathname, end: true });
  

  return (
    <>
     <div className="navbar border-b-2 border-[#ffffff] drop-shadow-[#373737_1px_-4px_7px_0px] h-[70px] md:h-[70px] text-[20px] text-[#40464e] bg-[#ffffff] font-[500]">
        <div className="nav_content md:flex justify-between px-[30px] md:px-[80px] items-center h-full">
          <div className="logo flex justify-between items-center h-[70px]">
            <div
              className="cursor-pointer hamburger_icon md:hidden"
              onClick={handleClick}
            >
              <p>&#9776;</p>
            </div>
            <div className="logo_img ">
              
              <Link to="/admin">
                <p>আহমাদুল্লাহ সৈয়দপুরী</p>
              </Link>
            </div>
          </div>
          <div
            className={
              click
                ? "block absolute z-40 left-0 right-0 top-0 bottom-0  md:relative  "
                : "hidden md:block"
            }
          >
            <div className="flex nav_c">
              <ul className="bg-[#ffffff] md:bg-transparent w-[70%]  ">
                <div className="n_lists md:flex md:justify-around md:w-[400px]">
                <p className="bg-[#260e4c] p-[58px_23px] text-[#ffffff] md:hidden after:content-[''] after:bg-[#ffffff] after:absolute after:top-[88px] after:left-[22px] after:w-[85px] after:h-[4px] after:rounded-[5px]">আহমাদুল্লাহ সৈয়দপুরী</p>
                  {n_Array.map((item) => {
                    return (
                      <>
                        <Customlink to={item.link}>
                          <li
                            onClick={handleClick}
                            className={`py-[10px] border-b-2 border-[#efefef] md:border-none flex items-center `}
                          >
                            <span className="p-[10px] md:hidden "><FontAwesomeIcon icon={['fas', item.icon]}/></span>
                            <span>{item.name}</span>
                            
                          </li>
                        </Customlink>
                      </>
                    );
                  })}
                </div>
              </ul>
              <div
                onClick={handleClick}
                className="w-[30%] h-[100vh] blur_div bg-[#afafaf] opacity-25 md:hidden"
              ></div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Cnavbar;
