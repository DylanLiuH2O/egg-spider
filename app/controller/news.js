'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    let newsList = await this.ctx.service.news.getNewsList();

    await this.ctx.render('news', {
      list: newsList,
    });
  }

  async content() {
    let aid = this.ctx.query.aid;
    
    let list = await this.ctx.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent', {
      list: list,
    });
  }
}

module.exports = NewsController;
