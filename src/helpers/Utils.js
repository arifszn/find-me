import { notification, message as tinyMessage } from 'antd';

/**
 * Display notification
 * 
 * @param string message 
 * @param string type 
 * @param string/null title 
 * @param boolean sticky 
 */
const showNotification = (message = 'Something went wrong', type = 'error', title = null, sticky = false) => {
    notification[type]({
        message: title ? title : type[0].toUpperCase() + type.slice(1),
        description: message,
        placement: 'bottomRight',
        duration: sticky ? 0 : 4.5
    });
};

/**
 * Display tiny notification
 * 
 * @param string message 
 * @param string type 
 */
const showTinyNotification = (message = 'Something went wrong', type = 'error') => {
    tinyMessage[type](message);
};

/**
 * Return app name
 */
const getAppName = () => {
    return 'Face Finder';
}

/**
 * Ellipse long test
 * 
 * @param string str 
 * @param number length 
 * @param string ending 
 */
const textEllipsis = (str, length, ending = '...') => {
    if (length == null) {
      length = 100;
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
};

/**
 * Return a random color code in hex format
 */
const randomHexColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

/**
 * Utility helper
 */
const Utils = {
    showNotification,
    showTinyNotification,
    textEllipsis,
    randomHexColor,
    getAppName,
}

export default Utils;