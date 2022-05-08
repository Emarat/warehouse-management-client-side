import React from 'react';

const Newsletter = () => {
    return (
        <div className='container mt-5'>
            <section >
                <div >
                    <div className="container">
                        <h1 >Subscribe To Get The Latest  News About Us </h1>
                        <p >Get the Latest news about Our Warehouse to Your Pocket, drop your email below to
                            get daliy update about us!</p>

                        <div>
                            <input type="email" required placeholder="Enter your email address" />
                            <button className="m-2">Subscribe</button>



                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Newsletter;