// Libraries
import React from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('Loading');

    // Wrap fetch in useEffect
    React.useEffect(() => {
        // Fetch the user data from the API (/me/profile + enabled cors extension)
        fetch('http://localhost:31415/api/me/profile', { method: 'GET' })
            .then((res) => res.json())
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
