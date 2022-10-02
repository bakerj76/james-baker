import { useCallback, useEffect, useState } from 'preact/hooks';

import Routes from './components/Routes';

import './assets/styles/app.css';

export const App = () => {
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setLightMode(false);
        } else {
            setLightMode(true);
        }
    }, []);

    const onThemeToggle = useCallback(() => {
        setLightMode(lightMode => !lightMode);
    }, []);

    const onThemeKey = useCallback((e: KeyboardEvent) => {
        if (e.key === 't' || e.key === 'T') {
            onThemeToggle();
        }
    }, [onThemeToggle]);

    useEffect(() => {
        document.addEventListener('keyup', onThemeKey);

        return () => {
            document.removeEventListener('keyup', onThemeKey);
        };
    }, [onThemeKey]);

    useEffect(() => {
        if (lightMode && document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
        } else if (!lightMode && !document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
        }
    }, [lightMode]);

    const ThemeToggle = () => (
        <div className={`theme-toggle${lightMode ? ' dark' : ''}`} onClick={onThemeToggle}>
            <div className="theme-toggle-circle" />
        </div>
    );

    return (
        <>
            <Routes />
            <ThemeToggle />
        </>
    );
};
