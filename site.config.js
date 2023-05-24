const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ハムデジ",
    image: "/artist.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "エンジニア",
    bio: "宜しくお願い致します。",
    email: "",
    linkedin: "",
    line: "sISEw9e",
    github: "yuuki-fuji",
    twitter: "72NhGhtTT1GglWB",
    instagram: "yuuki767767",
    youtube: "@yuuki-767",
  },
  projects: [
    {
      name: `準備中`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "criceto-web",
    description: "welcome!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleTagManager: {
    enable: true,
    config: {
      containerId: process.env.NEXT_PUBLIC_GOOGLE_CONTAINER_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "yuuki-fuji/notionblog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
