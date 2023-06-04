require('dotenv').config();
const path = require('path');
const TelegrafI18n = require('telegraf-i18n');
const { match } = require('telegraf-i18n');
const { Telegraf } = require('telegraf');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const { MAIN_KEYBOARDS_COMMAND } = require('./utils/constant');
const { asyncWrapper } = require('./utils/errorHelper');
const { getPosts } = require('./actions/postActions');
const { getWriteUsText } = require('./actions/writeUsAction');
const { getOrderString } = require('./utils/postHelper');
const { startCommand, helperCommand } = require('./actions/commandAction');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN_BOT);

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

mongoose.connection.on('open', () => {
  const i18n = new TelegrafI18n({
    defaultLanguage: 'ru',
    directory: path.resolve(__dirname, 'locales/json'),
    useSession: true,
    allowMissing: false,
    sessionName: 'session',
  });

  bot.use(i18n.middleware());

  bot.start(asyncWrapper(startCommand(bot)));

  bot.help(asyncWrapper(helperCommand(bot)));

  bot.hears(
    match('keyboards.main_keyboard.my_orders'),
    asyncWrapper(
      getPosts(
        MAIN_KEYBOARDS_COMMAND.myOrders,
        bot,
      ),
    ),
  );

  bot.hears(
    match('keyboards.main_keyboard.write_us'),
    asyncWrapper(
      getWriteUsText(bot),
    ),
  );

  bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
});

app.post('/order', async (req, res) => {
  const { deliveryInfo, userInfo, ordersInfo } = req.body;

  try {
    const message = getOrderString({ deliveryInfo, userInfo, ordersInfo });
    const adminsChatId = process.env.TELEGRAM_ADMINS_CHATID.split(' ');

    adminsChatId.forEach(adminChatId => bot.telegram.sendMessage(adminChatId, message));

    return res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
});

app.listen(process.env.PORT, () => console.log('server started on PORT ' + process.env.PORT));
