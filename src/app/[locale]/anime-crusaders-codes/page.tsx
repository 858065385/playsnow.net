import { Locale } from '@/app/config/i18n'
import { getMessages } from '@/lib/getMessages'
import { AnimeCrusadersContent } from '@/components/AnimeCrusadersContent'

/**
 * 生成元数据 - SEO 优化
 */
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // 直接在页面中定义元数据
  const metadata = {
    en: {
      title: 'Anime Crusaders Codes (2025 Latest) - PlayNow',
      description: 'Latest Anime Crusaders codes collection including active and expired codes. Get free Gems, Rerolls, Trait Tokens quickly. Updated September 2025.',
      keywords: 'anime crusaders codes, code anime crusaders, roblox anime crusaders redeem, anime crusaders gift codes, anime crusaders redeem codes 2025'
    },
    zh: {
      title: 'Anime Crusaders 代码（2025最新） - PlayNow',
      description: '最新 Anime Crusaders 代码整理，包括可用兑换码与过期兑换码，帮助你快速获取 Gems、Rerolls、Trait Tokens。',
      keywords: 'anime crusaders 代码, anime crusaders 兑换码, roblox anime crusaders, anime crusaders 礼包码, anime crusaders 最新代码'
    },
    es: {
      title: 'Códigos de Anime Crusaders (2025) - PlayNow',
      description: 'Colección de códigos de Anime Crusaders más recientes, incluye códigos activos y expirados. Obtén Gems, Rerolls, Trait Tokens gratis.',
      keywords: 'códigos anime crusaders, código anime crusaders, roblox anime crusaders canjear, códigos regalo anime crusaders'
    },
    fr: {
      title: 'Codes Anime Crusaders (2025) - PlayNow',
      description: 'Collection des derniers codes Anime Crusaders, incluant les codes actifs et expirés. Obtenez des Gems, Rerolls, Trait Tokens gratuits.',
      keywords: 'codes anime crusaders, code anime crusaders, roblox anime crusaders échanger, codes cadeaux anime crusaders'
    }
  }
  
  const currentMetadata = metadata[locale] || metadata.en
  
  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
      type: 'website',
      locale: locale,
      url: `https://playsnow.net/${locale}/anime-crusaders-codes`,
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
    },
    alternates: {
      canonical: `https://playsnow.net/${locale}/anime-crusaders-codes`,
      languages: {
        'en': 'https://playsnow.net/en/anime-crusaders-codes',
        'zh': 'https://playsnow.net/zh/anime-crusaders-codes',
        'es': 'https://playsnow.net/es/anime-crusaders-codes',
        'fr': 'https://playsnow.net/fr/anime-crusaders-codes',
      }
    }
  }
}

/**
 * Anime Crusaders Codes 页面组件 - 服务器端
 */
export default async function AnimeCrusadersPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // 渲染客户端组件，传递必要的props
  return (
    <div>
      <AnimeCrusadersContent locale={locale} />
    </div>
  )
}