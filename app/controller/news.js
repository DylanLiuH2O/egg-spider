'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const newsList = await this.ctx.service.news.getNewsList();

    await this.ctx.render('news', {
      list: newsList,
    });
  }

  async content() {
    const aid = this.ctx.query.aid;
    
    const list = await this.ctx.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent', {
      list,
    });
  }
}

module.exports = NewsController;
