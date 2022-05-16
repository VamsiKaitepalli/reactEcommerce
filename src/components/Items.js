import React from 'react';

function Items({items, type}) {
    return items.map((item, index) => {
        return <div className='item-row col-md-3' key={index}>
            <img src={item.src} alt={item.alt} />
            <p><span>{type} Name:</span> {item.alt}</p>
            <p><a href=""><button className='btn btn-primary'>Contact</button></a></p>
        </div>
    });
}

export default Items;