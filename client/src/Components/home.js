import {useState, useEffect} from "react"
import Posts from "./Posts"
import Navbar from "./navbar";

export default function Home(){
    const [category, setCategory] = useState("random");
    const [refreshFlag, setRefreshFlag] = useState(null);
    const [numOfRefreshes, setNumOfRefreshes] = useState(1)
    const [posts, setPosts] = useState([])
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY;
        if (windowHeight + scrollPosition >= documentHeight - 10){
          setNumOfRefreshes((prev) => prev += 1)
          setRefreshFlag(true)
        }
      }
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/posts/${category}/${numOfRefreshes}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: 'include',
          });
          const result = await response.json();
          if(result.success){
            setPosts(result.content);
          }
          setRefreshFlag(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [refreshFlag]);
  return (
    <>
    <Navbar />
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-10">
          {posts.map((post) => (
            <Posts key={post.id} post={post} updateCategory={setCategory}/>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
