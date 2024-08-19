export default function AboutPage() {
    return (
        <>
            <section className="sm:h-screen-size flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10" id="about">
                <h2 className="text-4xl font-bold text-center pb-4">About</h2>
                <div className="flex flex-col items-center sm:py-0 py-5">
                    <p className="text-xl text-center lg:px-44 px-0 sm:py-0 py-10">
                        KananPass arises from the need for a password manager that is easy to use and not solely dependent on the cloud, allowing local use through a file that you can generate if it&apos;s your first time using it, or that you can load if you have used it before (stored locally on your machine). Additionally, we are open-source software, so you can see exactly what happens with your passwords.
                    </p>
                </div>
            </section>
        </>
    );
}