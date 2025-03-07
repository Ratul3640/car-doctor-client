import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);

    }
    return (
        <div>
            <h2><span className='text-3xl text-center'>Book Service:</span> {title}  </h2>



            <div className="card-body">
                <form onSubmit={handleBookService}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="name" defaultValue={user?.displayName} name='name' className="input" placeholder="Name" />
                            <label className="fieldset-label">Date</label>
                            <input type="date" name='date' className="input" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" defaultValue={user?.email} name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Due Amount</label>
                            <input type="text" defaultValue={'$' + price} className="input" />

                        </fieldset>
                    </div>
                    <input className="btn btn-primary btn-block mt-4 " type="submit" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default BookService;