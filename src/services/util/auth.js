import axios from 'axios';
import { BACKEND_URL_SERVER, BACKEND_URL_LOCAL } from '@env';

const url = `${BACKEND_URL_SERVER}/User/`;
const base_url = `${BACKEND_URL_SERVER}/`;

export async function createUser(email, password, fullname, phone) {
  const response = await axios
    .post(url + 'Register', {
      email: email,
      password: password,
      fullname: fullname,
      phone: phone
    })
    .then(function (response) {
      if (response.data.statusCode == 200) {
        const phone = response.data.responseData.user_phone;

        const userId = response.data.responseData.returnDetail[0].user_id;

        const registeringUserInfo = {
          phone: phone,
          userId: userId,
          isOkay: true
        };

        return registeringUserInfo;
      } else {
        console.log('Giriş Başarısız', response.data.responseData);
      }
    })
    .catch(function (error) {
      console.log('Giriş Başarısız');
    });

  return response;
}

export async function login(phone, password) {
  console.log(phone);
  const response = await axios
    .post(url + 'Login', {
      phone: phone,
      password: password
    })
    .then(function (response) {
      if (response.data.statusCode == 200) {
        console.log(response.data.responseData.token);
        return response.data.responseData.token;
      } else {
        console.log('Giriş Başarısız', response.data.responseData);
      }
    })
    .catch(function (error) {
      console.log('Giriş Başarısız');
    });

  return response;
}

export async function forgotPass(phone) {
  const response = await axios
    .post(url + 'ResetPassword-Request', {
      phone: phone
    })
    .catch(function (error) {
      if (
        error.response.status == 400 &&
        error.response.data.statusCode == 400
      ) {
        const alertMessage = error.response.data.responseData.msg;
        console.log('Giriş Başarısız', alertMessage);
      } else if (error.response.status == 500) {
        const alertMessage = error.response.data.error.responseData;
        console.log('Giriş Başarısız', alertMessage);
      } else {
        console.log('Giriş Başarısız!', 'Lütfen tekrar deneyiniz.');
      }
    });

  if (response.data.statusCode == 200) {
    return;
  }
}
export async function verificationPass(phone, code) {
  const response = await axios
    .post(url + 'ResetPassword', {
      phone: phone,
      code: code
    })
    .catch(function (error) {
      if (
        error.response.status == 400 &&
        error.response.data.statusCode == 400
      ) {
        const alertMessage = error.response.data.responseData;
        console.log('Giriş Başarısız', alertMessage);
      } else if (error.response.status == 500) {
        const alertMessage = error.response.data.error.responseData;
        console.log('Giriş Başarısız', alertMessage);
      } else {
        console.log('Giriş Başarısız!', 'Lütfen tekrar deneyiniz.');
      }
    });

  if (response.data.statusCode == 200) {
    const isOkay = true;
    return isOkay;
  }
}

export async function verificationRegis(userId, phone, code) {
  const response = await axios
    .post(url + 'Confirm-Register', {
      user_id: userId,
      phone: phone,
      code: code
    })
    .catch(function (error) {
      if (
        error.response.status == 400 &&
        error.response.data.statusCode == 400
      ) {
        const alertMessage = error.response.data.responseData;
        console.log('Giriş Başarısız', alertMessage);
      } else if (error.response.status == 500) {
        const alertMessage = error.response.data.error.responseData;
        console.log('Giriş Başarısız', alertMessage);
      } else {
        console.log('Giriş Başarısız!', 'Lütfen tekrar deneyiniz.');
      }
    });

  if (response.data.statusCode == 200) {
    const isOkay = true;
    return isOkay;
  }
}

export async function closeAccount(token) {
  console.log('tokenımız:' + token);
  const response = await axios
    .post(
      base_url + 'Users/Close-Acc',
      {},
      {
        headers: {
          Authorization: `Bearer ` + token
        }
      }
    )
    .then(function (response) {
      if (response.status === 200) {
        console.log(response.data);
        return response.data.responseData;
      }
    })
    .catch(function (error) {
      if (
        error.response.status == 400 &&
        error.response.data.statusCode == 400
      ) {
        const alertMessage = error.response.data.responseData.msg;
        console.log(' Başarısız', alertMessage);
      } else if (error.response.status == 500) {
        const alertMessage = error.response.data.error.responseData;
        console.log('Başarısız', alertMessage);
      } else {
        console.log(error.response);
        console.log(' Başarısız!', 'Lütfen tekrar deneyiniz.');
      }
    });
  return response;
}
