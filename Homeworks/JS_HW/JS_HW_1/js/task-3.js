const ADMIN_PASSWORD = prompt('enter your password');
let message;

if (ADMIN_PASSWORD === null) message = 'Скасовано користувачем!';
else if (ADMIN_PASSWORD === 'jqueryismyjam') message = 'Ласкаво просимо!';
else message = 'Доступ заборонений, невірний пароль!';

alert(message);