import React, {useContext, useEffect } from 'react';
import { context } from '../context';

export default function Home() {
    const { setUnReadHome, unReadHome } = useContext(context);
    console.log('home');
    // eslint-disable-next-line
    useEffect(() => {
        if (unReadHome > 0) setUnReadHome(0);
        // eslint-disable-next-line
    }, []);

    return (
        <div>home page</div>
    )
}