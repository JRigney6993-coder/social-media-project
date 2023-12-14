import React, {useState} from 'react'
import { useNavigate } from "react-router";


const CreatePost = () => {
    const [form, setForm] = useState({title: "", content: "", category: ""});
    var updateForm = (value) => setForm((prev) => {return { ...prev, ...value };});
    const navigate = useNavigate();
    async function createPost(e){
        e.preventDefault();
        var response = await fetch("http://localhost:5000/posts", {
            method: "POST",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...form})
        })
        var result = await response.json();
        if(result.success){
            updateForm({title: "", content: "", category: ""})
            navigate("/home")
        }else{
            alert("Error");
        }
    }
  return (
    <form onSubmit={createPost}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                value={form.title}
                                placeholder="Enter a title"
                                maxLength="50"
                                onChange={(e) => updateForm({ title: e.target.value })}
                                type="text"
                                name="title"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                            Category
                        </label>
                        <div className="mt-2">
                            <select
                            id="category"
                            name="category"
                            value={form.category}
                            onChange={(e) => updateForm({ category: e.target.value })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option value="random">Random</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="news">News</option>
                            <option value="tutorials">Tutorials</option>
                            <option value="sports">Sports</option>
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    About
                </label>
                <div className="mt-2">
                    <textarea
                        id="content"
                        value={form.content}
                        placeholder="Enter your content"
                        onChange={(e) => updateForm({ content: e.target.value })}
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
    )
}

export default CreatePost