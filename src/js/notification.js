import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function myNotification() {
     const myError = error({
      text: 'Too many matches found. Please enter a more specific query!',
      type: 'info',
      styling: 'brighttheme',
      maxTextHeight: null,
      closerHover: true,
      animation: 'fade',
      delay: 2000,
      hide: true,
    });
}