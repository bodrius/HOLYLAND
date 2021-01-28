import React from 'react';
import deliveryPhoto from '../../assets/img/besplatno.jpg';
import deliveryPhotoDesk from '../../assets/img/dostavka.jpg';
import useWindowDimension from '../../hooks/useWindowDimension';

const HowOrder = () => {
  const { width } = useWindowDimension();

  return (
    <>
      {width >= 1024 ? (
        <section style={{backgroundColor:'fff'}}>
          <div style={{ fontSize: 14 }}>
            <h2 style={{ marginBottom: 10 }}>Информация о доставке и оплате</h2>
            <p>Доставку заказов мы осуществляем по всей территории Украины.</p>
            <div style={{ marginBottom: 10 }}>
              <p>
                После оформления заказа с Вами свяжется наш менеджер,для подтверждения заказа,
                согласования условий, сроков и времени отправки Вашего заказа.
              </p>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontWeight: 600 }}>
                Получите бесплатную консультацию косметолога перед заказом.
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontWeight: 600 }}>
                Отправка по Украине осуществляется компанией "Нова Пошта" БЕСПЛАТНО!
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <p>
                На следующий рабочий день после оформления заказа Ваша посылка передается
                перевозчику. Время доставки по Украине не более 3-х рабочих дней в зависимости от
                региона.
              </p>
            </div>
            <div style={{ marginBottom: 10, fontWeight: 600 }}>
              <h5 style={{ fontSize: 14 }}>Способы оплаты:</h5>
              <p>Оплата заказа на карту Приват Банка (без комиссии).</p>
              <p>Полная предоплата заказа!</p>
            </div>
          </div>
          <img
            style={{ marginRight: 20, marginBottom: 20 }}
            alt='holyland'
            width='100%'
            height='auto'
            src={deliveryPhotoDesk}
          />
        </section>
      ) : (
        <section>
          <div style={{ fontSize: 12 }}>
            <h3 style={{ marginBottom: 10 }}>Информация о доставке и оплате</h3>
            <p>Доставку заказов мы осуществляем по всей территории Украины.</p>
            <div style={{ marginBottom: 10 }}>
              <p>
                После оформления заказа с Вами свяжется наш менеджер,для подтверждения заказа,
                согласования условий, сроков и времени отправки Вашего заказа.
              </p>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontWeight: 600 }}>
                Получите бесплатную консультацию косметолога перед заказом.
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontWeight: 600 }}>
                Отправка по Украине осуществляется компанией "Нова Пошта" БЕСПЛАТНО!
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <p>
                На следующий рабочий день после оформления заказа Ваша посылка передается
                перевозчику. Время доставки по Украине не более 3-х рабочих дней в зависимости от
                региона.
              </p>
            </div>
            <div style={{ marginBottom: 10, fontWeight: 600 }}>
              <h5 style={{ fontSize: 12 }}>Способы оплаты:</h5>
              <p>Оплата заказа на карту Приват Банка (без комиссии).</p>
              <p>Полная предоплата заказа!</p>
            </div>
          </div>
          <img
            style={{ marginRight: 20, marginBottom: 20 }}
            alt='holyland'
            width='100%'
            height='auto'
            src={deliveryPhoto}
          />
        </section>
      )}
    </>
  );
};

export default HowOrder;
