import React from 'react';

function Watches({watches}) {
    return watches.map((watch, index) => {
        return <div className='watch-row' key={index}>
            <img src={watch.src} alt={watch.alt}/>
        </div>
    });
}

export default Watches;