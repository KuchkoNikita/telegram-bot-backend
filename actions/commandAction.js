const { getMainKeyboard, getSecondaryKeyboard } = require('../utils/keyboardHelper');
const { HELPER_HTML_TEXT, SECONDARY_KEYBOARD_HTML_TEXT } = require('../locales/ruHtmlText');
const { User } = require('../models/User');

const startCommand = () => async (ctx) => {
  // const uid = ctx.from.id;
  // const user = await User.findById(uid);

  await ctx.i18n.locale('ru');

  const secondaryKeyboard = getSecondaryKeyboard(ctx);
  const mainKeyboard = getMainKeyboard(ctx);

  await ctx.reply(ctx.i18n.t('scenes.start'), mainKeyboard); 
  await ctx.replyWithHTML(SECONDARY_KEYBOARD_HTML_TEXT, secondaryKeyboard);
};

const helperCommand = () => async (ctx) => {
  await ctx.replyWithHTML(HELPER_HTML_TEXT);
};

module.exports.startCommand = startCommand;
module.exports.helperCommand = helperCommand;
