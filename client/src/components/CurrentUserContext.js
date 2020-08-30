// Libraries
import React from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('Loading');

    // Wrap fetch in useEffect
    React.useEffect(() => {
        // Fetch the user data from the API (/me/profile + enabled cors extension)
        fetch('/api/me/profile', { method: 'GET' })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    window.location.href = '/error';
                }
            })
            .then((data) => {
                // When the data is received, update currentUser
                setCurrentUser(data);
                // set `status` to `idle`
                setStatus('idle');
            })

            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
