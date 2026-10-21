# Weifeng Xu · 许伟锋

个人学术主页，参考 Jon Barron 风格的内容排版，使用原生 HTML / CSS / JavaScript。无需安装依赖或构建。

## 已包含

- 个人简介、照片、邮箱、GitHub 与中文简历。
- EMNLP Findings 2026 论文、在投的 RuleForge。
- 教育经历、实习经历、技能与语言。
- 中英文切换、研究成果筛选、可展开详情、邮箱复制、移动端布局。

## 本地查看

下载的源码包中，直接打开 `index.html` 即可。浏览器可能限制本地文件的剪贴板权限，此时仍会显示可手动复制的邮箱。

## 修改内容

编辑 `profile.js` 中的个人资料、研究、教育与实习数据。英文和中文分别放在 `en` / `zh` 字段。

- 头像：`assets/portrait.jpg`
- 简历：`assets/Weifeng-Xu-CV.pdf`
- 样式：`style.css`
- 学校校徽：`assets/university-macau.svg`、`assets/hubei-technology.png`
- 研究图示：`assets/causal.svg`、`assets/ruleforge.svg`
- 论文与代码链接：在对应研究条目中填写 `paperUrl` / `codeUrl`，页面会自动显示链接。尚未提供的链接不会显示。
- 页脚的最近更新时间在 `index.html` 中。

研究图示为概念示意，并非论文中的原始实验图。可随时用正式 teaser 图替换。原始简历 PDF 保持原样。

## 发布到 GitHub Pages

GitHub 用户名为 `issxu` 时，个人主页仓库名应为 `issxu.github.io`。

1. 登录 GitHub，新建名为 `issxu.github.io` 的公开仓库。
2. 解压源码压缩包，把 `index.html`、`profile.js`、`app.js`、`style.css`、`assets` 文件夹及其余源码文件放到仓库根目录；不要只上传压缩包，也不要在外层再套一个文件夹。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment** 下选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，然后保存。
5. 等 GitHub 完成部署后，主页地址为 `https://issxu.github.io/`。

官方说明：https://docs.github.com/en/pages/quickstart

如果要保留页面底部的“下载主页源码”按钮，将源码压缩包命名为 `source.zip` 并一并上传；也可以把该链接改为你自己的 GitHub 仓库地址。

## 排版参考

- Jon Barron 的学术主页源码：https://github.com/jonbarron/jonbarron.github.io
- 用户提供的版式参考：https://haodot.github.io/

## 校徽来源

- 澳门大学：https://commons.wikimedia.org/wiki/File:University_of_Macau_logo.svg （并参考学校形象页面：https://www.um.edu.mo/about-um/identity/）
- 湖北工业大学：学校标识页面 https://www.hbut.edu.cn/xxgk/xxbs.htm；本地图片来自“汇川杯”合作院校标识 https://icup.inovance.com/Upload/adv/20260116/20260116044439_%E6%B9%96%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6logo.png 。保留原始图片，在页面中显示校徽部分。

本站 HTML、CSS、交互脚本及概念图为重新实现，个人内容由所提供的简历与补充信息整理。许可参见 `LICENSE`；照片、简历与个人研究内容的权利由其原权利人保留。
