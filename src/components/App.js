import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./Articlelist";

console.log(blogData);

function App() {
  const blogName = "My Awesome Blog";
  const aboutText = "MY FIRST react blog!"
  const posts = [
    { id: 1, title: "Post 1", content: "This is the content of Post 1." },
    { id: 2, title: "Post 2", content: "This is the content of Post 2." },
    // Add more post objects as needed
  ];


  return (
    <div className="App">
      <Header blogName={blogName}/>
      <About
      aboutText={aboutText}
      imageSrc={''}/>
      <ArticleList posts={posts} />
      {/* Rest of your App components */}
    
      
    </div>
  );
}

export default App;