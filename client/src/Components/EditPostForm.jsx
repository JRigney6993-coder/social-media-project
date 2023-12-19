import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function EditPostForm({id}) {
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({field: "title", value: ""});
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    async function fetchFunction(e){
        e.preventDefault();
        console.log({...form})
        const getData = await fetch(`http://localhost:5000/posts/update/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({...form})
        })
        const result = await getData.json();
        if(result.success){
            updateForm({field: "title", value: ""})
        }else{
            alert("Server error")
        }
    }

    const cancelButtonRef = useRef(null)
    const openDialog = () => {setOpen(true);} 
  return (
    <div>
    <button onClick={openDialog} className='bg-blue-500 text-white py-2 px-4 rounded'>
        Edit Post
      </button>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
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
                                {form.field === 'category' ? (
                                    <select
                                    id="value"
                                    value={form.value}
                                    onChange={(e) => updateForm({ value: e.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                    <option value="random">Random</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="drama">Drama</option>
                                    <option value="news">News</option>
                                    <option value="tutorials">Tutorials</option>
                                    <option value="sports">Sports</option>
                                    </select>
                                ) : (
                                    <input
                                    id="value"
                                    value={form.value}
                                    placeholder="Update your value"
                                    maxLength="50"
                                    onChange={(e) => updateForm({ value: e.target.value })}
                                    type="text"
                                    name="value"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                )}
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
                                    <option value="title">Title</option>
                                    <option value="category">Category</option>
                                    <option value="content">Content</option>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}