const moment = require('moment');

const getPostsString = (post) => {
  const postLinks = post.links.map((link) => `<a href="${link.link}">${link.title}</a>`);

  return `
<b>${post.projectName}</b>

Время по какое можно его взять:
C ${moment(post.data.dataFrom).format('DD.MM.YYYY')}
До ${moment(post.data.dataUntil).format('DD.MM.YYYY')}

Cтатус: ${post.type}
Снимок сделан: 5 мая 2022
Распределение: Взвешенное

Сеть: ${post.details.chain}
Общее количество монет: ${post.details.genesisSupply}
Процент распределения: ${post.details.distributionPercentage}

Требования:
${post.requirements.map((requirement) => `${requirement.coinName} ${moment(requirement.storageDate).format('DD.MM.YYYY')} ${requirement.platform} \n`)}

Ссылки:
${postLinks.join('\n')}`;
};

const getInfoOrderString = ({name, id, price, texture}) => `
${id}: Имя: ${name} Цена: ${price} Текстура: ${texture}
`;

const getOrderString = ({ deliveryInfo, userInfo, ordersInfo }) => {
  const { name, phone, email, index, address, comment, usernameTelegram } = userInfo;

  const orderInfoString = ordersInfo
    .map((orderInfo, index) => getInfoOrderString({
      ...orderInfo,
      id: index + 1,
    }))
    .join('');

  return `
❗ Новый заказ: ${deliveryInfo} ❗

Информация о человеке

Имя: ${name || 'Нету информации'}
Никнейм в телеграмм: ${usernameTelegram || 'Нету информации'}

Телефон: ${phone || 'Нету информации'}
Почта: ${email || 'Нету информации'}

Индес: ${index || 'Нету информации'}
Адрес: ${address || 'Нету информации'}

Комментарий: ${comment || 'Нету информации'}

Заказ:
${orderInfoString}
`;
};

module.exports.getPostsString = getPostsString;
module.exports.getOrderString = getOrderString;
