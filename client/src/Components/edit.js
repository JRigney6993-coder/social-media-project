import { useState, useEffect } from "react";
import ProfileEdit from "./ProfileEdit";

export default function Edit(){
    const [form, setForm] = useState({field: "name", value: ""});
    const [refreshFlag, setRefreshFlag] = useState(null);
    const [profile, setProfile] = useState({});
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    useEffect(() => {
        async function getProfile(){
            var fetchData = await fetch(`http://localhost:5000/users`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
            })
            var result = await fetchData.json();
            if(result.success){
                setProfile(result.user)
                setRefreshFlag(false);
            }else{
                alert("No longer an account")
            }
        }
        getProfile();
    }, [refreshFlag])
    async function fetchFunction(e){
        e.preventDefault();
        console.log({...form})
        const getData = await fetch("http://localhost:5000/users/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({...form})
        })
        const result = await getData.json();
        if(result.success){
            updateForm({field: "name", value: ""})
            setRefreshFlag(true);
        }else{
            alert("Server error")
        }
    }
    return(
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
           <ProfileEdit user={profile}/>
           <br /> 
          <form onSubmit={fetchFunction}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="col-span-full">
                        <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                <label htmlFor="value" className="block text-sm font-medium leading-6 text-gray-900">
                                    Value
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="value"
                                        value={form.value}
                                        placeholder="Enter a title"
                                        maxLength="50"
                                        onChange={(e) => updateForm({ value: e.target.value })}
                                        type="text"
                                        name="value"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                </div>
                                <div className="sm:col-span-3">
                                <label htmlFor="Field" className="block text-sm font-medium leading-6 text-gray-900">
                                    Field
                                </label>
                                <div className="mt-2">
                                    <select
                                    id="field"
                                    name="field"
                                    value={form.field}
                                    onChange={(e) => updateForm({ field: e.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option value="name">Name</option>
                                    <option value="email">Email</option>
                                    <option value="profile_pic">Profile pic</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
        </form>
        </div>
      </div>
    </div>
    );
}