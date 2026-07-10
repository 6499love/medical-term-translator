# MediTerm Glass Pro

一个给医疗器械资料翻译用的小工具。  
主要做三件事：查术语、统一译法、保存自己的常用词库。

在线访问：

- Website: https://www.meditermglasspro.icu/
- Vercel: https://medical-term-translator.vercel.app/
- GitHub: https://github.com/6499love/medical-term-translator

## 这个项目是做什么的

我做这个工具，是因为医疗器械资料里有很多词不能每次都临时翻。

比如同一个功能，在彩页里叫一种说法，在说明书里又换一种说法，到了 PPT 或视频脚本里又变了。时间久了，资料会越来越乱，后面校对也很痛苦。

MediTerm Glass Pro 更像一个自己的医学术语本。  
它不追求一次性翻完整篇文章，而是先把常用术语、产品表达、容易写错的英文说法整理起来。下次再遇到类似内容，直接查、直接复制、直接复用。

## 适合谁用

这个工具比较适合这些场景：

- 医疗器械产品资料翻译
- 英文彩页、说明书、PPT、视频脚本校对
- 招标参数中英文整理
- 公司内部术语统一
- 市场、产品、销售培训资料制作
- 个人医学术语库沉淀

它更适合医疗器械市场、产品、海外资料、内容编辑这类工作流。  
如果你只是偶尔翻一句话，用普通翻译工具就够了。

## 现在能做什么

### 术语查询

可以输入中文、英文、拼音或拼音首字母来查术语。  
适合快速确认一个词应该怎么翻。

### 系统词库

项目内置了一批医学和医疗器械相关术语。  
目前更偏向产品资料和重症医学场景，比如病床功能、血气分析、呼吸治疗、微循环等。

### 用户词库

你可以自己添加术语。  
比如公司内部固定叫法、某个产品功能的标准英文、容易被翻错的词，都可以存进去。

### 批量处理

支持多行输入。  
一行一个词，适合处理参数表、说明书字段、PPT 里的术语清单。

### 收藏和历史记录

常用词可以收藏。  
最近查过的内容会保留在本地，方便回头找。

### 本地保存

用户词库、收藏、历史记录和设置主要保存在浏览器本地。  
这对小工具来说够轻，也比较适合个人使用。

但要注意：清理浏览器缓存、换浏览器或换电脑后，本地数据可能会丢。重要词库建议定期导出备份。

## 它和普通翻译工具有什么区别

普通翻译工具更像临时问路。  
这次问完，下次还要再问，而且结果不一定一样。

MediTerm Glass Pro 更像自己的术语本。  
你把确认过的译法放进去，后面就可以反复用。

它解决的不是“AI 会不会翻译”的问题，而是这些更实际的问题：

- 同一个词不要翻来翻去
- 产品资料里的英文表达尽量统一
- 内部术语不要散在各个文档里
- 查过、改过、确认过的表达能留下来

## 技术栈

- React
- TypeScript
- Vite
- Fuse.js
- Zustand
- LocalStorage
- Web Speech API
- lucide-react

## 本地运行

先确认电脑里已经安装 Node.js 和 npm。

克隆项目：

```bash
git clone https://github.com/6499love/medical-term-translator.git
cd medical-term-translator
```

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

浏览器打开终端里显示的本地地址即可。常见地址是：

```bash
http://localhost:5173
```

构建生产版本：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 词库字段示例

一个术语大概长这样：

```json
{
  "id": "term_001",
  "chinese_term": "一键PLR位",
  "english_term": "One-button standard PLR position",
  "pinyin_full": "yi jian PLR wei",
  "pinyin_first": "yjplrw",
  "category": "Electric Hospital Bed",
  "note": "用于描述病床一键完成被动抬腿体位。",
  "usage": "适用于产品彩页、功能说明和培训材料。",
  "root_analysis": "PLR = Passive Leg Raising",
  "mistranslation": [
    "One-key PLR location",
    "PLR place"
  ],
  "source": "system",
  "tags": ["PLR", "hospital bed"]
}
```

常用字段说明：

| 字段 | 说明 |
| --- | --- |
| `chinese_term` | 中文术语 |
| `english_term` | 推荐英文译法 |
| `pinyin_full` | 完整拼音 |
| `pinyin_first` | 拼音首字母 |
| `category` | 分类 |
| `note` | 备注 |
| `usage` | 使用场景 |
| `root_analysis` | 缩写、词根或术语拆解 |
| `mistranslation` | 不建议使用的译法 |
| `tags` | 标签 |

## 隐私说明

当前项目偏本地工具设计。  
用户自己添加的词库、收藏、历史记录和设置会保存在浏览器本地。

这意味着：

- 不需要注册账号
- 不需要后端数据库
- 适合个人快速使用
- 但本地数据需要自己备份

如果后续接入云端翻译、团队词库或账号系统，建议同步更新隐私说明和数据处理方式。

## 使用时要注意

这个项目是术语查询和资料翻译辅助工具，不是医学建议，也不是正式认证翻译。

下面这些内容仍然需要专业人员复核：

- 注册资料
- 临床文件
- 法规文件
- 产品适应症
- 风险警示
- 对外发布的正式英文材料

尤其是医疗器械资料，术语统一只是第一步。最后能不能对外发布，还要看法规、临床和公司内部审核。

## 后续可以继续做的事

- 增加更多医学器械分类词库
- 支持 Excel / CSV 导入导出
- 支持长文本中的术语识别和高亮
- 支持中英双语对照导出
- 支持术语审核状态
- 支持词库版本管理
- 支持团队共享词库
- 接入可选 AI 翻译能力，用来处理词库外的内容

## 贡献

欢迎提交 Issue 或 Pull Request。

比较有价值的贡献包括：

- 补充医学术语
- 修正不准确的英文译法
- 增加错误译法提醒
- 优化搜索体验
- 改进批量处理
- 补充使用场景和示例

提交术语时，最好写清楚：

- 中文术语
- 推荐英文
- 所属分类
- 使用场景
- 哪些译法不建议用

## License

当前仓库还没有明确写入开源协议。

如果准备正式开源，建议补充 `LICENSE` 文件。  
工具类项目一般可以考虑 MIT License；如果希望对专利授权说明更完整，可以考虑 Apache License 2.0。

## Author

Created by [6499love](https://github.com/6499love)
