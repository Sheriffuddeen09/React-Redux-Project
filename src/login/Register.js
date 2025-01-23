import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
//import axios from "../api/apiAxios"
import google from './image/googl.png'
import facebook from './image/Facebookl.png'
import amazon from './image/amazons.png'
import iphone from './image/iphonep.png'
import like from './image/likes.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%-]).{8,24}$/

const Register = () => {

    const REGISTER = '/register'
    const errRef = useRef()

     const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(true)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [matchFocus, setMatchFocus] = useState(false)
    const [validMatch, setValidMatch ] = useState(false)

    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    
    useEffect(() => {
       
    })

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName (result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg ('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = USER_REGEX.test
        const v2 = PWD_REGEX.test
        if(!v1 || !v2){
            setErrMsg('Invalid Entry')
            setUser('')
            setPwd('')
            setMatchPwd('')
            return
        }
        console.log(user, pwd, matchPwd)
        setSuccess(true)
        /*try{
            const response = await axios.post(REGISTER,
                JSON.stringify({user, pwd}),
               { headers:{ 'Content-Type':'application/json'}, 
               withCredential: true
            }
           
            )
            console.log(response.data)
            console.log(JSON.stringify(response))
            console.log(response.accessToken)
        }
        catch(err){
            if(!err?.response){
                setErrMsg('No server Response')
            }
            else if(err?.response.status === 409){
                setErrMsg('Username Taken')
            }
            else{
                setErrMsg('Registration failed')
            }
        }

*/
    }
    return (
        <>
        {
                success ?
                <section className="fixed bg-black top-0 left-0 w-full h-full">
                    <div className="bg-white sm:w-6/12 h-96 w-72 mx-auto text-black text-center z-10 py-10 sm:py-20 px-10 sm:px-14 my-32">
                    <img src={like} alt="imagelogo" className="mx-auto mb-10 p-2 border rounded-full" width={80} height={80} />
                    <h1 className="uppercase font-bold ">Account created successfully !</h1>
                    <p className=" my-3 block sm:hidden" style={{fontSize:"10px"}}>Creating an account allows you to update information after submitting it and track your move in real-time. It takes less than 2 minutes to set up and this gives you more control.</p>
                    <p className=" my-2 sm:block hidden font-bold" style={{fontSize:"8px"}}>You are ready to proceed for your free quote.</p>
                    <div className="inline-flex gap-2 my-4">
                    <Link to={'/login'}>
                    <button className="bg-red-500 py-1 px-8 text-sm text-white font-bold" style={{fontSize:"10px"}}>Proceed</button>
                    </Link>
                    </div>
                </div>
                </section>
                :
        <div className="flex flex-col text-black justify-center items-center my-8 sm:my-14">
            <h1 className="uppercase text-black text-xl font-bold"> Sign Up With</h1>
            <div className="bg-red-500 w-12 h-0.5 mt-1"></div>
            <div className="sm:block hidden"> 
            <div className="inline-flex items-center sm:gap-8 gap-4 my-6">
                <img src={iphone} alt="imagelogo" className="border rounded-full border-black p-1" width={40} height={10}/>
                <img src={facebook} alt="imagelogo" className="border rounded-full border-black p-1" width={40} height={40}/>
                <img src={amazon} alt="imagelogo" className="border rounded-full border-black p-1" width={40} height={40}/>
                <img src={google} alt="imagelogo" className="border rounded-full border-black p-1" width={40} height={40}/>
                </div>
            </div>
            <div className="block sm:hidden">
            <div className="inline-flex items-center sm:gap-8 gap-4 my-6">
                <img src={iphone} alt="imagelogo" className="border rounded-full border-black p-1" width={30} height={10}/>
                <img src={facebook} alt="imagelogo" className="border rounded-full border-black p-1" width={30} height={30}/>
                <img src={amazon} alt="imagelogo" className="border rounded-full border-black p-1" width={30} height={30}/>
                <img src={google} alt="imagelogo" className="border rounded-full border-black p-1" width={30} height={30}/>
            </div>
            </div>

            <div className="inline-flex gap-5 items-center">
            <div className="sm:w-40 w-28 bg-gray-400 h-0.5 "></div>
            <p>or</p>
            <div className="sm:w-40 w-28 bg-gray-400 h-0.5"></div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <label style={{fontSize:"11px"}} className="mb-2 mt-4">
                    Email<span className="text-red-500 font-bold">*</span> 
                </label>
                <input 
                className="sm:w-80 w-72 p-1 border-black border"
                type="text"
                id="username"
                required
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? "false" : "true"} 
                autoComplete="off"
                onFocus={() => setUserFocus (true)}
                onBlur={() => setUserFocus (false)}
                aria-describedby="uidnote"
                />
                
                < p className={`inline-flex gap-2 mt-2 -mb-3 ${validPwd | !pwd ? 'hidden' : 'block'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <div className="text-red-500" style={{fontSize:"11px"}}>
            Letters, numbers, underscores, hypens allowed
            </div>
            </p>

                <label style={{fontSize:"11px"}} className="mb-2 mt-4">
                    Password<span className="text-red-500 font-bold">*</span> 
                </label>
                <input className="sm:w-80 w-72 p-1 border-black border"
                id="password"
                type="password"
                required
                onChange={(e) => setPwd(e.target.value)}
                aria-invalid={validPwd ? "false" : "true"} 
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                aria-describedby="pwdnote"
                />
            < p className={`inline-flex gap-2 text-black mt-1 mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <div className="text-black" style={{fontSize:"11px"}}>
            password must be 8 digit long
            </div>
            </p>
                
                <label style={{fontSize:"11px"}} className="mb-2">
                    Repeat Password<span className="text-red-500 font-bold">*</span>
                </label>
                <input className="sm:w-80 w-72 p-1 border-black border"
                id="password"
                type="password"
                required
                onChange={(e) => setMatchPwd(e.target.value)}
                aria-invalid={validMatch ? 'false' : 'true'} 
                onFocus={() => setMatchFocus (true)}
                onBlur={() => setMatchFocus (false)}
                aria-describedby="confirmnote"
                />
                < p className={` mt-1 mb-6 text-black inline-flex gap-2 ${!validMatch && matchPwd && matchFocus ? 'block' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <div className="" style={{fontSize:"11px"}}>
               Must match the password         
               </div>   
             </p>
             <hr className="block sm:hidden mt-10 mb-6" />
            <button className="w-72 sm:w-80 bg-red-500 p-1 text-white mx-auto ">Create Account</button>
            </form>
        </div>
        }
    </>
    )
}
export default Register