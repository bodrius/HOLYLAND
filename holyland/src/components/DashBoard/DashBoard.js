import React from 'react';
import mainPhoto from '../../assets/img/1234.jpg';
import mainPhotoDesktop from '../../assets/img/photo_2021-01-21 14.07.31.jpeg'
import mainPhotoMob from '../../assets/img/beautiful-caucasian-woman-face-portrait-beautiful-beauty-young-female-model-girl-smooth-cleaning-her-face-over-white-background_1258-2243 копия.jpg';
import useWindowDimension from '../../hooks/useWindowDimension';
import { OrderButton } from '../OrderButton/OrderButton';
import ConsultButton from '../ConsultButton/ConsultButton';

const DashBoard = () => {
  const { width, height } = useWindowDimension();

  return (
    <div>
      {width < 767 ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}>
          <img
            style={{ marginBottom: height > 666 ? (height >= 812 ? 45 : 25) : 10 }}
            alt='holyland'
            width='100%'
            height='auto'
            src={mainPhotoMob}
          />
          <h4
            style={{
              textAlign: 'center',
              marginBottom: height > 666 ? (height >= 812 ? 55 : 25) : 20,
              fontSize: height > 666 ? 16 : 12,
            }}>
            Получи бесплатную консультацию профессионального косметолога перед покупкой продукции.
          </h4>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: 0 }}>
            <ConsultButton />
            <OrderButton />
          </div>
        </div>
      ) : width >= 768 && width <= 1024 ? (
        <div>
          <img
            style={{ marginBottom: 10 }}
            alt='holyland'
            width='100%'
            height='auto'
            src={mainPhoto}
          />
          <h4 style={{ textAlign: 'center', marginBottom: 25, fontSize: 25 }}>
            Получи бесплатную консультацию профессионального косметолога перед покупкой продукции
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ConsultButton />
            <OrderButton />
          </div>
        </div>
      ) : (
        <div>
          <img
            alt='holyland'
            width='100%'
            height='auto'
            src={mainPhotoDesktop}
          />
          <h4 style={{ textAlign: 'center', marginBottom: 65, fontSize: 30, position:"absolute", top:140, left:100, zIndex:999, width: 650 }}>
            ПОЛУЧИ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПРОФЕССИОНАЛЬНОГО КОСМЕТОЛОГА ПЕРЕД ПОКУПКОЙ ПРОДУКЦИИ
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-around', position:"absolute", top:320, left:150, zIndex:999, width: 550}}>
            <ConsultButton />
            <OrderButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
