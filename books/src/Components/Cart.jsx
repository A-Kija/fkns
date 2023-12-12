import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';

import { cartSvg } from './svg';



export default function Cart() {

    const { cart, books } = useContext(BooksContext);

    return (
        <div className="cart">
            <div className="cart-top">
                <div className="cart-count">{cart.length}</div>
                {cartSvg}
            </div>
            <div className="cart-list">
                {cart.length > 0 ?
                    cart.map(c => (
                        <div className="cart-item" key={c.id}>
                            <div className="cart-item__title">{books.find(b => b.id === c.id).title}</div>
                            <div className="cart-item__count">{c.count}</div>
                        </div>
                    ))
                    : <div className="cart-item">Krepšelis tuščias</div>
                }
            </div>
            
        </div>
    );
}