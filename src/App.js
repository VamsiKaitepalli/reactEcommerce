import './App.css';
import Items from './components/Items.js';

var shirts = [];
for(var i=1; i<51; i++) {
  var shirt = {
    src: './shirts/img'+i+'.jpg',
    alt: 'Shirt '+i,
    price: 'Rs. '+(1000+i*10)
  }

  shirts.push(shirt);
}

var watches = [];
for(i=1; i<467; i++) {
  var watch = {
    src: './watches/img ('+i+').jpg',
    alt: 'Watch '+i
  }

  watches.push(watch);
}

var belts = [];
for(i=1; i<51; i++) {
  var belt = {
    src: './belts/img ('+i+').jpg',
    alt: 'Belt '+i,
    price: 'Rs. 1000'
  }

  belts.push(belt);
}

var shoes = [];
for(i=1; i<51; i++) {
  var shoe = {
    src: './shoes/img ('+i+').jpg',
    alt: 'Shoe '+i,
    price: 'Rs. 1000'
  }

  shoes.push(shoe);
}



function App() {
  return (
    <div className="App container">
      <h1>Ecommerce</h1>
      <br/>
      <div>
        <h2>Shirts</h2>
        <div className='row allItems'>
          <Items items={shirts} type='Shirt'/>
        </div>
      </div>
      <br/>
      <div>
        <h2>Watches</h2>
        <div className='row allItems'>
          <Items items={watches} type='Watch'/>
        </div>
      </div>
      <br/>
      <div>
        <h2>Belts</h2>
        <div className='row allItems'>
          <Items items={belts} type='Belt'/>
        </div>
      </div>
      <br/>
      <div>
        <h2>Shoes</h2>
        <div className='row allItems'>
          <Items items={shoes} type='Shoe'/>
        </div>
      </div>
    </div>
  );
}

export default App;