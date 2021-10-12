'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';

    const response = await this.ctx.curl(url);

    const data = JSON.parse(response.data);
    // console.log(data);

    return data.result;
  }

  async getNewsContent(aid) {
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    // console.log(url);

    const response = await this.ctx.curl(url);
    // console.log(response);

    const data = JSON.parse(response.data);
    // console.log(data.result);

    return data.result;
  }
}

module.exports = NewsService;
