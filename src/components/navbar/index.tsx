export default function NavbarPage() {
    return (
        <>
            <nav className="flex lg:flex-row flex-col justify-between items-center lg:sticky lg:top-0 py-4 sm:px-40 bg-page">
                <h1 className="text-3xl font-bold lg:pb-0 pb-4 cursor-pointer gradient hover-text">
                    KananPass
                </h1>
                <div className="flex flex-row lg:pb-0 pb-4">
                    <a href="#features" className="sm:px-4 px-2 hover-text">Features</a>
                    <a href="#about" className="sm:px-4 px-2 hover-text">About</a>
                    <a href="#download" className="sm:px-4 px-2 hover-text">Download</a>
                    <a href="#contribute" className="sm:px-4 px-2 hover-text">Contribute</a>
                </div>
                <button className="transition hover:bg-[#00bfa680] bg-[#00bfa6] disabled:bg-gray-700 text-white rounded-3xl px-5 py-3" disabled>
                    Pre-register
                </button>
            </nav>
        </>
    );
}