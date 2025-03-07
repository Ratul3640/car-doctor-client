import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    return (
        <div>
            <h2><span className='text-2xl '>Book Service:</span> {title}  </h2>



            <div className="card-body">
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />

                        </fieldset>
                    </div>
                    <input className="btn btn-primary btn-block mt-4 " type="submit" value="Order Confirm" />
                </form>
            </div>
        </div>

    );
};

export default Checkout;