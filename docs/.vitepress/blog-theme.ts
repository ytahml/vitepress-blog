// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  
  // imageStyle: {
  //   coverPreview: [
  //     // 又拍云
  //     {
  //       rule: '//img.upyun.ytazwc.top',
  //       suffix: '-cover'
  //     }
  //   ]
  // },
  
  // markdown 图表支持（会增加一定的构建耗时）
  mermaid: true,
  // 开启任务列表
  taskCheckbox: true,
  // 开启 tabs
  tabs: true,
  
  // 自定义代码分组图标
  // groupIcon: {
  //
  // },

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | imulan',
    // icpRecord: {
    //   name: '湘ICP备2024077074号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '湘公网安备43018102000552号',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
    message: [
        // '<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" style="display:flex;align-items:center;justify-content:center;">本网站由 <img src="https://img.upyun.ytazwc.top/blog/202408091125124.png" style="width:56px;height:24px;" alt="又拍云"> 提供CDN加速/云存储服务</a>',
        // '<template>\n' +
        // '  <Layout>\n' +
        // '    <template #layout-bottom>\n' +
        // '      <div class="busuanzi">\n' +
        // '        本站访客数 <span id="busuanzi_value_site_uv" /> 人次 本站总访问量 <span id="busuanzi_value_site_pv" /> 次\n' +
        // '      </div>\n' +
        // '    </template>\n' +
        // '  </Layout>\n' +
        // '</template>',
    ]
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'imulan',

  // 友链
  friend: {
    list: [
      // {
      //   nickname: 'Hexo旧博客',
      //   des: '成功始于方法,巩固才能提高.',
      //   avatar:
      //       'ok-modified.webp',
      //   url: 'https://ytazwc.top',
      // },
      {
        nickname: 'vuepress旧博客',
        des: '成功始于方法,巩固才能提高.',
        avatar:
            // 'https://raw.githubusercontent.com/ytahml/picx-images-hosting/master/ok-modified.webp',
            'https://webp.imulan.top/ok-modified.webp',
        url: 'https://imulan.top/blogs',
      },
      {
        nickname: 'lss\'s blog',
        des: '人生如逆旅，我亦是行人',
        avatar:
            'https://avatars.githubusercontent.com/u/104154611?s=48&v=4',
        url: 'https://ljiangyu.github.io/lss-vuepress/',
      },
      {
        nickname: '@sugarat/theme',
        des: '博客主题',
        avatar: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
        url: 'https://theme.sugarat.top/'
      },
      {
        nickname: '粥里有勺糖',
        des: '你的指尖用于改变世界的力量',
        avatar:
            'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
        url: 'https://sugarat.top',
      },
      {
        nickname: 'Vitepress',
        des: 'Vite & Vue Powered Static Site Generator',
        avatar:
            'https://vitepress.dev/vitepress-logo-large.webp',
        url: 'https://vitepress.dev/',
      },
    ],
    // 限制列表展示数量
    limit: 5,
    // scrollSpeed: true
  },

  // 推荐文章的展示卡片
  recommend: false,

  // 热门文章
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 9,
    empty: '暂无精选内容'
  },

  // 公告
  // popover: {
  //   title: '公告',
  //   duration: -1,
  //   mobileMinify: false,
  //   reopen: true,
  //   twinkle: false,
  //   body: [
  //     { type: 'text', content: '👇 微信 👇---👇 QQ 👇' },
  //     {
  //       type: 'image',
  //       src: 'weixin.png',
  //       style: 'display: inline-block;width:46%;padding-right:6px'
  //     },
  //     {
  //       type: 'image',
  //       src: 'qq.png',
  //       style: 'display: inline-block;width:46%;padding-left:6px'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家私信交流(备注:博客)'
  //     },
  //     // {
  //     //   type: 'text',
  //     //   content: '邮箱：18570354653@163.com'
  //     // },
  //     // {
  //     //   type: 'text',
  //     //   content: '文章首/文尾有群二维码',
  //     //   style: 'padding-top:0'
  //     // },
  //     // {
  //     //   type: 'button',
  //     //   content: '作者博客',
  //     //   link: 'https://sugarat.top'
  //     // },
  //     // {
  //     //   type: 'button',
  //     //   content: '作者邮箱',
  //     //   props: {
  //     //     type: 'success'
  //     //   },
  //     //   link: 'mailto:18570354653@163.com',
  //     // }
  //   ],
  // },

  // 评论
  // comment: {
  //   repo: 'ytahml/ytahml.github.io',
  //   repoId: 'R_kgDOMcKScw',
  //   category: 'Announcements',
  //   categoryId: 'DIC_kwDOMcKSc84ChPpf',
  //   inputPosition: 'top',
  // },

  // 作者信息列表
  authorList: [
    {
      nickname: 'imulan',
      url: 'https://imulan.top',
      des: '成功始于方法, 巩固才能提高!'
    }
  ],
  
})

export { blogTheme }
