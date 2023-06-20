import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} руб</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  const [showAbout, setShowAbout] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowContacts(false);
    setCartOpen(false);
  };

  const handleContactsClick = () => {
    setShowContacts(!showContacts);
    setShowAbout(false);
    setCartOpen(false);
  };

  return (
    <header>
      <div>
        <span className='Logo'>Comfort</span>
        <ul className='nav'>
          <li onClick={handleAboutClick}>Про нас</li>
          <li onClick={handleContactsClick}>Контакты</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} 
        className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0
              ? showOrders(props)
              : showNothing()
            }
          </div>
        )}
        {showAbout && (
          <div className='modal-overlay' onClick={handleAboutClick}>
            <div className='modal'>
              <h2>Про нас</h2>
              <p>Мы — магазин Comfort, который специализируется на продаже текстильной продукции.

Наша команда занимается отбором лучших материалов и созданием качественных товаров, чтобы вы могли наслаждаться комфортом каждую ночь. Мы верим, что качественный сон помогает восстановить силы и повысить эффективность работы в течение дня.

Магазин Comfort - это не просто магазин, где вы можете приобрести товары для сна, но и место, где вы можете получить квалифицированную консультацию от наших специалистов, которые помогут вам выбрать наилучшие товары для вас и ваших близких.

Благодарим вас за проявленный интерес к нашему магазину и ждем вас в Comfort, чтобы вы могли насладиться комфортом каждую ночь.</p>
            </div>
          </div>
        )}
        {showContacts && (
          <div className='modal-overlay' onClick={handleContactsClick}>
            <div className='modal'>
              
              <h2>Контакты</h2>

             <p>Наша команда готова ответить на ваши вопросы, принять заказы или просто пообщаться.</p>
             <p>Свяжитесь с нами по номеру:</p>
             <p>+7 928 453-26-37</p>

             <p>+7 918 103-02-87</p>
             <p>Либо вы можете лично посетить наш магазин по адресу:</p>
             <p>г. Сочи, Мамайский перевал, Тамбовский переулок, 2</p>
            </div>
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}