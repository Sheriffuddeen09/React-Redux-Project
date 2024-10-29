import { Link, useLocation } from "react-router-dom";
import logo from '../image/image.jpg'
import logoshe from '../image/logoshe.png'
import islam from '../image/islam.jpg'
import Ayat from '../image/dua.jpg'
import switc from '../image/gg.jpg'
import { useState } from "react";


function Header(){

    const [account, setAccount] = useState(false)
    const [accounts, setAccounts] = useState(false)
    const [page, setPage] = useState(false)
    const [switche, setSwitche] = useState(false)
    const homepage = useLocation().pathname

    const handleAccount = () =>{
        setAccount(!account)
    }

    const handlePage = () =>{
        setPage(!page)
    }

    const handleAccounts = () =>{
        setAccounts(!accounts)
    }
    const handleSwitchs = () =>{
        setSwitche(!switche)
    }
    
    return (
        <header className="bg-white shadow-md py-2 z-10 top-0 mb-20 fixed w-full">
            <nav className="flex  justify-between px-3 sm:flex-nowrap flex-wrap items-center">
                <div className="sm:block hidden" >
            <div className="inline-flex gap-2">
                <img src={logoshe} alt="imagelogo" width={40} height={40} />
                <input placeholder="Search Facebook" className="w-72 rounded-3xl py-2 px-4 hidden lg:block text-black bg-gray-100"/>
                <p className="bg-[#dedee0] p-1 rounded-full lg:hidden hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-black size-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                </p>
                </div>
            </div>
            <div className="block sm:hidden">
                <div className="flex gap-20 flex-row items-center">
                <h1 className="text-blue-500 font-bold text-2xl">SheriffPortfilo</h1>
                <div className="inline-flex gap-2">
                <p className="bg-[#dedee0] p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </p>
                <p className="bg-[#dedee0] p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-black size-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </p>
                <p className="bg-[#dedee0] p-1 rounded-full" onClick={handleAccounts}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </p>
                </div>
            </div>
            </div>
            <div className="sm:block hidden" >
            <div className="inline-flex lg:gap-4 md:gap-0 md:translate-x-8 translate-x-0 lg:translate-x-0  ">
            <Link to={'/'} className={`hover:bg-[#dedee0] py-2 px-10 rounded-2xl icon-hover ${homepage === '/' ? "home" : "none"}`}>
            <p className="hover-menu"> Home </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </Link>
            <Link to={'/video'} className={`hover:bg-[#dedee0] py-2 px-10 rounded-2xl icon-hover ${homepage === '/video' ? "video" : "none"}`}>
            <p className="hover-menu"> Video </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 border rounded-xl text-black border-black border-2 p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            </Link>
            <Link to={'/market'} className={`hover:bg-[#dedee0] py-2 px-10 rounded-2xl icon-hover ${homepage === '/market' ? "market" : "none"}`}>
            <p className="hover-menu"> Market </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </Link>
            <Link to={'/group'} className={`hover:bg-[#dedee0] py-2 px-10 rounded-2xl icon-hover ${homepage === '/group' ? "group" : "none"}`}>
            <p className="hover-menu"> Group </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
           </Link>

            </div>
            </div>
            <div className="sm:block hidden" >
            <div className="inline-flex gap-1  items-center">
            <Link to={'/menu'} className={`hover:bg-[#dedee0] h-11 p-2 rounded-2xl icon-hover ${homepage === '/menu' ? "menus" : "none"}`}>
            <p className="hover-menus"> Menu </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>

            </Link>
            <Link to={'/message'} className={`hover:bg-[#dedee0] h-11 p-2 rounded-2xl icon-hover ${homepage === '/message' ? "message" : "none"}`}>
            <p className="hover-menus"> Messenger </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>

            </Link>
            <Link to={'notify'} className={`hover:bg-[#dedee0] h-11 p-2 rounded-2xl icon-hover ${homepage === '/notify' ? "notify" : "none"}`}>
            <p className="hover-menus"> Nofications </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>

            </Link>
            <div onClick={handleAccount} className="hover:bg-[#dedee0] h-9 p- rounded-2xl icon-hover">
            <p className="hover-menus"> Account </p>
            <img src={logo} alt="logo" width={40} height={40} className="border rounded-full" />
            <svg onClick={handleAccount} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-black translate-x-6 bg-[#dedee0] rounded-full -translate-y-2 font-bold">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

           </div>
            </div>
            </div>
            <div className="sm:hidden block">
            <div className="inline-flex gap-10 my-3 items-center">
            <Link to={'/'} className={` ${homepage === '/' ? "homes" : "nones"}`}>
            <p className="hover-menu"> Home </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </Link>
            <Link to={'/friend'} className={` ${homepage === '/friend' ? "friends" : "nones"}`}>
            <p className="hover-menu"> Friend </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

           </Link>

            <Link to={'/message'} className={` ${homepage === '/message' ? "messages" : "nones"}`}>
            <p className="hover-menus"> Messenger </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>

            </Link>
            <Link to={'notify'} className={`${homepage === '/notify' ? "notifys" : "nones"}`}>
            <p className="hover-menus"> Nofications </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>

            </Link>
            <Link to={'/video'} className={` ${homepage === '/videos' ? "video" : "nones"}`}>
            <p className="hover-menu"> Video </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 border rounded-xl border-black border-2 p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            </Link>
            <Link to={'/market'} className={` ${homepage === '/markets' ? "market" : "nones"}`}>
            <p className="hover-menu"> Market </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </Link>
            </div>
                
            </div>
            </nav>
            <section style={{height:"530px",
                
            }} className={`bg-white text-black p-2 w-96 z-10 shadow-md fixed top-20 right-3 flex flex-col rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-300  scrollbar-thin scrollbar-track-white ${account ? "block" : "hidden"}`}>
            <div className="bg-white text-black mb-3 p-2 h-72 z-10 shadow-md h-52 rounded-xl" style={{width:"350px"}}>
                <div className="inline-flex items-center my-2 hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={logo} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"15px"}}className="capitalize font-bold">Sheriffudden Olawale Love</p>
                </div>
                <hr className="my-2" />
                <div className="inline-flex gap-4 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={islam} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Knowledge about islam</p>
                </div>
                <div className="inline-flex gap-4 items-center mt-1 hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={Ayat} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Quran course</p>
                </div>
                <hr className="my-2" />
                <Link to={'/users'}  className="flex hover:bg-[#dedee0] bg-gray-200 text-center mx-auto justify-center py-1 px-5 w-full rounded-xl  gap-3 bg items-center my"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
 See all profiles</Link>
            </div>
            <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

                    <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">settings & privacy</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Help & support</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
            
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
             <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Display & accessibility</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
            
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
              <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Give Feedback</p>
            </div>
            </div>
        
            <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
            </svg>
            <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">logout</p>
            </div>
            </div>
            <p className="px-5" style={{fontSize:"13px"}}>Privacy  · Terms  · Advertising  · Ad Choices  ·<br />  Cookies  ·   · Meta © 2024</p>
            
            </section>


            <section className={`bg-gray-200 h-full text-black p-2 w-96 z-10 shadow-md fixed top-0 right-0 flex flex-col rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-300  scrollbar-thin scrollbar-track-white ${accounts ? "block" : "hidden"}`}>
            <div>
                <div className="flex mx-auto hover:bg-[#dedee0] bg-white mx-auto py-1 px-3 rounded-xl w-80 gap-6 items-center ">               
                     <div className="inline-flex items-center hover:bg-[#dedee0] py-1 px-2 gap-2 w-full rounded-xl">
                    <img src={logo} width={40} height={40} alt="logo" className="border rounded-full" />
                    <div>
                    <p style={{fontSize:"15px"}}className="capitalize font-bold">Sheriffudden Olawale Love</p>
                    <p>View your profile</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 bg-[#dedee0] rounded-full" onClick={handlePage}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

                </div>

                <div className="flex mx-auto hover:bg-[#dedee0] bg-white my-3 mx-auto py-1 px-3 rounded-xl w-80 gap-6 items-center ">               
                     <div className="inline-flex items-center hover:bg-[#dedee0] py-1 px-2 gap-2 w-full rounded-xl">
                    <img src={switc} width={30} height={30} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"15px"}}className="capitalize">Switch account</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 bg-[#dedee0] rounded-full" onClick={handleSwitchs}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

                </div>
                           
                     <div className="flex hover:bg-[#dedee0] bg-white my-3 mx-auto py-1 px-3 rounded-xl w-80 items-center hover:bg-[#dedee0] py-2 px-2 gap-2 rounded-xl">
                   ❤️
                    <p style={{fontSize:"15px"}}className="capitalize">Invite friends</p>
                </div>
            </div>
            <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

                    <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">settings & privacy</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Help & support</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
            
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
             <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Display & accessibility</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>
            
                <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
              <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Give Feedback</p>
            </div>
            </div>
        
            <div className="flex-row justify-between flex items-center hover:bg-[#dedee0] py-2 px-5 w-full rounded-xl">
            <div className="inline-flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8  rounded-full bg-[#dedee0] p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
            </svg>
            <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">logout</p>
            </div>
            </div>
            <p className="px-5" style={{fontSize:"13px"}}>Privacy  · Terms  · Advertising  · Ad Choices  ·<br />  Cookies  ·   · Meta © 2024</p>
            
            </section>
            <section onClick={handlePage} className={`bg-gray h-full text-black p-2 w-96 z-10 shadow-md fixed top-0 right-0 flex flex-col rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-300  scrollbar-thin scrollbar-track-white ${page ? "block" : "hidden"}`}>
            <div className="bg-white text-black mb-3 p-2 h-96 z-10 shadow-md mx-auto translate-y-80 rounded-xl" style={{width:"350px"}}>
                <h1 className="font-bold my-6 text-center mt-6">Your Pages and profiles</h1>
                <hr className="mb-4"/>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={logo} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"17px"}}className="capitalize font-bold">Sheriffale Love</p>
                </div>
                <input className="-translate-x-4 border rounded-full" type="checkbox" />
                </div>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={islam} width={40} height={40} alt="logo" className="border rounded-full" />
                    <div>
                    <p style={{fontSize:"17px"}}className="hover:bg-[#dedee0] capitalize">Knowledge about islam</p>
                    <p className="inline-flex items-center gap-1"><div className="bg-blue-500 w-2 h-2 rounded-full"></div> 5 nofications</p>
                    </div>
                </div>
                <input className="-translate-x-4 border rounded-full" type="checkbox" />
                </div>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={Ayat} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"17px"}}className="hover:bg-[#dedee0] capitalize">Quran course</p>
                </div>
                <input className="-translate-x-4 border rounded-full" type="checkbox" />
                </div>
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-[#dedee0] p-1 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                    <p style={{fontSize:"17px"}}className="hover:bg-[#dedee0] capitalize">create new profile</p>
                </div>
                </div>
                </section>

                <section onClick={handleSwitchs} className={`bg-gray h-full text-black p-2 w-96 z-10 shadow-md fixed top-0 right-0 flex flex-col rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-300  scrollbar-thin scrollbar-track-white ${switche ? "block" : "hidden"}`}>
            <div className="bg-white text-black mb-3 p-2 h-96 z-10 shadow-md mx-auto translate-y-80 rounded-xl" style={{width:"350px"}}>
                <h1 className="font-bold my-6 text-center mt-6">Switch Your Account</h1>
                <hr className="mb-4"/>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={islam} width={40} height={40} alt="logo" className="border rounded-full" />
                    <div>
                    <p style={{fontSize:"17px"}}className="hover:bg-[#dedee0] capitalize">Instagram Lite</p>
                    <p className="inline-flex items-center gap-1">Explore things you love</p>
                    </div>
                </div>
                <p className="bg-gray-200 font-bold rounded-lg py-1 px-4 text-black -translate-x-3"> Get </p>
                </div>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={logo} width={40} height={40} alt="logo" className="border rounded-full" />
                    <p style={{fontSize:"19px"}}className="capitalize">Sheriffudden Olawale Love</p>
                </div>
                <p className="-translate-x-3"> Logged_in </p>
                </div>
                <div className="flex-row flex items-center my-2 ">
                <div className="inline-flex gap-2 items-center hover:bg-[#dedee0] py-1 px-5 w-full rounded-xl">
                    <img src={islam} width={40} height={40} alt="logo" className="border rounded-full" />
                    <div>
                    <p style={{fontSize:"18px"}}className="hover:bg-[#dedee0] capitalize">Ibn Muhammad Islam Sunny</p>
                    <p className="inline-flex items-center gap-1"><div className="bg-blue-500 w-2 h-2 rounded-full"></div> 5 nofications</p>
                    </div>
                </div>
                <p className="bg-blue-200 font-bold rounded-lg py-1 px-3 text-blue-600 -translate-x-3"> Log_in </p>
                </div>
                </div>
                </section>
        </header>
    )
}
export default Header

