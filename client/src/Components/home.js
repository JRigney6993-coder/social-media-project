import {useState, useEffect} from "react"
import Posts from "./Posts"
import CreatePost from './createPost'


export default function Home(){
    const [category, setCategory] = useState("random");
    const [refreshFlag, setRefreshFlag] = useState(null);
    const [posts, setPosts] = useState([])
    console.log(category)
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
          setRefreshFlag(false);
          setPosts(result.content);
        }
        setRefreshFlag(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [refreshFlag]);
  const handleRefresh = () => {
    setRefreshFlag(true);
  };
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <CreatePost refresh={handleRefresh}/>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Posts key={post.id} post={post} updateCategory={setCategory}/>
          ))}
        </div>
      </div>
    </div>
  )
}
