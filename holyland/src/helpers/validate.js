export const useValidate = () => {
  const checkingEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Empty value';
    } else if (!checkingEmail(email)) {
      return 'Incorrect format';
    }
  };

  const validatePassword = (pass) => {
    if (pass.length === 0) {
      return 'Empty value';
    } else if (pass.length < 6) {
      return 'County less 6 symbols';
    }
  };

  const validateOrder = (name, phone, details) => {
    const errors = {};
    if (name === '') {
      errors.name = 'Введите имя';
    } else {
      delete errors.name;
    }
    if (phone === '') {
      errors.phone = 'Введите телефон';
    } else if (isNaN(phone)) {
      errors.phone = 'Введите только цифры';
    } else {
      delete errors.phone;
    }
    if (details === '') {
      errors.details = 'Введите инфо';
    } else {
      delete errors.details;
    }
    return errors;
  };

  return {
    validateEmail,
    validatePassword,
    validateOrder,
  };
};
