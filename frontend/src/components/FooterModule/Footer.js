import React from 'react';
import useParallaxScroll from '../../hook/useParallaxScroll';

const FooterParallax = () => {
    const offset = useParallaxScroll(0.3);

    return (
        <footer
            style={{
                transform: `translateY(${offset}px)`,
                backgroundImage: 'url(/path/to/your/footer-image.jpg)',
                backgroundSize: 'cover',
                height: '200px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <p style={{ color: 'white', padding: '2rem' }}>Mon Footer</p>
        </footer>
    );
};

export default FooterParallax;
