import type { DefaultTheme } from "vitepress";

const SidebarNav: DefaultTheme.SidebarItem[] = [
  {
    items: [
      {
        text: "前端导航",
        link: "/nav/front",
      },
      {
        text: "综合导航",
        link: "/nav/mm",
      },
      {
        text: "精选导航",
        link: "/nav/dsdh",
      }
    ],
  },
];
const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: "介绍",
    items: [
      {
        text: "为什么选择VIPTV?",
        link: "/guide/why",
      },
      {
        text: "长期支持",
        link: "/guide/support",
      },
      {
        text: "赞助支持",
        link: "/guide/sponsors",
      },
    ]
  },
  {
    text: "快速开始",
    items: [
      {
        text: "安装",
        link: "/guide/install",
      },
      {
        text: "常见问题",
        link: "/guide/install",
      },
    ],
  },

];

const SidebarSource: DefaultTheme.SidebarItem[] = [
  {
    text: "IPTV资源",
    items: [
      {
        text: "北邮直播",
        link: "/source/byou",
      },
      {
        text: "咪咕直播",
        link: "/source/migu",
      },
      {
        text: "天途直播",
        link: "/source/ttou",
      },
      {
        text: "世界直播",
        link: "/source/org",
      },
      {
        text: "成人直播",
        link: "/source/xxx",
      },
      {
        text: "资源采集",
        link: "/source/movie",
      },
      {
        text: "一锅端源",
        link: "/source/ygd",
      },
    ],
  },
  {
    text: "电脑软件",
    items: [
      {
        text: "广告设计",
        link: "/source/ads",
      },
      {
        text: "其它软件",
        link: "/source/windows",
      },
    ],
  },
  {
    text: "手机软件",
    items: [
      {
        text: "影视小说",
        link: "/source/mlive",
      },
    ],
  },
  {
    text: "电视盒子",
    items: [
      {
        text: "电视盒子",
        link: "/source/tvhezi",
      },
    ],
  },
];
const Sidebartools: DefaultTheme.SidebarItem[] = [
  {
    text: "资源导航",
    items: [
      {
        text: "影视资源",
        link: "/hao/movie",
      },
      {
        text: "读书学习",
        link: "/hao/reads",
      },
    ],
  },
  {
    text: "工具资源",
    items: [
      {
        text: "软件工具",
        link: "/hao/Pc",
      },
      {
        text: "AI工具",
        link: "/hao/Ai",
      },
      {
        text: "在线工具",
        link: "/hao/On",
      },
    ],
  },
  {
    text: "VIP资源",
    items: [
      {
        text: "福利小车",
        link: "/hao/vipa",
      },
    ],
  },
];
const SidebarVod: DefaultTheme.SidebarItem[] = [
  {
    text: "视频类",
    items: [
      {
        text: "国内小姐姐",
        link: "/vod/xjj",
      },
      {
        text: "国外小姐姐",
        link: "/vod/tiktok",
      },
      {
        text: "18+禁",
        link: "/vod/xxx",
      }
    ],
  },

  {
    text: "影视剧",
    items: [
      {
        text: "国内小姐姐",
        link: "/xjj",
      },
      {
        text: "国外小姐姐",
        link: "/tiktok",
      }
    ],
  },
];

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/guide/": SidebarGuide,
  "/source/": SidebarSource,
  "/nav/": SidebarNav,
  "/vod/": SidebarVod,
  "/tools/": Sidebartools

};
