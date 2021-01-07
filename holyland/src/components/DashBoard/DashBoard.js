import React from 'react';
import mainPhoto from '../../assets/img/maxresdefault.jpg';
import mainPhotoMob from '../../assets/img/beautiful-caucasian-woman-face-portrait-beautiful-beauty-young-female-model-girl-smooth-cleaning-her-face-over-white-background_1258-2243.jpg'
import useWindowDimension from '../../hooks/useWindowDimension';
import {OrderButton} from '../OrderButton/OrderButton'

const DashBoard = () => {
  const { width } = useWindowDimension();

  return (
    <div>
      {width < 767 ? (
        <>
          <img alt='holyland' width='100%' height='auto' src={mainPhotoMob} />
          <OrderButton/>
        </>
      ) : (
        <div>
          <img alt='holyland' width='100%' height='auto' src={mainPhoto} />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
