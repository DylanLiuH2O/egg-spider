/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1633965887335_1801';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    api: 'http://www.phonegap100.com/',
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
