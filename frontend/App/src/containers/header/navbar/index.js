import React from 'react';

export default React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('./Navbar')), 300);
    });
});
