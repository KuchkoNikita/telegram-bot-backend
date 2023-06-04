const { Markup } = require('telegraf');
const { MAIN_KEYBOARDS_COMMAND } = require('../utils/constant');

const getDefaultKeyboard = (ctx) => (
  [[
    Markup.button.webApp(ctx.i18n.t('keyboards.main_keyboard.store'), process.env.TELEGRAM_WEB_APP),
    Markup.button.callback(ctx.i18n.t('keyboards.main_keyboard.my_orders'), MAIN_KEYBOARDS_COMMAND.myOrders),
  ],
  [Markup.button.url(ctx.i18n.t('keyboards.main_keyboard.write_us'), process.env.TELEGRAM_ACCOUNT_MANAGER)],
  ]
);

const getMainKeyboard = (ctx) => {
  const keyboard = getDefaultKeyboard(ctx);

  return Markup.keyboard(keyboard).resize();
};

const getSecondaryKeyboard = (ctx) => {
  const keyboard = getDefaultKeyboard(ctx);

  return Markup.inlineKeyboard(keyboard);
};

const getWriteUsKeyboard = (ctx) => {
  return Markup.inlineKeyboard([
    [
      Markup.button.url(ctx.i18n.t('keyboards.write_us_keyboard.instagram'), process.env.INSTAGRAM_WEB_LINK),
      Markup.button.url(ctx.i18n.t('keyboards.write_us_keyboard.vkontakte'), process.env.VKONTAKTE_LINK)
    ],
    [Markup.button.url(ctx.i18n.t('keyboards.write_us_keyboard.telegram'), process.env.TELEGRAM_ACCOUNT_MANAGER)],
  ]);
};

module.exports.getMainKeyboard = getMainKeyboard;
module.exports.getWriteUsKeyboard = getWriteUsKeyboard;
module.exports.getSecondaryKeyboard = getSecondaryKeyboard;
