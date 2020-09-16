import React, { useContext } from 'react';
import { Button } from 'antd-mobile';

import { context } from '../context';

export default function Setting() {
    const { setUnReadHome, setUnReadHot, unReadHome, unReadHot } = useContext(context);
console.log('setting');

    return (
        <div>
            <div>
                首页未读：
                <Button onClick={() => setUnReadHome(unReadHome + 1) } size="small">加1</Button>
            </div>
            <div>
                热点未读：
                <Button onClick={() => setUnReadHot(unReadHot + 1) } size="small">加1</Button>
            </div>
        </div>
    )
}