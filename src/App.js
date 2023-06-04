import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [], /*массив для товаров внутри корзины */
      currentItems: [], /*массив для запрашиваемых товаров  */
      items: [
        {
          id: 1,
          title: 'Постельное белье Alanna 001 розово-коричневое',
          img: '1.jpg',
          desc: '1,5спальное; Пододеяльник: 150 х 220 - 1 шт (на молнии) Простыни: 150 х 220 - 1 шт Наволочки: 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2000'
        },
        {
          id: 2,
          title: 'Постельное белье Alanna 004 зеленое',
          img: '2.jpg',
          desc: '1,5спальное; Пододеяльник: 150 х 220 - 1 шт (на молнии) Простыня: 150 х 220 - 1 шт Наволочки: 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2000'
        },
        {
          id: 5,
          title: 'Постельное белье Alanna 028 серо-розовое',
          img: '5.jpg',
          desc: 'Мини-евро; Пододеяльник: 220 х 220 - 1 шт (на молнии) Простыня: 220 х 240 - 1 шт Наволочки: 50 х 70 - 2 шт и 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2000'
        },
        {
          id: 6,
          title: 'Постельное белье Alanna 019 синее',
          img: '6.jpg',
          desc: 'Мини-евро; Пододеяльник: 220 х 220 - 1 шт (на молнии) Простыня: 220 х 240 - 1 шт Наволочки: 50 х 70 - 2 шт и 70 х 70 - 2 шт',
          category: 'bed linen',
          price: '2000'
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
          price: '1700'
        },
        {
          id: 23,
          title: 'Подушка для сна из бамбука ',
          img: '23.jpg',
          desc: '50 х 70 см Состав наполнителя: бамбуковое волокно, высокосиликонизированное микроволокно.',
          category: 'pillows and blankets',
          price: '1700'
        },
        {
          id: 24,
          title: 'Подушка для сна из бамбука ',
          img: '23.jpg',
          desc: '70 х 70 см Состав наполнителя: бамбуковое волокно, высокосиликонизированное микроволокно.',
          category: 'pillows and blankets',
          price: '1700'
        },
        {
          id: 25,
          title: 'Покрывало',
          img: '25.jpg',
          desc: '200 х 230 см; Состав наполнителя: бамбуковое волокно, высокосиликонизированное микроволокно.',
          category: 'cover',
          price: '2800'
        },
        {
          id: 26,
          title: 'Покрывало',
          img: '26.jpg',
          desc: '1,5спальное 250 х 200 см; Состав: 100% хлопок',
          category: 'cover',
          price: '3100'
        },
        {
          id: 27,
          title: 'Покрывало',
          img: '27.jpg',
          desc: '1,5спальное 250 х 200 см; Состав: 100% хлопок',
          category: 'cover',
          price: '3300'
        },
        {
          id: 28,
          title: 'Покрывало',
          img: '28.jpg',
          desc: '200х230см; Состав: соевое волокно ',
          category: 'cover',
          price: '3800'
        },
        {
          id: 29,
          title: 'Покрывало',
          img: '29.jpg',
          desc: '200х230см; Состав:соевое волокно ',
          category: 'cover',
          price: '3800'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items /*все  товары  */
    this.addToOrder = this.addToOrder.bind(this) /*взаимодействие с состояниями */
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems}  onAdd={this.addToOrder} />

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

    chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}

addToOrder(item) { /*добавить заказ */
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)  
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;

