# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

PlayNow 是一个 Next.js 14 在线游戏平台，具有 Google OAuth 身份验证、国际化（4种语言）和响应式设计功能。项目使用 TypeScript、Tailwind CSS 和无服务器架构。

## 开发命令

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 运行 ESLint
```

## 架构概述

### 身份验证系统
- **NextAuth.js v4** 与 Google OAuth 提供商
- 配置文件：`src/lib/auth.ts`
- API 路由：`src/app/api/auth/[...nextauth]/`
- JWT 会话存储
- 需要的环境变量：`GOOGLE_CLIENT_ID`、`GOOGLE_CLIENT_SECRET`、`NEXTAUTH_URL`、`NEXTAUTH_SECRET`

### 国际化 (i18n)
- **4种语言**：英语 (en)、中文 (zh)、西班牙语 (es)、法语 (fr)
- 基于语言环境的路由：`/[locale]/...`
- 通过中间件自动语言检测
- 翻译文件在 `src/messages/`
- 配置在 `src/app/config/`

### 关键目录
- `src/app/` - Next.js App Router 页面和 API 路由
- `src/components/` - 可重用的 React 组件
- `src/lib/` - 实用程序和配置
- `src/types/` - TypeScript 类型定义
- `public/data/` - 游戏数据 JSON 文件
- `public/images/` - 静态图像和游戏资源

### 重要模式
- 使用 `src/lib/getMessages.ts` 中的 `getMessages()` 进行翻译
- 通过 `next-auth/react` 的 `useSession()` 进行会话管理
- 使用 Next.js Image 组件进行图像优化（已配置 Google 图像）
- 使用 Tailwind CSS 和自定义 CSS 进行响应式设计

### 环境设置
将 `.env.example` 复制到 `.env.local` 并配置：
- Google OAuth 凭据
- NextAuth 配置
- Google Analytics ID（可选）

### 部署
- 针对 Vercel 部署优化
- `vercel.json` 配置重定向和标头
- 构建命令：`npm run build`