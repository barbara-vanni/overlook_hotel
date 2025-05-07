import React from 'react';
import useParallaxScroll from '../../hook/useParallaxScroll';

const HeaderParallax = () => {
    const offset = useParallaxScroll(0.5);

    return (
        <header
            style={{
                transform: `translateY(${offset}px)`,
                backgroundImage: 'url(/path/to/your/header-image.jpg)',
                backgroundSize: 'cover',
                height: '300px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <h1 style={{ color: 'white', padding: '2rem' }}>Mon Header</h1>
        </header>
    );
};

export default HeaderParallax;
