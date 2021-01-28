import React from 'react';
import mainPhotoMob from '../../assets/img/holy-land-page.jpg';
import useWindowDimension from '../../hooks/useWindowDimension';

const Price = () => {
  const { width, height } = useWindowDimension();

  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: 5 }}>КАТАЛОГ ТОВАРОВ</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <p style={{ marginBottom: 20 }}>Здесь представлены все линии нашей косметики и цены</p>
        <img
          style={{ marginBottom: width > 1200 ? 30 : 90 }}
          alt='holyland products'
          width='100%'
          height='auto'
          src={mainPhotoMob}
        />
        <button
          style={{ width: 200, height: 50, backgroundColor: 'black', borderRadius: 5, border: 0 
          
          }}>
          <a
            style={{ color: 'white', fontWeight: '700', textDecoration: 'none', fontSize:18 }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://docs.google.com/spreadsheets/d/10C5gh_a3-myW30F6B3qw5GcQC2DxrsfjqEx7pLkvT5E/edit#gid=0'>
            ОТКРЫТЬ КАТАЛОГ
          </a>
        </button>
      </div>
    </section>
  );
};

export default Price;
