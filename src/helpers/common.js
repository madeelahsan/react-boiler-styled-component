/* eslint-disable no-plusplus */
import Compress from 'react-image-file-resizer';

export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;

  return true;
};

export const getCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const clearCookie = name => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

  return true;
};

export const compressImage = file =>
  new Promise(resolve => {
    Compress.imageFileResizer(
      file,
      Infinity,
      Infinity,
      'JPEG',
      70,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });

export const capitalize = str => {
  const arr = str.toLowerCase().split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(' ');
  return str2;
};

export const getStatusIconClass = (status = '') => {
  switch (status.trim().toLowerCase()) {
    case 'pending' || 'processing':
      return 'icon-clock';
    case 'approved':
      return 'icon-check-circle';
    case 'rejected':
      return 'icon-error-circle';
    case 'cancelled':
      return 'icon-times-circle';
    default:
      return 'icon-warning';
  }
};
export const getDateObject = e => {
  const date = new Date(e);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date?.getTime())) return new Date();
  return date;
};
