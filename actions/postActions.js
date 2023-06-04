const { Markup } = require('telegraf');

const { asyncWrapper } = require('../utils/errorHelper');
const { MAIN_KEYBOARDS_COMMAND } = require('../utils/constant');
const { getPostsString } = require('../utils/postHelper');
const Post = require('../models/Post');

const getPostsName = (postsType, ctx) => {
  switch (postsType) {
  case MAIN_KEYBOARDS_COMMAND.myOrders:
    return ctx.i18n.t('keyboards.main_keyboard.store');
  default:
    return 'Аирдропы';
  }
};

const getPosts = (postsType, bot) => async (ctx) => {
  const { message_id } = await ctx.reply('Идет загрузка подожди !');

  const posts = await Post.find({ type: postsType });

  const postTitles = posts.map((post, index) => {
    const idButton = `${post.projectName}-${index}`;

    bot.action(idButton, asyncWrapper(async (ctx) => {
      const stringPost = getPostsString(post);

      await ctx.replyWithHTML(stringPost);
    }));

    return [Markup.button.callback(post.projectName, idButton)];
  });

  if (postTitles.length) {
    await ctx.replyWithHTML(
      `<b>${getPostsName(postsType, ctx)}</b>`,
      Markup.inlineKeyboard(postTitles),
    );
  } else {
    await ctx.reply('Ничего не найденно !');
  }

  await ctx.deleteMessage(message_id);
};

module.exports.getPosts = getPosts;
