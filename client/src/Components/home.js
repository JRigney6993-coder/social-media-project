import {useState, useEffect} from "react"
import Posts from "./Posts"


export default function Home(){
    const [category, setCategory] = useState("random");
    const [posts, setPosts] = useState([])
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${category}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
        }) || null;
        if(response === null) throw new Error("failed to get data");
        const result = await response.json();
        if(result.success){
          setPosts(result.content);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Posts key={post.id} post={post} updateCategory={setCategory}/>
          ))}
        </div>
      </div>
    </div>
  )
}
