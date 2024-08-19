'use client'

import { useState, useEffect } from 'react';

export default function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('selectedLanguage') || 'en';
        }
        
        return 'en';
    });

    function handleLanguageChange(language: string) {
        setSelectedLanguage(language);
        localStorage.setItem('selectedLanguage', language);
        // Here you can add the logic to change the language of the website
    }

    return (
        <footer className="flex flex-col items-center lg:px-20 px-2 py-5 bg-page">
            <p className="sm:text-lg text-sm text-center">
                Made with ❤️ by the KananPass team and the community.
            </p>
            <p className="sm:text-sm text-center">
                © { new Date().getFullYear() } KananPass
            </p>
            <div className="mt-4 flex items-center">
                <label htmlFor="language-select" className="sm:text-sm text-center text-gray-700 mr-2">Language:</label>
                <div className="relative inline-block">
                    <select
                        id="language-select"
                        value={ selectedLanguage }
                        className="appearance-none border border-gray-300 rounded-md pl-10 pr-8 py-1 sm:text-sm text-xs bg-white cursor-pointer"
                        onChange={(e) => handleLanguageChange(e.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img
                            src={`/path/to/flag/icons/${ selectedLanguage }.png`}
                            alt={`${ selectedLanguage } flag`}
                            className="w-5 h-5"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}