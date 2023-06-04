const HELPER_HTML_TEXT = `
<b>🚧 Помощь 🚧</b>
🛍️ Кнопка <b>"Наш магазин"</b> - запускает каталог, нашего магазина 🛍️
🚚 Кнопка <b>"Мои заказы"</b> - если у вас были или есть заказы, вы можете посмтреть их в этом разделе 🚚
💬 Кнопка <b>"Написать нам"</b> - вы можете написать нам в <a href="${process.env.TELEGRAM_ACCOUNT_MANAGER}">телеграм</a> или любую  <a href="${process.env.TAPLINK_URL}">другую социальную сеть</a> 💬
🚨 В случае каких либо багов или проблем с ботом, вы можете написать <a href="${process.env.TELEGRAM_ACCOUNT_MANAGER}">нам</a> 🚨
`;

const SECONDARY_KEYBOARD_HTML_TEXT = '<b>Заходи в наш интернет магазин по кнопке ниже</b>';

const OUR_CONTACTS_HTML_TEXT = '<b>📫 Наши контакты 📫</b>';

module.exports.HELPER_HTML_TEXT = HELPER_HTML_TEXT;
module.exports.OUR_CONTACTS_HTML_TEXT = OUR_CONTACTS_HTML_TEXT;
module.exports.SECONDARY_KEYBOARD_HTML_TEXT = SECONDARY_KEYBOARD_HTML_TEXT;
