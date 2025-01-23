import { useState } from "react"
import Suggestion from "./Suggestion"
import Friend from "./Friend"
import AddFriend from "./AddFriend"

function HomeFriend (){

    const [toggle, setToggle] = useState(1)

    const handleToggle = (id) =>{
        setToggle(id)
    }
    return (
        <section className="inline-flex sm:gap-10 gap-2 text-black cursor-pointer sm:p-4 mt-28 sm:mt-20">

            <div>
            <p onClick={() => handleToggle(1)} className={`sm:text-2xl hover:bg-[#dedee0] text-center sm:w-full rounded-3xl sm:px-5 text-sm py-1 sm:m-4 w-28 m-2 font-bold ${toggle === 1 ? "blue" : "none"}`}>Suggestion</p>
            <p onClick={() => handleToggle(2)} className={`sm:text-2xl hover:bg-[#dedee0] text-center sm:w-full rounded-3xl sm:px-5 text-sm py-1 sm:m-4 w-28 m-2 font-bold  ${toggle === 2 ? "blue" : "none"}`}>Friends</p>
            <p onClick={() => handleToggle(3)} className={`sm:text-2xl hover:bg-[#dedee0] text-center sm:w-full rounded-3xl sm:px-5 text-sm py-1 sm:m-4 w-28 m-2 font-bold  ${toggle === 3 ? "blue" : "none"}`}>Confirmed</p>
            </div>
            <div>
                <div className={` ${toggle === 1 ?  "block" : "hidden"}`}>
                <Suggestion />
                </div>
                <div className={` ${toggle === 2 ?  "block" : "hidden"}`}>
                <Friend />
                </div>
                <div className={` ${toggle === 3 ?  "block" : "hidden"}`}>
                <AddFriend />
                </div>
            </div>

        </section>
    )
}

export default HomeFriend