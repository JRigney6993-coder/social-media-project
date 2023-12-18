import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({})
  const location = useLocation().pathname.split('/')[2];
  useEffect(() => {
    async function getProfile(){
      var fetchData = await fetch(`http://localhost:5000/users/${location}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
      })
      var result = await fetchData.json();
      if(result.success){
        setProfile(result.user)
      }else{
        alert("No longer an account")
      }
    }
    getProfile();
  }, [])
  return (
    <div>{}</div>
  )
}

export default Profile