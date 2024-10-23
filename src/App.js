import PostsList from "./feature/posts/PostsList";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./feature/posts/SinglePage";
import Layout from "./layout/Layout";
import EditPostForm from "./feature/posts/EditPostForm";
import AddPostForm from './feature/posts/AddPostForm'
import Users from "./feature/users/Users";
import UsersListId from "./feature/users/UsersListId";

function App() {
  return (
    <div className="text-white">

    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<PostsList />} />
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
