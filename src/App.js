import moment from 'moment'
import { Route, Routes } from "react-router-dom";
import SinglePage from "./feature/posts/SinglePage";
import Layout from "./layout/Layout";
import EditPostForm from "./feature/posts/EditPostForm";
import AddPostForm from './feature/posts/AddPostForm'
import Users from "./feature/user/Users";
import UsersListId from "./feature/user/UsersListId";
import HomePost from "./feature/posts/HomePost";
import MessageNow from "./message/MessageNow";
import { useEffect, useState } from "react";
import { getMessage } from "./api/apiSlice";
import Combine from './message/Combine';

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatlist')) || [])
  const [chatTitle, setChatTitle] = useState('')
  const [chatme, setChatme] = useState([])

  
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
const ChatAdd = (messageMe) =>{
    const date= moment().format('h:mm a')
    const id = chatMessages.length ? chatMessages[chatMessages.length - 1].id + 1 : 1
    const chatme = {id, messageMe, date}
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
        <Route index element={<HomePost />} />
        
      <Route path="message">
           <Route index element={<MessageNow  chatme={chatme} length={chatMessages.length}/>} />
      <Route path=":id" element={
          <Combine chatme={chatme} ChatSubmit={ChatSubmit} ChatDelete={ChatDelete} length={chatMessages.length}
          chatTitle={chatTitle} setChatTitle={setChatTitle} chatMessages={chatMessages} />} />
      </Route>
      <Route path="user">
          <Route index element={<Users />} />
          <Route path=":userId" element={<UsersListId />} />
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