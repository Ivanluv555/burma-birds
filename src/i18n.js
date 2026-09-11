import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Burma Biodiversity Platform",
      subtitle: "Explore and protect Burma's biodiversity",
      searchPlaceholder: "Search birds by name or scientific name...",
      home: "Home",
      support: "Support",
      github: "GitHub",
      footer: {
        copyright: "Burma Biodiversity Platform. All Rights Reserved.",
        license: "Content licensed under",
        developed: "Developed by amateur volunteers & engineering students — Built with ❤️ for Burma's Biodiversity"
      },
      conservation: {
        LC: "Least Concern",
        NT: "Near Threatened",
        VU: "Vulnerable",
        EN: "Endangered",
        CR: "Critically Endangered"
      },
      photo: "Photo",
      noResults: "No birds found",
      tryDifferentSearch: "Try a different search term",
      showingResults_one: "Showing {{count}} bird",
      showingResults_other: "Showing {{count}} birds",
      viewDetails: "View Details",
      backToList: "Back to List",
      scientificName: "Scientific Name",
      habitat: "Habitat",
      conservationStatus: "Conservation Status",
      description: "Description"
    }
  },
  my: {
    translation: {
      title: "မြန်မာဇီဝမျိုးစုံမျိုးစေ့ပလက်ဖောင်",
      subtitle: "မြန်မာနိုင်ငံ၏ ဇီဝမျိုးစုံမျိုးစေ့ကို လေ့လာပြီးကာကွယ်ပါ",
      searchPlaceholder: "ငှက်အမည် သို့မဟုတ် သိပ္ပံအမည်ဖြင့် ရှာဖွေပါ...",
      home: "ပင်မစာမျက်နှာ",
      support: "ပံ့ပိုးကူညီမှု",
      github: "GitHub",
      footer: {
        copyright: "မြန်မာဇီဝမျိုးစုံမျိုးစေ့ပလက်ဖောင်။ မူပိုင်ခွင့်များ လေးစားသည်။",
        license: "အကြောင်းအရာများကို လိုင်စင်ပေးထားသည်",
        developed: "ဝိုင်းဝန်းပါဝင်သော စိတ်ဝင်စားသူများနှင့် အင်ဂျင်နီယာကျောင်းသားများမှဖန်တီးသည် — မြန်မာနိုင်ငံ၏ ဇီဝမျိုးစုံမျိုးစေ့အတွက် ချစ်ခြင်းမေတ္တာဖြင့် တည်ဆောက်ထားသည်"
      },
      conservation: {
        LC: "စိုးရိမ်စရာနည်း",
        NT: "အန္တရာယ်နီးနေသော",
        VU: "ထိခိုက်လွယ်သော",
        EN: "မျိုးသုဉ်းလုနီးပါး",
        CR: "အလွန်အန္တရာယ်ကျရောက်နေသော"
      },
      photo: "ဓာတ်ပုံ",
      noResults: "ငှက်များမတွေ့ပါ",
      tryDifferentSearch: "အခြားရှာဖွေမှုစကားလုံးကို စမ်းကြည့်ပါ",
      showingResults_one: "ငှက် {{count}} ကောင်ပြသနေသည်",
      showingResults_other: "ငှက် {{count}} ကောင်ပြသနေသည်",
      viewDetails: "အသေးစိတ်ကြည့်ရှုရန်",
      backToList: "စာရင်းသို့ပြန်သွားရန်",
      scientificName: "သိပ္ပံအမည်",
      habitat: "နေထိုင်ရာနေရာ",
      conservationStatus: "ထိန်းသိမ်းရေးအခြေအနေ",
      description: "ဖော်ပြချက်"
    }
  },
  zh: {
    translation: {
      title: "缅甸生物多样性平台",
      subtitle: "探索和保护缅甸的生物多样性",
      searchPlaceholder: "按鸟类名称或学名搜索...",
      home: "首页",
      support: "支持",
      github: "GitHub",
      footer: {
        copyright: "缅甸生物多样性平台。保留所有权利。",
        license: "内容采用许可协议",
        developed: "由业余志愿者和工程专业学生开发 — 为缅甸生物多样性而建"
      },
      conservation: {
        LC: "无危",
        NT: "近危",
        VU: "易危",
        EN: "濒危",
        CR: "极危"
      },
      photo: "照片",
      noResults: "未找到鸟类",
      tryDifferentSearch: "尝试不同的搜索词",
      showingResults_one: "显示 {{count}} 只鸟",
      showingResults_other: "显示 {{count}} 只鸟",
      viewDetails: "查看详情",
      backToList: "返回列表",
      scientificName: "学名",
      habitat: "栖息地",
      conservationStatus: "保护状态",
      description: "描述"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
