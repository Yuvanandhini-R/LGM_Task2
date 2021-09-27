import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Users</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Advik Viraj'
              label='Premium member'
              path='/'
            />
            <CardItem
              src='images/2.jpg'
              text='Olivia Calsier'
              label='Premium member'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Sofia George'
              label='Gold member'
              path='/'
            />
            <CardItem
              src='images/4.jpg'
              text='Savannah'
              label='Gold member'
              path='/'
            />
            <CardItem
              src='images/5.jpg'
              text='Yatin Onkar'
              label='Gold member'
              path='/'
            />
            <CardItem
              src='images/6.jpg'
              text='Tuhin Umang'
              label='Gold member'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/7.jpg'
              text='Lucas Grabeel Till'
              label='Silver member'
              path='/'
            />
            <CardItem
              src='images/8.jpg'
              text='Viyuthri Arya'
              label='Silver member'
              path='/'
            />
            <CardItem
              src='images/9.jpg'
              text='Isabella'
              label='Silver member'
              path='/'
            />
            <CardItem
              src='images/10.jpg'
              text='Katherine Auruban'
              label='Silver member'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
