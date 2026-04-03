import {defineConfig} from 'vitepress'
import {giscusPlugin} from "vitepress-plugin-giscus";
// import mathjax3 from 'markdown-it-mathjax3';
// import { SearchPlugin } from 'vitepress-plugin-search'
// import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为"/仓库名/"
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/blog/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题 (@sugarat/theme)
  extends: blogTheme,
  base: '/',
  lang: 'zh-cn',
  title: '花木凋零成兰',
  description: '成功始于方法，巩固才能提高',
  ignoreDeadLinks: true,
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-screen-r/font.css' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-Aj2Rp56aLq' }],
    ['meta', { name: 'sogou_site_verification', content: 'BwQr1kj0CD' }],
    ['link', {rel: 'canonical', href: 'https://www.imulan.top' }],
    // ['', { name: 'baidu-site-verification', content: 'codeva-Aj2Rp56aLq' }],
  ],
  
  // Sitemap
  sitemap: {
    hostname: 'https://imulan.top',
    lastmodDateOnly: false
  },

  // vite
  vite: {
    plugins: [
      giscusPlugin({
        repo: 'ytahml/ytahml.github.io',
        repoId: 'R_kgDOR4djsg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOR4djss4C567s',
        inputPosition: 'top',
        mapping: 'pathname',
        loading: 'lazy'
      })
    ]
  },

  // Latex 渲染
  markdown: {
    math: true,
    image: {
      // 设置图片懒加载
      lazyLoading: true,
    },
    lineNumbers: true,  // 启用行号
  },
  
  themeConfig: {
    // 官方 vitePress 内置搜索
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'O57HYNLTB4',
    //     apiKey: 'f2e6bea3ad9c32ac475c192dfe52365c',
    //     indexName: 'ytazwc',
    //     placeholder: '请输入要搜索的内容...'
    //   }
    // },
    
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    
    // 设置 logo
    logo: 'https://raw.githubusercontent.com/ytahml/picx-images-hosting/master/ok-modified.webp',
    editLink: {
      pattern:
        'https://github.com/ytahml/vitepress-blog/tree/master/docs/:path',
      text: '去 GitHub 上编辑内容'
    },

    // 全局配置
    darkModeSwitchTitle: 'before',

    // 导航栏
    nav: [
      { text: '杂记', link: '/MisNotes/' },
      { text: '后端开发问题总结', link: '/后端开发问题/' },

      {
        text: '技术学习笔记',
        // link: '/MultiThread/',
        items: [
          { text: 'MySQL 学习', link: '/Database/MySQL' },
          { text: '多线程学习', link: '/MultiThread/study' },
          { text: '多线程练习题', link: '/MultiThread/exercises' },
          { text: 'Lua 学习笔记', link: '/Lua/' },
          { text: 'Git 开发实践', link: '/Git/' },
          { text: 'JVM 学习笔记', link: '/Java/JVM/' },
          { text: 'Python 学习笔记', link: '/Python/' },
        ]
      },
      {
        text: '算法',
        items: [
          { text: '基础知识', link: '/算法基础知识/' },
          { text: '力扣', link: '/Leetcode/' },
          { text: '卡码网', link: '/KamaCoder/' },
        ]
      },
      {
        text: '我的',
        items: [
          { text: 'Github', link: 'https://github.com/ytaml' },
          { text: 'Gitee', link: 'https://gitee.com/ytaml' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_61457746' },
          { text: '旧博客', link: 'https://ytazwc.top/blog' },
          { text: '读书随记', link: '/读书随记/' },
        ]
      },
      { text: 'Mac 环境搭建', link: '/Mac环境搭建/' },
      {
        text: '常用工具与网站',
        items: [
          { text: 'PicX 图床', link: 'https://picx.xpoet.cn/#/upload' },
          { text: '阿里图标库', link: 'https://www.iconfont.cn/?spm=a313x.home_index.i3.d4d0a486a.d6e53a81Ww99Z9' },
          { text: '开发常用网址', link: 'https://doc.istio.tech/index.html' },
          { text: '在线打字练习', link: 'https://www.type.fun/' },
          { text: 'Google 翻译', link: 'https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=en&tl=zh-CN&op=translate' },
          { text: 'PDF 在线工具', link: 'https://www.ilovepdf.com/zh-tw' },
          { text: '图标在线生成器', link: 'https://www.logosc.cn/favicon-generator' },
          { text: '在线图像编辑工具', link: 'https://imageonline.co/cn/' },
          { text: 'Mermaid 中文网', link: 'https://mermaid.nodejs.cn/' },
          { text: '视频无损压缩 90%', link: 'https://tools.rotato.app/compress' },
          { text: 'MP4 视频在线修复', link: 'https://repair.cleverfiles.com/' },
          { text: 'cron 表达式在线生成', link: 'https://cron.ciding.cc/' },
        ]
      },
    ],
    // 侧边栏
    sidebar: {
      "/Database/MySQL": [
        { text: 'MySQL 测试数据集', link: '/Database/MySQL/MySQL测试数据集' },
        { text: 'MySQL 触发器', link: '/Database/MySQL/MySQL触发器' },
        { text: 'MySQL 执行 SQL 时权限检查在哪个阶段？', link: '/Database/MySQL/MySQL执行SQL时权限检查在哪个阶段？' },
        { text: '索引', link: '/Database/MySQL/索引' },
        { text: '事务', link: '/Database/MySQL/事务' },
      ],
      "/Mac环境搭建/": [
        { text: 'Mac 好用软件整理', link: '/Mac环境搭建/Mac好用软件整理' },
        { text: '在 Mac 上搭建 Java 环境', link: '/Mac环境搭建/在Mac上搭建Java环境' },
        { text: 'WezTerm+Starship 美化 Mac 终端', link: '/Mac环境搭建/WezTerm+Starship美化Mac终端' }
      ],
      "/Java/JVM/": [
        { text: '01 JVM 初识', link: '/Java/JVM/01_JVM初识' },
        { text: '02 Java 字节码', link: '/Java/JVM/02_Java字节码' },
        { text: '03 类的生命周期', link: '/Java/JVM/03_类的生命周期' },
        { text: '04 类加载器', link: '/Java/JVM/04_类加载器' },
        { text: '05 运行时数据区', link: '/Java/JVM/05_运行时数据区' },
        // { text: 'WezTerm+Starship 美化 Mac 终端', link: '/Mac环境搭建/WezTerm+Starship美化Mac终端' },

      ],
      "/Python/": [
        { text: '简介', link: '/Python/' },
        { text: '01-Python 变量', link: '/Python/01-Python变量' },
        { text: '02-Python 运算符', link: '/Python/02-Python运算符' },
        { text: '03-Python 分支结构', link: '/Python/03-Python分支结构' },
        { text: '04-Python 循环结构', link: '/Python/04-Python循环结构' },
      ],
      "/后端开发问题/": [
        { text: 'MyBatis 的 SQL 执行结果和客户端相同 SQL 执行结果不一致问题', link: '/后端开发问题/MyBatis的SQL执行结果和客户端相同SQL执行结果不一致问题' },
        { text: '驱动程序无法通过使用安全套接字层 (SSL) 加密与 SQL Server 建立安全连接', link: '/后端开发问题/驱动程序无法通过使用安全套接字层(SSL)加密与SQLServer建立安全连接' },
        { text: 'AES 加密结果有 + 号浏览器转义后解密失败', link: '/后端开发问题/AES加密结果有+号浏览器转义后解密失败' },
        { text: 'AES 加密解密出现：缺省的 iv 长度不能小于 16', link: '/后端开发问题/AES加密解密出现：缺省的iv长度不能小于16' },
      ],
      "/Git/": [
        { text: 'GitHub 经常出现 push 或 pull 超时', link: '/Git/GitHub经常出现push或pull超时' },
        { text: 'idea 配置.gitignore 文件后不生效', link: '/Git/idea配置.gitignore文件后不生效' },
        { text: 'idea 如何将多次 commit 合并为一次 commit', link: '/Git/idea如何将多次commit合并为一次commit' },
        { text: 'Github 作为中央仓库', link: '/Git/Github作为中央仓库' },
        { text: '移动其他分支提交到指定分支并修改提交时间', link: '/Git/如何移动其他分支提交到指定分支并修改提交时间' },
      ],
      "/Lua/": [
        {
          "text": "01-Lua 环境安装",
          "link": "/Lua/01-Lua环境安装"
        },
        {
          "text": "02-Lua 数据类型",
          "link": "/Lua/02-Lua数据类型"
        },
        {
          "text": "03-标识符",
          "link": "/Lua/03-标识符"
        },
        {
          "text": "04-运算符",
          "link": "/Lua/04-运算符"
        },
        {
          "text": "05-函数",
          "link": "/Lua/05-函数"
        },
        {
          "text": "06-流程控制语句",
          "link": "/Lua/06-流程控制语句"
        },
        {
          "text": "07-循环控制语句",
          "link": "/Lua/07-循环控制语句"
        },
        {
          "text": "08-table 数据结构",
          "link": "/Lua/08-table数据结构"
        },
        {
          "text": "09-迭代器",
          "link": "/Lua/09-迭代器"
        },
        {
          "text": "10-模块数据结构",
          "link": "/Lua/10-模块数据结构"
        },
        {
          "text": "11-Lua 元表与元方法",
          "link": "/Lua/11-Lua元表与元方法"
        },
        {
          "text": "12-lua 面向对象",
          "link": "/Lua/12-lua面向对象"
        },
        {
          "text": "13-Lua 的协同线程和协同函数",
          "link": "/Lua/13-Lua的协同线程和协同函数"
        },
        {
          "text": "14-Lua 的文件 IO",
          "link": "/Lua/14-Lua的文件IO"
        }
      ],
      
      // "/SpringCloud/": [
      //   { text: '', link: '' },
      // ],
      
      "/MultiThread/exercises/": [
        { text: '双线程轮流打印 1-100', link: '/MultiThread/exercises/双线程轮流打印1-100' },
        { text: '三线程顺序打印 1-100', link: '/MultiThread/exercises/三线程顺序打印1-100' },
        { text: '三线程分别打印 1、2、3', link: '/MultiThread/exercises/三线程分别打印1、2、3' },
        { text: '100 个线程各累加 100 次', link: '/MultiThread/exercises/100个线程各累加100次' },
        { text: '线程交叉打印 12A34B56C 等', link: '/MultiThread/exercises/线程交叉打印12A34B56C等' },
        { text: '两线程交替打印字母大小写', link: '/MultiThread/exercises/两线程交替打印字母大小写' },
        { text: '两个线程交替打印 a1b2...z26', link: '/MultiThread/exercises/两个线程交替打印a1b2...z26' },
        { text: '两线程交替打印 a1b2c3d4 十轮', link: '/MultiThread/exercises/两线程交替打印a1b2c3d4十轮' },

      ],
      
      "/MisNotes/": [
        { text: 'Java 并发的 happens-before 规则', link: '/MisNotes/Java并发的happens-before规则' },
        { text: '乐观锁和悲观锁', link: '/MisNotes/乐观锁和悲观锁' },
        { text: 'Synchronized 关键字', link: '/MisNotes/Synchronized关键字' },
        { text: '为什么要使用双亲委派机制？', link: '/MisNotes/为什么要使用双亲委派机制？' },
        { text: 'Spring 的配置类分为 Full 和 Lite 两种模式', link: '/MisNotes/Spring的配置类分为Full和Lite两种模式' },
        { text: '接口幂等性', link: '/MisNotes/接口幂等性' },
        { text: 'JMH 详细使用', link: '/MisNotes/JMH详细使用' },

      ],
      
      "/Leetcode/": [
        {
          text: '热题 100',
          collapsed: false,
          items: [
            { text: '1.两数之和', link: '/Leetcode/Hot100/1.两数之和' },
            { text: '49.字母异位词分组', link: '/Leetcode/Hot100/49.字母异位词分组' },
            { text: '128.最长连续序列', link: '/Leetcode/Hot100/128.最长连续序列' },
            { text: '283.移动零', link: '/Leetcode/Hot100/283.移动零' },
            { text: '11.盛最多水的容器', link: '/Leetcode/Hot100/11.盛最多水的容器' },
            { text: '15.三数之和', link: '/Leetcode/Hot100/15.三数之和' },
            { text: '42.接雨水', link: '/Leetcode/Hot100/42.接雨水' },
          ]
        },
        {
          text: '题库',
          collapsed: false,
          items: [
            { text: '3.无重复字符的最长子串', link: '/Leetcode/题库/3.无重复字符的最长子串' },
            { text: '15.三数之和', link: '/Leetcode/题库/15.三数之和' },
            { text: '25.K 个一组翻转链表', link: '/Leetcode/题库/25.K个一组翻转链表' },
            { text: '53.最大子数组和', link: '/Leetcode/题库/53.最大子数组和' },
            { text: '56.合并区间', link: '/Leetcode/题库/56.合并区间' },
            { text: '92.反转链表 II', link: '/Leetcode/题库/92.反转链表II' },
            { text: '102.二叉树的层序遍历', link: '/Leetcode/题库/102.二叉树的层序遍历' },
            { text: '103.二叉树的锯齿形层序遍历', link: '/Leetcode/题库/103.二叉树的锯齿形层序遍历' },
            { text: '146.LRU 缓存', link: '/Leetcode/题库/146.LRU缓存' },
            { text: '206.反转链表', link: '/Leetcode/题库/206.反转链表' },
            { text: '215.数组中的第 K 个最大元素', link: '/Leetcode/题库/215.数组中的第K个最大元素' },

          ]
        }
      ],
      "/KamaCoder/": [
        {
          text: '题库',
          collapsed: false,
          items: [
            { text: '1.A+B 问题 I', link: '/KamaCoder/题库/1.A+B问题I' },
            { text: '2.A+B 问题 II', link: '/KamaCoder/题库/2.A+B问题II' },
            { text: '3.A+B 问题 III', link: '/KamaCoder/题库/3.A+B问题III' },
            { text: '4.A+B 问题 IV', link: '/KamaCoder/题库/4.A+B问题IV' },
            { text: '5.A+B 问题 VII', link: '/KamaCoder/题库/5.A+B问题VII' },
            { text: '6.A+B 问题 VIII', link: '/KamaCoder/题库/6.A+B问题VIII' },
            { text: '8.摆平积木', link: '/KamaCoder/题库/8.摆平积木' },
            { text: '9.奇怪的信', link: '/KamaCoder/题库/9.奇怪的信' },
            { text: '10.运营商活动', link: '/KamaCoder/题库/10.运营商活动' },
            { text: '11.共同祖先', link: '/KamaCoder/题库/11.共同祖先' },
            { text: '12.打印数字图形', link: '/KamaCoder/题库/12.打印数字图形' },
            { text: '13.镂空三角形', link: '/KamaCoder/题库/13.镂空三角形' },
            { text: '14.句子缩写', link: '/KamaCoder/题库/14.句子缩写' },
            { text: '15.神秘字符', link: '/KamaCoder/题库/15.神秘字符' },
            { text: '16.位置互换', link: '/KamaCoder/题库/16.位置互换' },
            { text: '17.出栈合法性', link: '/KamaCoder/题库/17.出栈合法性' },
            { text: '18.链表的基本操作', link: '/KamaCoder/题库/18.链表的基本操作' },
            { text: '19.单链表反转', link: '/KamaCoder/题库/19.单链表反转' },
            { text: '20.删除重复元素', link: '/KamaCoder/题库/20.删除重复元素' },
            { text: '21.构造二叉树', link: '/KamaCoder/题库/21.构造二叉树' },
            { text: '46.携带研究材料', link: '/KamaCoder/题库/46.携带研究材料' },
            { text: '54.替换数字', link: '/KamaCoder/题库/54.替换数字' },
            { text: '55.右旋字符串', link: '/KamaCoder/题库/55.右旋字符串' },
          ]
        }
      ],
      "/算法基础知识/": [
        { text: '图论', link: '/算法基础知识/图论' },
      ],
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1723361685490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2753" width="256" height="256"><path d="M983.899806 785.385782V224.886223h0.180631l-0.180631-4.696419c-0.180632-5.238314-0.722526-10.476627-1.806315-15.714941-2.890104-25.469042-21.675781-44.977245-45.519139-47.686717H122.287529c-11.741048 0-23.482096 1.625684-34.861881 5.238314-30.346093 10.295996-50.757453 40.100194-50.576821 74.058917v534.849885c-0.361263 21.314518 5.780208 42.087141 17.701887 59.789028l0.361263 0.722526 5.418946 3.973893c18.243782 21.856412 44.977245 34.319986 73.517022 34.500618H904.421944c37.751984 0 70.265655-27.094726 79.477862-66.291763l0.180631-0.541894c0.361263-5.96084 0.361263-11.741048-0.180631-17.701888zM390.16405 547.494091l55.453872 49.854295 43.893456 40.100194c5.418945 5.96084 13.005468 9.57347 21.133886 9.57347 7.947786 0 15.534309-3.431999 21.133886-9.57347l101.153642-91.941436 272.753572 263.721997H126.622685L390.16405 547.494091z m120.119951 30.346092L111.449638 216.03528H115.604163c214.409596-0.903158 703.559711-2.890104 793.875463-0.361263l-399.195625 362.166166z m165.458458-69.72376l251.619686-227.956959v474.518963L675.742459 508.116423z m-328.568707 0.180631L93.205856 760.278003V278.895043l253.967896 229.402011z" fill="#BB3837" p-id="2754"></path></svg>'
        },
        link: 'mailto:18570354653@163.com'
      },
      {
        icon: 'github',
        link: 'https://github.com/ytahml/ytahml.github.io'
      },
    ],

  }
})
