import React from 'react';

export default React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('./Login')), 300);
    });
});
