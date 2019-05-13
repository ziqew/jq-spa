// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('div.hello', 'Welcome to Your Vue.js App')
      //.assert.elementCount('img', 1)
      .end()
  },

  'todo default list page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('li[role=menuitem]:nth-child(3)')
      .waitForElementVisible('div.todo-list', 2000)
      .assert.containsText('span.el-tag:nth-child(1)', 'Item 1')
      .end()
  },

  'todo finish item 1': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('li[role=menuitem]:nth-child(3)')
      .waitForElementVisible('div.todo-list', 2000)
      .click('div.todo-list button:nth-child(1)')
      .pause(3000)
      .assert.containsText('span.el-tag--success:nth-child(1)', 'Item 1')
      .end()
  }
}
