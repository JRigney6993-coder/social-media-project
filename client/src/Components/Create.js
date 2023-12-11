import React, {useState} from 'react'
import { useNavigate } from "react-router";

const Create = () => {
    const [form, setForm] = useState({name: "", user_name: "", email: "", password: ""});
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    const navigate = useNavigate();
    async function createUser(e){
        e.preventDefault();
        const update = {...form}
        await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update)
        })
        updateForm({name: "", user_name: "", email: "", password: ""})
        navigate("/home")
    }
    return (
        <div className="mx-auto w-25 h-50 d-flex flex-column border border-primary p-3">
            <form onSubmit={createUser} className="mt-2">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={form.name}
                    placeholder="Enter your name"
                    maxLength="15"
                    onChange={(e) => updateForm({ name: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    value={form.user_name}
                    placeholder="Enter a user_name"
                    onChange={(e) => updateForm({ user_name: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={form.email}
                    placeholder="Enter email"
                    maxLength="15"
                    onChange={(e) => updateForm({ email: e.target.value })}
                />
                <br />
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={form.password}
                    placeholder="Enter password"
                    onChange={(e) => updateForm({ password: e.target.value })}
                />
                <div className="d-flex justify-content-center w-100 mt-2 flex-col">
                    <button type="submit">Sign Up</button>
                </div>

            </form>
        </div>
    )
}

export default Create