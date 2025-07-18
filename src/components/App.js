import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const posts = blogData.posts;

function App() {
  return (
    <div className="App">
      <Header name="Overreacted"/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
