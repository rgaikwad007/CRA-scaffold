import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(
    <App />,
    document.getElementById('react-root')
);

import('./DynamicComponent').then(module => {
    const DynamicComp = module.default;
    ReactDom.render(
        <DynamicComp />,
        document.getElementById('dynamic-react-root')
    );
});