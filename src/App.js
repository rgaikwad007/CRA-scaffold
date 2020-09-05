import React, { Fragment } from 'react';

import appStyle from './scss/App.scss';

export default function App() {
    return(
        <Fragment>
            <header className={appStyle.header}>
                <div>
                    <h1>Hello React App...</h1>
                </div>
                <div><h4>The app is running in {process.env.NODE_ENV} mode.</h4></div>
            </header>
            <section className={appStyle.section}>Edit <code>src/App.js</code> and save to reload.</section>
        </Fragment>
    );
}