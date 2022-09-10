// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/mssui@0.1.13/lib/theme-chalk/index.css',
    },
  ],
  ['meta', { name: 'keywords', content: '文档中心' }],
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }], // 不蒜子统计
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  [
    'script',
    { src: 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js' },
  ],
  ['script', { src: 'https://unpkg.com/mssui@0.1.17/lib/index.js' }],
]
