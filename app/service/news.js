'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    let url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';

    let response = await this.ctx.curl(url);

    let data = JSON.parse(response.data);
    // console.log(data);

    return data.result;
  }

  async getNewsContent(aid) {
    let url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    // console.log(url);

    let response = await this.ctx.curl(url);
    // console.log(response);

    let data = JSON.parse(response.data);
    // console.log(data.result);

    return data.result;
  }
}

module.exports = NewsService;
