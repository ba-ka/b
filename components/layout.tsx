import Head from 'next/head';
import React from 'react';
import BannerSecond from './banner_second';
import Banner from './banner'
import Link from 'next/link';
import { useEffect, useState } from "react"

export default function Layout({ children, home, title}: { children: React.ReactNode, home?: boolean, title?: string}) {
    const [headerDown, setHeaderDown] = useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);

    function openHeader() {
        if (headerOpen) {
            setHeaderOpen(false);
        } else setHeaderOpen(true);
    }

    function getYear() {
        const time_right_now = Date.now();
        const current_date = new Date(time_right_now);
        const year_right_now = current_date.getFullYear();

        return year_right_now;
    }

    useEffect(() => {
        function checkScroll() {
            if (window.scrollY > 20) {
                setHeaderDown(true);
            } else setHeaderDown(false);
        }

        const listener = () => {
            checkScroll();
        };

        checkScroll();
        window.addEventListener("scroll", listener);
        
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    const menuItems = [
        { title: "home", url: "/" },
        { title: "games", url: "/games" },
        { title: "works", url: "/works" },
        { title: "contact", url: "/contact" }
    ]
    
    return (
        <div className="font-mono">
            <Head>
                {title
                    ? <title>{title} - bakahu</title>
                    : <title>bakahu</title>
                }
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={`fixed w-full px-6 sm:px-0 z-50 header-section duration-200 drop-shadow ${(headerDown || headerOpen) && "bg-gray-50"}`}>
                <nav className="flex items-center justify-between flex-wrap py-3 z-10 top-0 sm:container sm:mx-auto">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <Link href="/">
                        <a className="no-underline">
                            <span className={`text-2xl ${(headerDown || headerOpen) ? "text-gray" : "text-white"}`}><img className="inline h-4" src="/logo.png" /> bakahu</span>
                        </a>
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle" onClick={openHeader} className="flex items-center py-2 text-gray-200 border-gray-200 hover:text-white hover:border-white">
                        <div className={`${headerOpen ? "relative h-[14px] w-[32px]" : ""}`}>
                            <span className={`${headerOpen ? "absolute right-0 top-1 rotate-45" : "block"} w-8 h-0.5 ${(headerDown || headerOpen) ? "bg-gray-900" : "bg-gray-50"} duration-150`}></span>
                            <span className={`${headerOpen ? "absolute right-0 top-1 -rotate-45" : "block mt-[5px]"}  w-8 h-0.5 ${(headerDown || headerOpen) ? "bg-gray-900" : "bg-gray-50"} duration-150`}></span>
                            <span className={`${headerOpen ? "absolute hidden" : "block mt-[5px]"} w-5 h-0.5 ${(headerDown || headerOpen) ? "bg-gray-900" : "bg-gray-50"} duration-150`}></span>
                        </div>
                    </button>
                </div>

                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!headerOpen && "hidden"} pt-6 lg:pt-0`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    {menuItems?.map((item) => (
                        <li className="lg:mr-3" key={item?.title}>
                        <Link href={item?.url}>
                            <a className={`block lg:inline-block text-right lg:text-left no-underline py-2 px-4 ${(headerDown || headerOpen) ? "text-gray-900" : "text-gray-50"}`}>
                            {item?.title}
                            </a>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </nav>
            </header>

            {home
            ? <Banner/>
            : <BannerSecond title={title}/>
            }
            
            <main>{children}</main>

            <footer className="flex w-full items-center justify-center py-6">
                &copy; { getYear() } bakahu, powered by&nbsp;
                <a className="flex items-center justify-center gap-2" href="https://ba-ka.org/" target="_blank" rel="noopener noreferrer">
                ba-ka
                </a>
            </footer>
        </div>
    )
}