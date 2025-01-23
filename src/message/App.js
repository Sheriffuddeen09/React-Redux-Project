import moment from 'moment'
import { Lists } from './blogpost/Posts'
import './media.css'
import BlogPage from "./blogpost/BlogPage"
import { Route, Routes } from "react-router-dom"
import { orderlists } from './order/component/PostOrder'
import Header from "./Header"
import { userList } from './userpage/UserPost'
import SkeletonPost from "./skeleton/SkeletonPost"
import Home from "./Home"
import BlogPost from "./BlogPost"
import { useState, useEffect } from "react"
import EditPost from './blogpost/EditPost'
import BlogPageVideo from './blogvideo/BlogPageVideo'
import BlogPostVideo from './BlogPostVideo'
import HomeDashboard from './dashboard/Home'
import Cart from './order/Page/Cart'
import MessageNow from './MessageNow'
import MainForm from './Form/Main-Form'
import { ChatList } from './message/Posts'
import MessagePage from './message/MessagePage'
import { ListVideo } from './blogvideo/PostsVideo'
import HomeUser from './userpage/HomeUser'
import UserIdPage from './userpage/UserIdPage'
import { Videomap } from './userpage/Videomap'
import LoginPage from './login/LoginPage'
import Register from './login/Register'
import useLocalStorage from 'use-local-storage'
import ListOrder from './order/component/ListOrder'
import OrderElement from './OrderElement'
import OrderPage from './order/component/OrderPage'
const App = () =>{
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('commentslist')) || [])
    const [titlevideo, setTitlevideo] = useState('')
    const [commentvideos, setCommentvideos] = useState(JSON.parse(localStorage.getItem('videoslist')) || [])
    const [title, setTitle] = useState('')
    const [orders, setOrders] = useState(orderlists)
    const [users] = useState(userList)
    const [posts, setPosts]= useState(Lists)
    const [chatme] = useState(ChatList)
    const [chatTitle, setChatTitle] = useState('')
    const [video, setVideo] = useState(ListVideo)
    const [uservideos] = useState(Videomap)
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatlist')) || [])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [istoggle, setIsToggle] = useLocalStorage("istoggle",preference)

    useEffect(()=>{
    
        setIsLoading(true)
        setTimeout(() =>{
        
        setIsLoading(false)
        }, 6000)
    }, [])

    useEffect(() =>{

        localStorage.setItem('bloglist', JSON.stringify(posts))
    },[posts])
    useEffect(() =>{

        localStorage.setItem('videolist', JSON.stringify(video))
    },[video])


   useEffect(() =>{

    const BlogPostSearch = posts.filter((post) => ((post.title).toLowerCase().includes(search.toLowerCase())) 
    || ((post.name).toLowerCase().includes(search.toLowerCase())))

    setSearchResults(BlogPostSearch)
    }, [posts, search])

    const saveVideoListItem = (newposts) =>{
        setCommentvideos(newposts)
        localStorage.setItem('videoslist', JSON.stringify(newposts))
    }
    const handleVideoSubmit = (e) =>{
        e.preventDefault()

        if(!titlevideo) return 
        VideoaddItem(titlevideo)
        setTitlevideo('')
    }
    const VideoaddItem = (item) =>{
        const date= moment().format('h:mm:ss a')
        const id = commentvideos.length ? commentvideos[commentvideos.length - 1].id + 1 : 1
        const video = {id,item, date}
        const results = [...commentvideos, video]
        saveVideoListItem(results)
    }
    const VideohandleDelete = async(id) =>{
        const listItem = video.filter((post) => post.id !== id)
        setVideo(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const handleDeletevideo = async(id) =>{
        const listItem = commentvideos.filter((post) => post.id !== id)
        setCommentvideos(listItem)
        localStorage.setItem('videoslist', JSON.stringify(listItem))
    }

    const saveListItem = (newposts) =>{
        setComments(newposts)
        localStorage.setItem('commentslist', JSON.stringify(newposts))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!title) return 
        addItem(title)
        setTitle('')
    }
    const addItem = (item) =>{
        const date= moment().format('h:mm:ss a')
        const id = comments.length ? comments[comments.length - 1].id + 1 : 1
        const posts = {id,item, date}
        const results = [...comments, posts]
        saveListItem(results)
    }
    const handleDelete = async(id) =>{
        const listItem = posts.filter((post) => post.id !== id)
        setPosts(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const userDelete = async(id) =>{
        const listItem = posts.filter((post) => post.id !== id)
        setPosts(listItem)
        localStorage.setItem('postlist', JSON.stringify(listItem))
    }
    const handleComment = async(id) =>{
        const listItem = comments.filter((comment) => comment.id !== id)
        setComments(listItem)
        localStorage.setItem('commentlists', JSON.stringify(listItem))
    }
    
    const saveChatsMe = (newChats) =>{
        setChatMessages(newChats)
        localStorage.setItem('chatlist', JSON.stringify(newChats))
    }
    const ChatSubmit = (e) =>{
        e.preventDefault()

        if(!chatTitle) return 
        ChatAdd(chatTitle)
        setChatTitle('')
    }
    const ChatAdd = (messageMe) =>{
        const date= moment().format('h:mm:ss a')
        const id = chatMessages.length ? chatMessages[chatMessages.length - 1].id + 1 : 1
        const chatme = {id,messageMe, date}
        const results = [...chatMessages, chatme]
        saveChatsMe(results)
    }
    const ChatDelete = async(id) =>{
        const listItem = chatMessages.filter((post) => post.id !== id)
        setChatMessages(listItem)
        localStorage.setItem('chatlist', JSON.stringify(listItem))
    }         

   
    return(

        <div dark-theme={istoggle ? "dark" : "light"}>
        <Header search={search} setSearch={setSearch} isChecked={istoggle} handleChecked={() =>setIsToggle(!istoggle)} istoggle={istoggle}/>

        {isLoading ? ([...Array(10).keys()].map(i =>{
            return <SkeletonPost key={i} />
      }) ) : 
      <Routes>

      <Route path="/home" element={<Home orders={orders} setOrders={setOrders}/>} />
      <Route path="/post" element={<BlogPost posts={searchResults} comment={comments.length} handleDelete={handleDelete} />} />
      <Route path="/mes" element={<MessageNow chatme={chatme} length={chatMessages.length} />} />
      <Route path="/user" element={<HomeUser users={users} userDelete={userDelete} uservideos={uservideos} comment={comments.length}/> } />
      <Route path="/mes/:id" element={
      <MessagePage chatme={chatme} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete}
      chatTitle={chatTitle} setChatTitle={setChatTitle} chatMessages={chatMessages} />} />
      <Route path="/form" element={<MainForm />} />
      <Route path="/video" element={<BlogPostVideo video={video} comment={comments.length} VideohandleDelete={VideohandleDelete} />} />
      <Route path="/video/:id" element={<BlogPageVideo video={video} commentvideos={commentvideos} titlevideo={titlevideo} setTitlevideo={setTitlevideo} comment={commentvideos.length} handleDeletevideo={handleDeletevideo} handleVideoSubmit={handleVideoSubmit} VideohandleDelete={VideohandleDelete} />} />
      <Route path="/post/:id" element={<BlogPage posts={searchResults} comments={comments} title={title} setTitle={setTitle} comment={comments.length} handleDelete={handleDelete} handleSubmit={handleSubmit} handleComment={handleComment} />} />
      <Route path="/user/:id" element={<UserIdPage users={users} comments={comments} title={title} setTitle={setTitle} comment={comments.length} userDelete={userDelete} handleSubmit={handleSubmit} handleComment={handleComment} />} />
      <Route path="/update/:id" element={ 
            posts.map((post) =>(
                <EditPost key={post.id} post={post} posts={posts} setPosts={setPosts}/>
            ))
        } />
        <Route path="/order" element={ <OrderElement orders={orders} setOrders={setOrders}/>} />
        <Route path="/order/:id" element={ <OrderPage />} />
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/register" element={ <Register />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/dashboard" element={ <HomeDashboard />} />
        <Route path="/about" element={ <ListOrder />} />
      </Routes>

    }
        </div>
    )
}
export default App