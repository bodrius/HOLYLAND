import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import useWindowDimension from '../../hooks/useWindowDimension';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '85%',
    height: '75%',
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ConsultButton = () => {
  const classes = useStyles();
  const { width, height } = useWindowDimension();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitOrder = (e) => {
    setOpen(false);
  };

  const body = (
    <div
      className={classes.paper}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <div>
        <h4
          style={{
            fontSize: width >= 768 ? (width >= 1024 ? 45 : 32) : 22,
            marginBottom: width >= 768 ? 85 : 30,
            textAlign: 'center',
          }}>
          Задайте свой вопрос прямо сейчас
        </h4>
      </div>
      <div
        style={{
          display: 'flex',
          width: width >= 768 ? '70%' : '100%',
          justifyContent: 'space-between',
          marginBottom: 100,
        }}>
        <a
          style={{ color: '#000', textDecoration: 'none' }}
          href='https://t.me/jurlia'
          rel='noreferrer'
          target='_blank'>
          <TelegramIcon style={{ fontSize: width >= 1024 ? 70 : 50 }} />
        </a>
        <a
          style={{ color: '#000', textDecoration: 'none' }}
          href='https://instagram.com/yuliana_holyland?igshid=15lcgcyt4x479'
          rel='noreferrer'
          target='_blank'>
          <InstagramIcon style={{ fontSize: width >= 1024 ? 70 : 50 }} />
        </a>
        <a
          style={{ color: '#000', textDecoration: 'none' }}
          href='https://www.facebook.com/profile.php?id=100015128460561'
          rel='noreferrer'
          target='_blank'>
          <FacebookIcon style={{ fontSize: width >= 1024 ? 70 : 50 }} />
        </a>
      </div>

      <Button
        onClick={submitOrder}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          marginBottom: 30,
          padding: 10,
          fontSize: width >= 1024 ? 20 : 16
        }}
        endIcon={<CloseOutlinedIcon />}>
        Закрыть
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: height > 666 ? (height >= 1024 ? 20 : 13) : 10,
        }}
        endIcon={<ContactSupportOutlinedIcon />}>
        Консультация
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {body}
      </Modal>
    </div>
  );
};

export default ConsultButton;
