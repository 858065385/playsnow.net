import { Locale } from '@/app/config/i18n'
import { getMessages } from '@/lib/getMessages'
import { AboutContent } from '@/components/AboutContent'

/**
 * 生成元数据
 */
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // 直接在页面中定义元数据
  const metadata = {
    en: {
      title: 'About PlayNow - PlayNow',
      description: 'Discover how PlayNow curates lightweight, multi-language browser games for instant play. Updated November 4, 2025.'
    },
    zh: {
      title: '关于 PlayNow - PlayNow',
      description: '了解 PlayNow 如何整理轻量多语言小游戏，帮助你随时开玩。最后更新于 2025 年 11 月 4 日。'
    },
    es: {
      title: 'Acerca de PlayNow - PlayNow',
      description: 'Descubre cómo PlayNow selecciona juegos ligeros y multilingües para jugar al instante. Actualizado el 4 de noviembre de 2025.'
    },
    fr: {
      title: 'À propos de PlayNow - PlayNow',
      description: 'Découvrez comment PlayNow sélectionne des jeux web légers et multilingues pour jouer instantanément. Mise à jour du 4 novembre 2025.'
    }
  }
  
  // 返回当前语言的元数据，如果不存在则使用英文
  return metadata[locale] || metadata.en
}

/**
 * 关于页面组件 - 服务器端
 */
export default async function AboutPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // 渲染客户端组件，传递必要的props
  return (
    <div>
      <AboutContent locale={locale} />
    </div>
  )
} 
