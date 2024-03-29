import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';

export default () => {
    const ref = useRef(null);

    React.useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref} />;
}


