import React from 'react';

import NewsProvider from './context/newsProvider';
import Tabs from './tabs';

export default function News() {
    return (
        <NewsProvider>
            <Tabs />
        </NewsProvider>
    )
}