import React, { useContext } from 'react';
import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console(error))

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">

                    <img src={image} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Confirm password?</a></div>
                                <input className="btn btn-neutral mt-4" type="submit" value="sign Up" />
                            </fieldset>
                        </form>
                        <p className='my-4 text-center'>Already have accout?_ <Link className='text-orange-600 text-xl font-bold' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;