'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    // const { serverUrl, pageSize } = this.config.mysql;

    console.log(this.config.mysql);

    const user = await this.app.mysql.select('user')

    return user.map(item => item);
  }
}

module.exports = NewsService;
