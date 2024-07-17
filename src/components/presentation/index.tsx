export default function PresentationPage() {
    return (
        <>
            <section className="sm:h-[83vh] flex justify-center items-center sm:py-0 py-10">
                <div className="flex flex-col justify-between lg:px-20 px-2 max-w-screen-xl h-2/4">
                    <h1 className="lg:text-7xl sm:text-5xl text-3xl font-bold text-center">
                        The <strong className="gradient font-bold">open source</strong> cross-platform solution to protect your passwords.
                    </h1>
                    <p className="lg:text-2xl text-xl text-center lg:px-44 px-0 sm:py-0 py-10">
                        We, together with the community, are creating a password manager that is secure, easy to use and available on all platforms.
                    </p>
                </div>
            </section>
        </>
    );
}
