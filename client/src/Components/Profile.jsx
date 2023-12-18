import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import Posts from './Posts';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const location = useLocation().pathname.split('/')[2];
  useEffect(() => {
    async function getProfile(){
      var fetchData = await fetch(`http://localhost:5000/users/${location}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
      })
      var userPosts = await fetch(`http://localhost:5000/posts/user/${location}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
      })
      var result = await fetchData.json();
      var result2 = await userPosts.json();
      if(result.success && result2.success){
        setProfile(result.user)
        setPosts(result2.content);
      }else{
        alert("No longer an account")
      }
    }
    getProfile();
  }, [])
  return (
    // <div>{}</div>
    <div className="flex items-center justify-center flex-col min-h-screen border-gray-900/10  text-white font-montserrat">
  <div className="card-container mt-16 ring-gray-300 rounded-lg shadow-md text-gray-400 pt-8 relative w-80 md:w-96 text-center">
    <img className="round border-solid border-cyan-500 rounded-full p-7" src={profile['profile_pic']} alt="user" />
    <div className="buttons mt-5 border-b border-gray-900/10">
      <h1>{profile["user_name"]}</h1>
    </div>
    <div className="skills ring-gray-300 text-left px-4 py-5 mt-8">
      <h6 className="text-white">Skills</h6>
      <ul className="list-none m-0 p-0">
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">UI / UX</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">Front End Development</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">HTML</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">CSS</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">JavaScript</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">React</li>
        <li className="border-solid border-purple-900 border rounded-md inline-block text-xs px-3 py-2 mr-2 mb-2">Node</li>
      </ul>
    </div>
  </div>
  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Posts key={post.id} post={post}/>
          ))}
  </div>
</div>
  )
}

export default Profile