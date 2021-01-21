import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useValidate } from '../../helpers/validate';
import useWindowDimension from '../../hooks/useWindowDimension';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paper: {
    backgroundColor: '#fff',
    borderRadius: 3,
  },
}));

export function OrderButton() {
  const classes = useStyles();
  const validate = useValidate();
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState({});
  const { width, height } = useWindowDimension();

  const handleToggleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValidation({});
  };

  const [values, setValues] = useState({
    name: '',
    phone: '',
    details: '',
  });

  const handleNameChange = (prop) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [prop]: value });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const errors = validate.validateOrder(values.name, values.phone, values.details);
    if (Object.keys(errors).length > 0) {
      setValidation(errors);
    } else {
      setValidation({});
      setValues({
        name: '',
        phone: '',
        details: '',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleToggleModal}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          marginBottom: 30,
          fontSize: height > 666 ? (height >= 1024 ? 20 : 13) : 10,
          fontWeight: 'bold',
        }}
        endIcon={<ShoppingCartOutlinedIcon />}>
        Заказать
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}>
        <Fade in={open}>
          <div
            className={classes.paper}
            style={{ width: width >= 768 ? (width >= 1024 ? '30%' : '70%') : '97%' }}>
            <h2
              style={{
                fontSize: 17,
                textAlign: 'center',
                marginBottom: 20,
                marginTop: width >= 768 ? 50 : 20,
              }}
              id='transition-modal-title'>
              ОФОРМЛЕНИЕ ЗАКАЗА
            </h2>

            <form noValidate autoComplete='off'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <TextField
                  id='outlined-multiline-flexible'
                  multiline
                  rowsMax={4}
                  onChange={handleNameChange('name')}
                  variant='outlined'
                  size='small'
                  style={{ marginBottom: 25 }}
                  required
                  error={validation.name ? true : false}
                  label={validation.name ? validation.name : 'Имя'}
                />
                <TextField
                  id='outlined-textarea'
                  multiline
                  variant='outlined'
                  size='small'
                  style={{ marginBottom: 25 }}
                  required
                  onChange={handleNameChange('phone')}
                  error={validation.phone ? true : false}
                  label={validation.phone ? validation.phone : 'Телефон'}
                />
                <TextField
                  id='outlined-multiline-static'
                  multiline
                  rows={7}
                  defaultValue='Название/код продукта:'
                  variant='outlined'
                  style={{ marginBottom: 25 }}
                  required
                  onChange={handleNameChange('details')}
                  error={validation.details ? true : false}
                  label={validation.details ? validation.details : 'Информация'}
                />

                <Button
                  onClick={submitOrder}
                  style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: width >= 768 ? 50 : 30,
                    padding: 10,
                    paddingLeft: 30,
                    paddingRight: 30,
                  }}
                  endIcon={<SendOutlinedIcon />}>
                  Отправить заказ
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
