import React, {useState, useContext } from 'react'

import { ShopContext } from '../context/ShopContext'
import Card from './Card'


const Cards = () => {

    const item = {
        id: 0,
        attributes: {
            name:"Bricktopian",
            price:2,
            src: "https://media2.giphy.com/media/44VeDB0HHAptBgLIUt/giphy.gif?cid=ecf05e47gbkz6ek1eqww5ds1i2kxbx2bmtw6o8h0zbjo2zx5&rid=giphy.gif&ct=g"

        }
    }

const styles={
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
}


  return (
    <div className={styles.container}>
    <div className={styles.title}>New Release</div>
    <div className={styles.cards}>
        <Card key = {item.id} item= {item.attributes}/>
    </div>
    </div>
  )
}

export default Cards