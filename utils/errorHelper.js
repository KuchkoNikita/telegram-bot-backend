const asyncWrapper = (fn) => {
  return async function(ctx) {
    try {
      return await fn(ctx);
    } catch (error) {
      await ctx.replyWithMarkdown(ctx.i18n.t('scenes.error'));
    }
  };
};

module.exports.asyncWrapper = asyncWrapper;
