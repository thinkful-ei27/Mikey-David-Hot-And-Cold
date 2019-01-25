import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    if(props.whatPage){return (
        <header>
            <TopNav newGame={props.newGame}
             />
             <InfoModal toggleWhatPage={props.toggleWhatPage} />
            <h1>HOT or COLD</h1>
        </header>
    );}
    return  <header>
    <TopNav newGame={props.newGame}
    toggleWhatPage={props.toggleWhatPage}/>
    <h1>HOT or COLD</h1>
</header>
};
