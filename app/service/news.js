'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';

    const response = await this.ctx.curl(url);

    const data = JSON.parse(response.data);

    return data.result;
  }

  async getNewsContent(aid) {
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;

    const response = await this.ctx.curl(url);

    const data = JSON.parse(response.data);

    return data.result;
  }
}

module.exports = NewsService;
