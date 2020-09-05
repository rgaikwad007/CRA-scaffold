import React from 'react';
import appStyle from './scss/App.scss';

export default function DynamicComponent() {
    return (
        <section className={appStyle.section}>
            This component has been loaded dynamically on-demand
        </section>
    );
}