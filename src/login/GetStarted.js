import { useState } from "react"
import { Link } from "react-router-dom"

function GetStarted(){

    const [popup, setPopup] = useState(false)

    const handlePopUp = () =>{

        setPopup(!popup)

    }
    const content = (
        <div>
            <button onClick={handlePopUp} className="text-black bg-red-400 p-2 m-2">Get Started</button>

            <section className={` w-full h-full fixed top-0 left-0 bg-color ${popup ? "block" : "hidden"}`}>
                <div className="bg-white sm:w-5/12 w-72 mx-auto text-black text-center z-10 py-4 px-2 sm:px-14 my-52">
                <button className="font-bold text-xl sm:text-sm relative left-28 sm:left-60 sm:bottom-4 bottom-3 " onClick={handlePopUp}>x</button>
                    <h1 className="uppercase font-bold text-xl">Create your Free account</h1>
                    <p className=" my-3 hidden sm:block" style={{fontSize:"12px"}}>Creating an account allows you to update information after submitting it and track your move in real-time. It takes less than 2 minutes to set up and this gives you more control.</p>
                    <p className=" my-3 block sm:hidden" style={{fontSize:"12px"}}>Creating an account allows you to update information after submitting it and track your move in real-time. It takes less than 2 minutes to set up and this gives you more control.</p>
                    <div className="inline-flex gap-2 my-4">
                    <button onClick={handlePopUp} className="bg-gray-400 py-2 sm:px-10 px-6 text-sm text-white font-bold" style={{fontSize:"10px"}}>NOT NOW</button>
                   
                    <Link to={'/login'}>
                    <button className="bg-red-600 py-2 sm:px-10 px-6 text-sm text-white font-bold" style={{fontSize:"10px"}}>CONTINUE</button>
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    )

    return (
        <section>
            {content}
        </section>
    )
}

export default GetStarted