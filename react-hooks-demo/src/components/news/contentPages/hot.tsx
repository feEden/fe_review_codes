import React, {useContext, useEffect } from 'react';
import { context } from '../context';

export default function Hot() {
    const { setUnReadHot, unReadHot } = useContext(context);
console.log('hot');
    useEffect(() => {
        if (unReadHot) setUnReadHot(0);
        // eslint-disable-next-line
    }, []);

    return (
        <div>hot page</div>
    )
}