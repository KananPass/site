const year = new Date().getFullYear();

export default function FooterPage() {
    return (
        <>
            <footer className="flex flex-col items-center lg:px-20 px-2 py-5 bg-page">
                <p className="sm:text-lg text-sm text-center">
                    Made with ❤️ by the KananPass team and the community.
                </p>
                <p className="sm:text-sm text-center">
                    © { year } KananPass
                </p>
            </footer>
        </>
    );
}
