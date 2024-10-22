import AddPostForm from "./feature/posts/AddPostForm";
import PostsList from "./feature/posts/PostsList";
import { Route, Routes } from "react-router-dom";
import AddPostEdit from "./feature/posts/AddPostEdit";
import SinglePage from "./feature/posts/SinglePage";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="text-white">

    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<PostsList />} />


        <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePage />} />
        <Route path=":id" element={<AddPostEdit />} />
      
        </Route>
  </Route>
    </Routes>
    </div>
  );
}

export default App;
