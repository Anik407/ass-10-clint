import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <>
            <div className='flex justify-center items-center mb-10'>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 w-[30%]">
                    <h2 className='text-5xl font-bold'>Please Login...</h2>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name="email"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            name="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button type="submit">
                        Login
                    </Button>
                    <p className='text-red-500'>{error}</p>
                    <p>New to this website? please <Link className='text-blue-500' to='/registration'>Register</Link></p>
                    <div className='flex'>
                        <button onClick={handleGoogleSignIn} className='flex items-center bg-amber-500 px-3 py-2 rounded'><FaGoogle></FaGoogle><span className='ms-2'>Google Login</span></button>
                        <button onClick={handleGithubSignIn} className='flex items-center bg-stone-300 px-3 py-2 rounded ms-2'><FaGithub></FaGithub><span className='ms-2'>Github Login</span></button>
                    </div>
                </form>
                <div className="flex flex-col justify-center">

                     
                            <img className='w-96 md:ms-24 shadow-2xl shadow-lime-300  '
                                src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab" alt="Flowbite Logo" />
                     
                        <h1 className="ps-14 md:ps-24 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">   <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span></h1>

                    </div>
            </div>
        </>
    );
};

export default Login;