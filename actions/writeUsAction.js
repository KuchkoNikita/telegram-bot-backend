const { SECONDARY_KEYBOARD_HTML_TEXT } = require('../locales/ruHtmlText');
const { getWriteUsKeyboard } = require('../utils/keyboardHelper');

const getWriteUsText = () => async (ctx) => {
  const keyboard = getWriteUsKeyboard(ctx);

  await ctx.replyWithHTML(SECONDARY_KEYBOARD_HTML_TEXT, keyboard);
};


module.exports.getWriteUsText = getWriteUsText;
