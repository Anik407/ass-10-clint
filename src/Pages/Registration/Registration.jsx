import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
     const {createUser, updateUserProfile} = useContext(AuthContext)
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')

     const handleRegister = (event) => {
          setError("")
          setSuccess("")
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photo, email, password);

          if(password.length < 6){
               setError("Password must be at least 6 character")
               return
          }
          createUser(email, password)
          .then(result => {
               updateUserProfile(name, photo)
               console.log(result.user);
          })
          .catch(error => {
               console.log(error);
          })
          form.reset()
          setSuccess('Registration Successful')
     }
     return (
          <div className='flex justify-center items-center mb-10'>
                    <form onSubmit={handleRegister} className="flex flex-col gap-4 w-[30%]">
                         <h2 className='text-5xl font-bold'>Please Register...</h2>
                         <div>
                              <div className="mb-2 block">
                                   <Label
                                        htmlFor="name"
                                        value="Your name"
                                   />
                              </div>
                              <TextInput
                                   id="name"
                                   type="text"
                                   name="name"
                                   required={true}
                              />
                         </div>
                         <div>
                              <div className="mb-2 block">
                                   <Label
                                        htmlFor="photo"
                                        value="Your Photo URL"
                                   />
                              </div>
                              <TextInput
                                   id="photo"
                                   type="text"
                                   name="photo"
                                   required={true}
                              />
                         </div>
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
                         <Link to='/login' >
                              Register
                         </Link>
                         </Button>
                         <p className='text-red-500'>{error}</p>
                         <p className='text-green-500'>{success}</p>
                         <p>Already have an account? please <Link className='text-blue-500' to='/login'>Login</Link></p>
                    </form>
                    <div className="flex flex-col justify-center">


    <img className='w-96 md:ms-24 shadow-2xl shadow-lime-300  '
        src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab" alt="Flowbite Logo" />

<h1 className="ps-14 md:ps-24 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">   <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span></h1>

</div>
               </div>
     );
};

export default Register;