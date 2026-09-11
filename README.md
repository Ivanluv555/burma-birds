# 🌿 Burma Biodiversity Platform - Birds of Burma

**缅甸生物多样性平台 - 缅甸鸟类 | မြန်မာဇီဝမျိုးစုံမျိုးစေ့ပလက်ဖောင် - မြန်မာငှက်များ**

A multilingual web platform showcasing the rich biodiversity of Burma, with a focus on endemic and threatened bird species.

一个多语言网络平台，展示缅甸丰富的生物多样性，重点关注特有和受威胁的鸟类物种。

မြန်မာနိုင်ငံ၏ကြွယ်ဝသော ဇီဝမျိုးစုံမျိုးစေ့ကိုပြသသည့် ဘာသာစကားများစွာဖြင့် ဝက်ဘ်ပလက်ဖောင်တစ်ခုဖြစ်ပြီး၊ အန္တရာယ်ကျရောက်နေသော ငှက်မျိုးစိတ်များကို အဓိကထားပြသထားသည်။

## ✨ Features / 功能特点 / လုပ်ဆောင်ချက်များ

- 🌍 **Multilingual Support** - English, Burmese (မြန်မာ), and Chinese (中文)
- 🔍 **Search Functionality** - Search birds by name or scientific name
- 🎨 **Modern UI** - Built with React and Tailwind CSS
- 📱 **Responsive Design** - Works on all devices
- ♿ **Accessible** - Keyboard navigation and screen reader friendly
- 🚀 **Static Site** - Fast loading, can be hosted anywhere
- 🎯 **Conservation Focus** - Highlights endangered species with IUCN status

## 🚀 Quick Start / 快速开始 / စတင်ရန်

### Prerequisites / 前置要求 / လိုအပ်ချက်များ

- Node.js 18+ 
- npm or yarn

### Installation / 安装 / ထည့်သွင်းခြင်း

```bash
# Clone the repository
git clone https://github.com/burma-biodiv-platform/burma-birds.git
cd burma-birds

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173 to see the app running.

### Build for Production / 生产构建 / ထုတ်လုပ်မှုအတွက်တည်ဆောက်ခြင်း

```bash
npm run build
```

The static files will be generated in the `dist/` directory and can be deployed to any static hosting service.

## 📁 Project Structure / 项目结构 / စီမံကိန်းဖွဲ့စည်းပုံ

```
burma-birds/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Header with language switcher
│   │   ├── Footer.jsx      # Footer component
│   │   ├── SearchBar.jsx   # Search input component
│   │   ├── BirdCard.jsx    # Individual bird card
│   │   └── BirdGrid.jsx    # Grid layout for birds
│   ├── data/
│   │   └── birds.js        # Bird species data
│   ├── i18n.js             # Internationalization config
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build output
└── index.html              # HTML template
```

## 🌐 Internationalization / 国际化 / ဘာသာစကားများ

The platform supports three languages:

- **English** - Primary language
- **မြန်မာ (Burmese)** - Native language of Burma
- **中文 (Chinese)** - For broader regional access

Users can switch languages using the buttons in the top-right corner of the page.

### Adding New Languages / 添加新语言

Edit `src/i18n.js` to add translations for new languages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

## 🦜 Bird Data / 鸟类数据

The platform currently features:
- Endemic species of Burma
- Threatened and endangered species
- Species with IUCN conservation status
- High-quality photos from Macaulay Library and Wikimedia Commons

To add new bird species, edit `src/data/birds.js`.

## 🛠️ Technology Stack / 技术栈

- **React 19** - Modern UI library
- **Vite 8** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **i18next** - Internationalization framework
- **React i18next** - React integration for i18n

## 📦 Deployment / 部署

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## 🤝 Contributing / 贡献 / ပံ့ပိုးကူညီခြင်း

We welcome contributions from amateur volunteers, students, and biodiversity enthusiasts!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License / 许可证

- **Code**: MIT License
- **Content**: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

## 🙏 Acknowledgments / 致谢 / ကျေးဇူးတင်ခြင်း

- Bird photos from [Macaulay Library](https://www.macaulaylibrary.org/) and Wikimedia Commons
- Built with ❤️ by amateur volunteers and engineering students
- For Burma's biodiversity conservation

## 📧 Contact / 联系方式

- GitHub: [burma-biodiv-platform/burma-birds](https://github.com/burma-biodiv-platform/burma-birds)
- Issues: Please report bugs and feature requests via GitHub Issues

---

**Note**: This is an educational and conservation-focused project. All bird data and images are used with proper attribution and under appropriate licenses.

**注意**: 这是一个教育和保护导向的项目。所有鸟类数据和图像均已适当署名并遵循相应许可协议。

**မှတ်ချက်**: ဤသည်မှာ ပညာရေးနှင့် ထိန်းသိမ်းရေးအတွက် စီမံကိန်းတစ်ခုဖြစ်သည်။ ငှက်များဆိုင်ရာ အချက်အလက်နှင့် ရုပ်ပုံအားလုံးကို သင့်လျော်သော ခွင့်ပြုချက်ဖြင့် အသုံးပြုထားပါသည်။
