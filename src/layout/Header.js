import { Link } from "react-router-dom";

function Header(){

    return (
        <header className="bg-[#282c30] shadow-md p-4">
            <nav className="flex  justify-around items-center">
            <Link to={'/'}><h1 className="text-4xl font-bold">Redux Project </h1></Link>
                <span className="inline-flex gap-8">
                    <Link to={'/'}><p className="post">Home</p></Link>
                    <Link to={'/post'}><p className="home">Post</p></Link>
                    <Link to={'/user'}><p className="user">Users</p></Link>
                </span>
            </nav>
        </header>
    )
}
export default Header