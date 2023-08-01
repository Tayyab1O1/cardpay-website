'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const navBar = ({ navColor }) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const redirectToAboutUs = () => {
        router.push('/aboutUs');
    }

    const dashboard = () => {
        router.push('/');
    }

    const redirectToOurTeam = () => {
        router.push('/ourTeam');
    }

    const [sticky, setSticky] = useState(false);
    const [navBgColor, setNavBgColor] = useState(navColor);
    const [shadow, setShadow] = useState('shadow-sm');
    const [padding,setPadding] = useState(4);

    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
            setNavBgColor('white');
            setShadow('shadow-md');
            setPadding('p-4');
        } else {
            setSticky(false);
            setNavBgColor(navColor);
            console.log(navColor);
            setShadow('shadow-sm');
            setPadding(6);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
        return () => {
            window.removeEventListener("scroll", handleStickyNavbar);
        };
    }, []);


    return (
        <div className={`sticky top-0 z-50 bg-${navBgColor}`}>
            <div className={`navbar ${shadow} px-2 text-black lg:hidden`}>
                <div className="grid grid-cols-3 items-center">
                    <img src='./assets/logo.svg' style={{ maxWidth: '35%', height: 'auto' }} ></img>
                    <div onClick={dashboard} className="text-2xl items-center font-bold text-blue-800 mx-auto p-2 ">
                        <a>CardPay</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }} className={`dropdown dropdown-bottom dropdown-end items-center ${isOpen ? 'open' : ''}  `}>
                        <label tabIndex={0} className="btn btn-square btn-ghost" onClick={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </label>
                        {isOpen && (
                            <ul tabIndex={0} className="text-black dropdown-content z-[1] menu p-2 shadow-sm bg-white w-max rounded-md mt-2 ">
                                <li onClick={redirectToAboutUs}><a className="text-lg">About us</a></li>
                                <hr />
                                <li onClick={redirectToOurTeam}><a className="text-lg">Meet our Team</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Large Screen Size */}
            <div className={`navbar ${shadow} ${padding}  justify-center text-black hidden lg:flex lg:flex-row`}>
                <img src='./assets/logo.svg' className="h-8"></img>
                <div onClick={dashboard} className="text-2xl  mr-16 items-center font-medium text-blue-800 p-2 ">
                    <a>CardPay</a>
                </div>
                <div className="space-x-8">
                    <button className="btn btn-ghost font-normal " onClick={redirectToAboutUs}><a className="text-base font-nunito">About us ➡️</a></button>
                    <button className="btn btn-ghost font-normal " onClick={redirectToOurTeam}><a className="text-base font-nunito">Meet our Team ➡️</a></button>
                    {/* <button className="btn btn-ghost font-normal " onClick={redirectToAboutUs}><a className="text-base font-serif">Signing up ➡️</a></button> */}
                </div>
            </div>

        </div>
    )



};

export default navBar;