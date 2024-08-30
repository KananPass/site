'use client'

import { useState, useEffect } from 'react';

export default function Footer() {

    const flags = {
        'es-MX': {
            name: 'Español (MX)',
            code: 'es-MX',
            flag: '🇲🇽',
        },
        'en-US': {
            name: 'English (US)',
            code: 'en-US',
            flag: '🇺🇸',
        },
    } as {
        [key: string]: {
            name: string;
            code: string;
            flag: string;
        }
    };

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('selectedLanguage')) {
            return localStorage.getItem('selectedLanguage') || 'en-US';
        }

        if (typeof navigator !== 'undefined') {
            return navigator.language || 'en-US';
        }
        
        return 'en-US';
    });

    function handleLanguageChange(language: string) {
        setSelectedLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    }

    return (
        <footer className="flex flex-col items-center lg:px-20 px-2 py-5 bg-page">
            <p className="sm:text-lg text-sm text-center">
                Made with ❤️ by the KananPass team and the community.
            </p>
            <p className="sm:text-sm text-center">
                © { new Date().getFullYear() } KananPass
            </p>
            {
                Object.keys(flags).map((key) => {
                    return (
                        <button
                            key={ key }
                            className={`sm:text-lg text-sm ${ selectedLanguage === key ? 'font-bold' : '' }`}
                            onClick={() => handleLanguageChange(key)}
                        >
                            { flags[key].flag } { flags[key].name }
                        </button>
                    );
                })
            }
        </footer>
    );
}