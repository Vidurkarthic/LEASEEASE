import React from 'react';
import './Policies.css';
import Home from './Home';
import Footer from './Footer';

const Policies = () => {
  return (
    <div className='policies'>
        <Home />
        <div className="policies-container">
            <header className="policies-header">
                <h1>LeaseEase Rental Policies</h1>
            </header>
            <main className="policies-content">
                <section className="policy-section">
                    <h2>Privacy Policy</h2>
                    <p>
                        We are committed to protecting your privacy. We collect personal
                        information that you voluntarily provide to us when you register on
                        the website, express an interest in obtaining information about us or
                        our products and services, when you participate in activities on the
                        website or otherwise contact us.
                    </p>
                </section>
                <section className="policy-section">
                    <h2>Terms and Conditions</h2>
                    <p>
                        By accessing or using the LeaseEase website, you agree to comply with
                        and be bound by these terms and conditions. We reserve the right to
                        update or modify these terms at any time without prior notice.
                    </p>
                </section>
                <section className="policy-section">
                    <h2>Cancellation Policy</h2>
                    <p>
                        Cancellations made within 24 hours of booking will receive a full
                        refund. Cancellations made after 24 hours will be subject to a 20%
                        cancellation fee.
                    </p>
                </section>
                <section className="policy-section">
                    <h2>Damage Policy</h2>
                    <p>
                        Any damages to the rental property must be reported immediately.
                        Tenants are responsible for any damages caused during their stay and
                        will be charged accordingly.
                    </p>
                </section>
                <section className="policy-section">
                    <h2>Refund Policy</h2>
                    <p>
                        Refunds will be processed within 7-10 business days after the
                        cancellation request is approved. Refunds will be issued to the
                        original payment method.
                    </p>
                </section>
            </main>
        </div>
        <Footer />
    </div>
  );
};

export default Policies;
