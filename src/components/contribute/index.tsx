export default function ContributePage() {
    return (
        <>
            <section className="sm:h-screen-size flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10" id="contribute">
                <h2 className="text-4xl font-bold text-center pb-4">Contribute</h2>
                <div className="flex flex-col items-center sm:py-0 py-5">
                    <p className="sm:text-xl text-lg text-center">
                        KananPass es un proyecto de código abierto, puedes contribuir a esta landing page y a los software que desarrollemos ingresando a nuestro <a className="hover-text font-bold text-github" href="https://github.com/kananpass" target="_blank">GitHub</a>.
                    </p>
                </div>
            </section>
        </>
    );
}
