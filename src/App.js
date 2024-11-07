import moment from 'moment'
import { Route, Routes } from "react-router-dom";
import SinglePage from "./feature/posts/SinglePage";
import Layout from "./layout/Layout";
import EditPostForm from "./feature/posts/EditPostForm";
import AddPostForm from './feature/posts/AddPostForm'
import Users from "./feature/user/Users";
import UsersListId from "./feature/user/UsersListId";
import HomePost from "./feature/posts/HomePost";
import { useEffect, useState } from "react";
import { getMessage, getReels } from "./api/apiSlice";
import Combine from './message/Combine';
import MessageNowLink from './message/MessageNowLink';
import ReelPosts from './feature/posts/ReelPost';
import BlogPost from './blogpost/BlogPost';
import BlogPage from './blogpost/BlogPage';

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatlist')) || [])
  const [chatTitle, setChatTitle] = useState('')
  const [chatme, setChatme] = useState([])


  
  const [posts, setPosts] = useState([])
  useEffect(() =>{
      getReels().then(json =>{
          setPosts(json)
          return json
      })
  },[])
  
  useEffect(() =>{

    getMessage().then(json =>{
      setChatme(json)
      return json
    })
  },[])
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
const ChatAdd = (name) =>{
    const date= moment().format('h:mm a')
    const id = chatMessages.length ? chatMessages[chatMessages.length - 1].id + 1 : 1
    const chatme = {id, name, date}
    const results = [...chatMessages, chatme]
    saveChatsMe(results)
}
const ChatDelete = async(id) =>{
    const listItem = chatMessages.filter((post) => post.id !== id)
    setChatMessages(listItem)
    localStorage.setItem('chatlist', JSON.stringify(listItem))
}         

  return (
    <div className="text-white overflow-hidden bg-gray-100">

    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePost chatme={chatme} />} />
        <Route path='posted'>
        <Route index element={<BlogPost posts={posts} />} />
        <Route path=':id' element={<BlogPage posts={posts} />} />
        </Route>
      <Route path="message">
           <Route index element={<MessageNowLink  chatme={chatme} length={chatMessages.length}/>} />
      <Route path=":id" element={
          <Combine chatme={chatme} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete} length={chatMessages.length}
          chatTitle={chatTitle} setChatTitle={setChatTitle} setChatMessages={setChatMessages} chatMessages={chatMessages} />} />
      </Route>
      <Route path="user">
          <Route index element={<Users />} />
          <Route path=":userId" element={<UsersListId />} />
          <Route path=":userId/posts" element={
            <div className='bg-black'>
            <ReelPosts />
            </div>
            } />
      </Route>

        <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      
        </Route>
  </Route>
    </Routes>
    </div>
  );
}

export default App;