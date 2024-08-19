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
        </footer>
    );
}