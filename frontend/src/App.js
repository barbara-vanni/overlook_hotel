import React from 'react';
import HeaderParallax from './components/HeaderModule/Header';
import FooterParallax from './components/FooterModule/Footer';

function App() {
    return (
        <>
            <HeaderParallax />
            <main style={{ height: '2000px', padding: '2rem' }}>
                <p>Contenu</p>
            </main>
            <FooterParallax />
        </>
    );
}

export default App;
