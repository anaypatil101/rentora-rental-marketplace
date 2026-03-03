const TermsPage = () => {
    return (
        <section className='bg-blue-50 min-h-screen'>
            <div className='container m-auto max-w-3xl py-24 px-6'>
                <h1 className='text-3xl font-bold mb-8'>Terms of Service</h1>
                <p className='text-gray-500 text-sm mb-8'>
                    Last updated: March 2026
                </p>

                <div className='space-y-6 text-gray-700 leading-relaxed'>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>1. About Rentora</h2>
                        <p>
                            Rentora is a personal, non-commercial project built for
                            educational and portfolio purposes. It is not a real rental
                            marketplace and does not facilitate actual property transactions.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>2. Use of the Site</h2>
                        <p>
                            This site is provided &quot;as is&quot; for demonstration purposes.
                            Any property listings, user accounts, or messages created on this
                            platform are for testing and showcase purposes only. Do not submit
                            real personal information, financial data, or sensitive details.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>
                            3. User Accounts
                        </h2>
                        <p>
                            Authentication is handled via Google OAuth through NextAuth.js. By
                            signing in, you allow the app to access your basic Google profile
                            information (name, email, and profile picture). This information is
                            stored in our database solely for app functionality and is not
                            shared with third parties.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>
                            4. User-Generated Content
                        </h2>
                        <p>
                            Users may create property listings and upload images. All uploaded
                            content may be deleted at any time without notice. Do not upload
                            content you do not own or have rights to.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>
                            5. No Warranties
                        </h2>
                        <p>
                            This project is provided without any warranties, express or
                            implied. The developer is not responsible for any data loss,
                            downtime, or issues arising from the use of this application.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>
                            6. Third-Party Services
                        </h2>
                        <p>
                            Rentora integrates with third-party services including Google
                            OAuth, Cloudinary (image hosting), Mapbox (maps), and MongoDB
                            (database). Your use of these services is subject to their
                            respective terms and privacy policies.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold mb-2'>7. Contact</h2>
                        <p>
                            If you have any questions about these terms, feel free to reach out
                            via the project&apos;s GitHub repository.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsPage;
