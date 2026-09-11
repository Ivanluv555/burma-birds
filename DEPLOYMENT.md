# 部署说明 / Deployment Guide / ဖြန့်ကျက်ခြင်းလမ်းညွှန်

## 构建静态网站 / Build Static Site / တည်ဆောက်ခြင်း

### 安装依赖 / Install Dependencies / မှီခိုမှုများထည့်သွင်းခြင်း

```bash
npm install
```

### 开发模式 / Development Mode / ဖွံ့ဖြိုးရေးပုံစံ

```bash
npm run dev
```

访问 / Visit / သွားရောက်ကြည့်ရှုပါ: http://localhost:5173

### 构建生产版本 / Build for Production / ထုတ်လုပ်မှုအတွက်တည်ဆောက်ခြင်း

```bash
npm run build
```

生成的静态文件将位于 `dist/` 目录。
Static files will be generated in the `dist/` directory.
တည်ဆောက်ထားသော ဖိုင်များသည် `dist/` လမ်းညွှန်တွင် ရှိပါမည်။

### 本地预览生产版本 / Preview Production Build / ထုတ်လုပ်မှုပုံစံကို ကြိုတင်ကြည့်ရှုခြင်း

```bash
npm run preview
```

## 部署选项 / Deployment Options / ဖြန့်ကျက်ရန်နည်းလမ်းများ

### 1. GitHub Pages

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages (需要安装 gh-pages)
npm install -D gh-pages
npx gh-pages -d dist
```

### 2. Netlify

1. 连接你的 GitHub 仓库到 Netlify
2. 构建命令: `npm run build`
3. 发布目录: `dist`
4. 自动部署已配置

### 3. Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

### 4. 静态文件服务器 / Static File Server

将 `dist/` 目录的内容复制到任何静态文件服务器：
- Apache
- Nginx
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 国际化支持 / Internationalization / ဘာသာစကားများပံ့ပိုးမှု

该项目支持三种语言 / This project supports three languages / ဤစီမံကိန်းသည် ဘာသာစကား ၃ မျိုးကို ပံ့ပိုးသည်:

- **English** (英语 / အင်္ဂလိပ်)
- **Burmese / မြန်မာ** (缅甸语 / မြန်မာဘာသာ)
- **Chinese / 中文** (简体中文 / တရုတ်)

用户可以通过页面右上角的语言切换按钮选择语言。
Users can switch languages using the buttons in the top right corner.
အသုံးပြုသူများသည် စာမျက်နှာ၏ညာဘက်အပေါ်ထောင့်မှ ဘာသာစကားခလုတ်များဖြင့် ပြောင်းလဲနိုင်သည်။

## 技术栈 / Tech Stack / နည်းပညာအစုအဖွဲ့

- **React 19** - UI 框架 / UI Framework / UI မူဘောင်
- **Vite 8** - 构建工具 / Build Tool / တည်ဆောက်ရေးကိရိယာ
- **Tailwind CSS** - 样式框架 / CSS Framework / CSS မူဘောင်
- **i18next** - 国际化 / Internationalization / ဘာသာစကားများပံ့ပိုးမှု
- **React i18next** - React 国际化集成 / React i18n Integration

## 文件结构 / File Structure / ဖိုင်ဖွဲ့စည်းပုံ

```
src/
├── components/          # React 组件 / Components / အစိတ်အပိုင်းများ
│   ├── Header.jsx      # 页头（含语言切换）/ Header with language switcher
│   ├── Footer.jsx      # 页脚 / Footer
│   ├── SearchBar.jsx   # 搜索栏 / Search bar
│   ├── BirdCard.jsx    # 鸟类卡片 / Bird card
│   └── BirdGrid.jsx    # 鸟类网格 / Bird grid
├── data/
│   └── birds.js        # 鸟类数据 / Bird data / ငှက်အချက်အလက်
├── i18n.js             # 国际化配置 / i18n config / ဘာသာစကားချိန်ညှိမှု
├── App.jsx             # 主应用 / Main app
├── main.jsx            # 入口文件 / Entry point
├── App.css             # 应用样式 / App styles
└── index.css           # 全局样式 / Global styles / တစ်ကမ္ဘာလုံးပုံစံ
```

## 添加新语言 / Adding New Languages / ဘာသာစကားအသစ်ထည့်ခြင်း

1. 在 `src/i18n.js` 中添加新的语言资源
2. 在 `Header.jsx` 中添加语言切换按钮
3. 重新构建项目

## 性能优化 / Performance Optimization / စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း

- ✅ 代码分割 / Code splitting
- ✅ 懒加载图片 / Lazy loading images
- ✅ CSS 优化 / CSS optimization
- ✅ 生产环境压缩 / Production minification
- ✅ 响应式设计 / Responsive design

## 浏览器支持 / Browser Support / ဘရောက်ဇာပံ့ပိုးမှု

- Chrome (最新版 / latest / နောက်ဆုံး)
- Firefox (最新版 / latest / နောက်ဆုံး)
- Safari (最新版 / latest / နောက်ဆုံး)
- Edge (最新版 / latest / နောက်ဆုံး)
