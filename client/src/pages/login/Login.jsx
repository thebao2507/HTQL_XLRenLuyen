import React from 'react'
import { Link } from 'react-router-dom'
import '../login/login.css'

const Login = () => {
    const [error, setError] = React.useState(true)
    return (
        <div className='w-full h-screen flex items-between'>
            <div className='relative w-1/2 h-full flex flex-col slide-y-l'>
                <img src="https://i.pinimg.com/originals/ba/3d/4c/ba3d4cf26383465c7fcd6e6ac4809f5d.jpg" alt="hinh" className='w-full h-full object-cover' />
            </div>

            <div className='w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between slide-y-r'>
                <div className="w-full flex flex-col">
                    <div className="px-8 rounded-xl">
                        <h1 className="font-medium text-3xl mt-3 text-center text-blue-400">QUY NHON UNIVERSITY</h1>
                        {/* <form action="" className="mt-6" onSubmit={handleSubmit}> */}
                        <form action="" className="mt-6">
                            <div className="my-5 text-md">
                                <input
                                    type="text"
                                    required
                                    className="px-4 py-3 mt-3 rounded-md focus:outline-none bg-gray-100 w-full"
                                    placeholder="Username"
                                //value={username}
                                //onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="my-5 text-md">
                                <input
                                    type="password"
                                    required
                                    className="rounded-md px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                                    placeholder="Password"
                                //value={password}
                                //onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex justify-end mt-2 text-md text-gray-600">
                                    <Link to='/forgotpassword' target="_blank">Forget Password?</Link>
                                </div>
                            </div>

                            <button type='submit' className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-md hover:bg-black w-full text-xl">Login</button>
                            {
                                error ? (
                                    <p className='text-center mt-2 text-red-500 font-semibold'>username or password are not correct!!!</p>
                                ) : (
                                    <></>
                                )
                            }
                        </form>
                        <p className="mt-12 text-sm text-center font-light text-gray-700"> Quy Nhơn University <a href="https://www.qnu.edu.vn/" target="_blank" className="text-black font-medium"> Click here </a>  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login