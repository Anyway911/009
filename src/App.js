import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [], /*массив для товаров внутри корзины*/
      currentItems: [], /*массив для запрашиваемых товаров*/
      items: [
        {
          id: 1,
          title: 'Постельное белье Alanna 001 розово-коричневое',
          img: '1.jpg',
          desc: '1,5спальное; Пододеяльник: 150 х 220 - 1 шт (на молнии) Простыни: 150 х 220 - 1 шт Наволочки: 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2200'
        },
        {
          id: 2,
          title: 'Постельное белье Alanna 004 зеленое',
          img: '2.jpg',
          desc: '1,5спальное; Пододеяльник: 150 х 220 - 1 шт (на молнии) Простыня: 150 х 220 - 1 шт Наволочки: 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2200'
        },
        {
          id: 5,
          title: 'Постельное белье Alanna 028 серо-розовое',
          img: '5.jpg',
          desc: 'Евро; Пододеяльник: 220 х 220 - 1 шт (на молнии) Простыня: 220 х 240 - 1 шт Наволочки: 50 х 70 - 2 шт и 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '3500'
        },
        {
          id: 6,
          title: 'Постельное белье Alanna 019 синее',
          img: '6.jpg',
          desc: 'Евро; Пододеяльник: 220 х 220 - 1 шт (на молнии) Простыня: 220 х 240 - 1 шт Наволочки: 50 х 70 - 2 шт и 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '3500'
        },
      {
        id: 7,
        title: 'Постельное белье Ивтекс В-510',
        img: '7.jpg',
        desc: 'Семейный; Пододеяльник: 150 х 215bсм (2шт.) Простыня: 240 х 220 см (1шт.) Наволочки: 70 х 70 см (2шт.) и 50 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 8,
        title: 'Постельное белье Ивтекс B-449',
        img: '8.jpg',
        desc: 'Евро; Пододеяльник: 200 х 220 см (1шт.) Простыня: 240 х 220 см (1шт.) Наволочки: 70 х 70 см (2шт.) и 50 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 9,
        title: 'Постельное белье Ивтекс В-157',
        img: '9.jpg',
        desc: '2,0-спальный; Пододеяльник: 180 х 215 см (1шт.) Простыня: 200 х 220 см (1шт.) Наволочки: 70 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 10,
        title: 'Постельное белье  Ивтекс B-477',
        img: '10.jpg',
        desc: '1,5-спальный; Пододеяльник: 150 х 215 см (1шт.) Простыня: 150 х 215 см (1шт.) Наволочки: 70 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 11,
        title: 'Постельное белье Ивтекс В-326',
        img: '11.jpg',
        desc: '1,5-спальный; Пододеяльник: 150 х 215 см (1шт.) Простыня: 150 х 215 см (1шт.) Наволочки: 70 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 12,
        title: 'Постельное белье Ивтекс Твил Сатин 2205',
        img: '12.jpg',
        desc: 'Евро; Пододеяльник: 200 х 220 см (1шт.) Простыня: 245 х 265 см (1шт.) Наволочки: 70 х 70 см (2шт.) и 50 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 13,
        title: 'Постельное белье Ивтекс А-074',
        img: '13.jpg',
        desc: '2,0-спальный; Пододеяльник: 180 х 215 см (1шт.) Простыня: 200 х 220 см (1шт.) Наволочки: 70 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 14,
        title: 'Постельное белье Ивтекс Сатин 2198',
        img: '14.jpg',
        desc: '1,5-спальный; Пододеяльник: 150 х 215 см (1шт.) Простыня: 150 х 215 см (1шт.) Наволочки: 70 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 15,
        title: 'Постельное белье E-shine сатин хлопок однотонное',
        img: '15.jpg',
        desc: 'Евро; Пододеяльник: 200 х 220 см (1шт.) Простыня: 220 х 240 см (1шт.) Наволочки: 70 х 70 см (2шт.) и 50 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 16,
        title: 'Постельное белье Lisett',
        img: '16.jpg',
        desc: 'Евро макси; Пододеяльник: 220 х 240 см (1шт.) Простыня: 240 х 260 см (1шт.) Наволочки: 70 х 70 см (2шт.) и 50 х 70 см (2шт.)',
        category: 'bed linen',
        price: '2000'
      },
      {
        id: 17,
        title: 'Одеяло Хлопок Русская сказка (стандарт) ',
        img: '17.jpg',
        desc: '1,5спальное Материал наполнителя: высокосиликонизированное микроволокно ',
        category: 'pillows and blankets',
        price: '1900'
      },
      {
        id: 18,
        title: 'Одеяло Хлопок Русская сказка (стандарт) ',
        img: '17.jpg',
        desc: '2,0спальное Материал наполнителя: высокосиликонизированное микроволокно ',
        category: 'pillows and blankets',
        price: '2100'
      },
      {
        id: 19,
        title: 'Одеяло Хлопок Русская сказка (стандарт) ',
        img: '17.jpg',
        desc: 'Евро Материал наполнителя: высокосиликонизированное микроволокно ',
        category: 'pillows and blankets',
        price: '2400'
      },
      {
        id: 20,
        title: 'Одеяло Бамбук Лавртекс (стандарт)',
        img: '20.jpg',
        desc: '1,5спальное Материал наполнителя: бамбуковое волокно',
        category: 'pillows and blankets',
        price: '1400'
      },
      {
        id: 21,
        title: 'Одеяло Бамбук Лавртекс (стандарт)',
        img: '20.jpg',
        desc: '2,0спальное Материал наполнителя: бамбуковое волокно',
        category: 'pillows and blankets',
        price: '1500'
      },
      {
        id: 22,
        title: 'Одеяло Бамбук Лавртекс (стандарт)',
        img: '20.jpg',
        desc: 'Евро Материал наполнителя: бамбуковое волокно',
        category: 'pillows and blankets',
        price: '1500'
      }
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.addToOrder = this.addToOrder.bind(this); /*взаимодействие с состояниями*/
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.state.currentItems = this.state.items; /*все  товары*/
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} 
        onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState(prevState => {
      return { fullItem: item, showFullItem: !prevState.showFullItem }
    });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
    } else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      });
    }
  }

  deleteOrder(id) {
    const newOrders = this.state.orders.filter(order => order.id !== id);
    this.setState({ orders: newOrders });
  }

  addToOrder(item) {
    const orderIndex = this.state.orders.findIndex(order => {
      // проверяем, есть ли объект в массиве заказов с такими же свойствами, включая количество
      let equal = true;
      Object.keys(item).forEach(key => {
        if (key !== 'count') {
          equal = equal && (item[key] === order[key]);
        }
      });
      equal = equal && (item.count === order.count + 1);
      return equal;
    });
  
    if (orderIndex !== -1) {
      // объект уже есть в массиве заказов, увеличиваем количество на 1
      const newOrders = [...this.state.orders];
      newOrders[orderIndex] = {...item, count: newOrders[orderIndex].count + 1}
      this.setState({ orders: newOrders });
    } else {
      // объекта еще нет в массиве заказов, добавляем его
      this.setState(prevState => ({ orders: [...prevState.orders, {...item, count: 1}]}));
    }
  }
}

export default App;

