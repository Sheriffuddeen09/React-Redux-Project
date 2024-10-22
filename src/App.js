import PostsList from "./feature/posts/PostsList";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./feature/posts/SinglePage";
import Layout from "./layout/Layout";
import EditPostForm from "./feature/posts/EditPostForm";
import AddPostForm from './feature/posts/AddPostForm'

function App() {
  return (
    <div className="text-white">

    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<PostsList />} />


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
