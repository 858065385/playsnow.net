'use client'

import { Locale } from '@/app/config/i18n'
import { useState, useEffect } from 'react'

interface AnimeCrusadersContentProps {
  locale: Locale
}

// 组件翻译
const translations = {
  en: {
    title: 'Anime Crusaders Codes & Tier List (September 2025)',
    subtitle: 'Active Codes & Character Rankings',
    description: 'Get the latest working codes for Anime Crusaders, character tier list, and redeem guide!',
    activeCodesTitle: '🎁 Active Anime Crusaders Codes',
    expiredCodesTitle: '⏰ Expired Codes',
    howToRedeemTitle: 'How to Redeem Codes in Anime Crusaders',
    howToRedeemStep1: 'Launch Anime Crusaders in Roblox',
    howToRedeemStep2: 'Click the Twitter icon on the left side of the screen',
    howToRedeemStep3: 'Enter your code in the "Enter Code" box',
    howToRedeemStep4: 'Click "Redeem" to claim your rewards',
    codeCopied: 'Code copied to clipboard!',
    lastUpdated: 'Last updated:',
    disclaimer: 'Codes are case-sensitive and may expire without notice. Use them as soon as possible!',
    dataSource: 'Data Source: Codes collected from Beebom, PCGamesN, Player.One, and other gaming media sources. Last verified: September 25, 2025. Please verify codes in-game before using.',
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'Q: Why are my Anime Crusaders Codes not working?',
    faqA1: 'A: Codes may have expired or you might have entered them incorrectly. Please copy and paste to avoid errors.',
    faqQ2: 'Q: When are new Anime Crusaders Codes released?',
    faqA2: 'A: New codes are typically released during game updates, like milestones, or compensation events.',
    faqQ3: 'Q: Where can I find the latest codes first?',
    faqA3: 'A: Developers often post codes on official Discord, Twitter (X), and in-game announcements. This page updates immediately when new codes are released.',
    rewardsGems: 'Gems',
    rewardsGold: 'Gold',
    rewardsBoost: 'Boost',
    codeStatusActive: 'Active',
    codeStatusExpired: 'Expired'
  },
  zh: {
    title: 'Anime Crusaders 代码与角色排行（2025年9月）',
    subtitle: '最新可用代码与角色强度排行',
    description: '获取 Anime Crusaders 最新兑换码、角色排行表和兑换指南！',
    activeCodesTitle: '🎁 有效的 Anime Crusaders 代码',
    expiredCodesTitle: '⏰ 已过期代码',
    howToRedeemTitle: '如何在 Anime Crusaders 中兑换代码',
    howToRedeemStep1: '在 Roblox 中启动 Anime Crusaders',
    howToRedeemStep2: '点击屏幕左侧的 Twitter 图标',
    howToRedeemStep3: '在"输入代码"框中输入您的代码',
    howToRedeemStep4: '点击"兑换"领取您的奖励',
    codeCopied: '代码已复制到剪贴板！',
    lastUpdated: '最后更新：',
    disclaimer: '代码区分大小写，可能随时过期。请尽快使用！',
    dataSource: '数据来源：代码收集自 Beebom、PCGamesN、Player.One 等游戏媒体资源。最后验证：2025年9月25日。使用前请在游戏中验证。',
    rewardsGems: '宝石',
    rewardsGold: '金币',
    rewardsBoost: '增益',
    codeStatusActive: '有效',
    codeStatusExpired: '已过期',
    faqTitle: '常见问题',
    faqQ1: '问：为什么我的 Anime Crusaders 代码不能使用？',
    faqA1: '答：代码可能已经过期，或者输入时大小写不对。请复制粘贴以避免错误。',
    faqQ2: '问：新的 Anime Crusaders 代码什么时候发布？',
    faqA2: '答：通常会在游戏更新、点赞里程碑或补偿活动时发布。',
    faqQ3: '问：我在哪里可以第一时间找到最新代码？',
    faqA3: '答：开发者常在官方 Discord、Twitter (X) 和公告中发布。本页面会在新代码发布时立即更新。'
  },
  es: {
    title: 'Códigos de Anime Crusaders (Diciembre 2024)',
    subtitle: 'Códigos Activos para Recompensas Gratis',
    description: '¡Obtén los códigos funcionales más recientes de Anime Crusaders para desbloquear gemas gratis, oro y recompensas exclusivas!',
    activeCodesTitle: '🎁 Códigos Activos de Anime Crusaders',
    expiredCodesTitle: '⏰ Códigos Expirados',
    howToRedeemTitle: 'Cómo Canjear Códigos en Anime Crusaders',
    howToRedeemStep1: 'Inicia Anime Crusaders en Roblox',
    howToRedeemStep2: 'Haz clic en el ícono de Twitter en el lado izquierdo de la pantalla',
    howToRedeemStep3: 'Ingresa tu código en el cuadro "Enter Code"',
    howToRedeemStep4: 'Haz clic en "Redeem" para reclamar tus recompensas',
    codeCopied: '¡Código copiado al portapapeles!',
    lastUpdated: 'Última actualización:',
    disclaimer: '¡Los códigos distinguen entre mayúsculas y minúsculas y pueden expirar sin previo aviso. ¡Úsalos lo antes posible!',
    dataSource: 'Fuente de Datos: Los códigos se recopilan de los canales oficiales de redes sociales de Anime Crusaders (Twitter, Discord) y fuentes comunitarias. Verifica los códigos antes de usarlos.',
    rewardsGems: 'Gemas',
    rewardsGold: 'Oro',
    rewardsBoost: 'Impulso',
    codeStatusActive: 'Activo',
    codeStatusExpired: 'Expirado',
    faqTitle: 'Preguntas Frecuentes',
    faqQ1: 'P: ¿Por qué mis códigos de Anime Crusaders no funcionan?',
    faqA1: 'R: Los códigos pueden haber expirado o los ingresaste incorrectamente. Por favor, copia y pega para evitar errores.',
    faqQ2: 'P: ¿Cuándo se lanzan nuevos códigos de Anime Crusaders?',
    faqA2: 'R: Generalmente se lanzan durante actualizaciones del juego, hitos de likes o eventos de compensación.',
    faqQ3: 'P: ¿Dónde puedo encontrar los códigos más recientes primero?',
    faqA3: 'R: Los desarrolladores a menudo publican códigos en Discord oficial, Twitter (X) y anuncios del juego. Esta página se actualiza inmediatamente cuando se lanzan nuevos códigos.'
  },
  fr: {
    title: 'Codes Anime Crusaders (Décembre 2024)',
    subtitle: 'Codes Actifs pour Récompenses Gratuites',
    description: 'Obtenez les derniers codes fonctionnels pour Anime Crusaders pour débloquer des gemmes gratuites, de l\'or et des récompenses exclusives!',
    activeCodesTitle: '🎁 Codes Actifs Anime Crusaders',
    expiredCodesTitle: '⏰ Codes Expirés',
    howToRedeemTitle: 'Comment Échanger des Codes dans Anime Crusaders',
    howToRedeemStep1: 'Lancez Anime Crusaders dans Roblox',
    howToRedeemStep2: 'Cliquez sur l\'icône Twitter sur le côté gauche de l\'écran',
    howToRedeemStep3: 'Entrez votre code dans la case "Enter Code"',
    howToRedeemStep4: 'Cliquez sur "Redeem" pour réclamer vos récompenses',
    codeCopied: 'Code copié dans le presse-papiers !',
    lastUpdated: 'Dernière mise à jour:',
    disclaimer: 'Les codes sont sensibles à la casse et peuvent expirer sans préavis. Utilisez-les dès que possible!',
    dataSource: 'Source des Données: Les codes sont collectés depuis les chaînes officielles de réseaux sociaux d\'Anime Crusaders (Twitter, Discord) et des sources communautaires. Veuillez vérifier les codes avant de les utiliser.',
    rewardsGems: 'Gemmes',
    rewardsGold: 'Or',
    rewardsBoost: 'Bonus',
    codeStatusActive: 'Actif',
    codeStatusExpired: 'Expiré',
    faqTitle: 'Questions Fréquentes',
    faqQ1: 'Q: Pourquoi mes codes Anime Crusaders ne fonctionnent-ils pas ?',
    faqA1: 'R: Les codes ont peut-être expiré ou vous les avez entrés incorrectement. Veuillez copier et coller pour éviter les erreurs.',
    faqQ2: 'Q: Quand les nouveaux codes Anime Crusaders sont-ils publiés ?',
    faqA2: 'R: De nouveaux codes sont généralement publiés lors des mises à jour du jeu, des jalons de likes ou des événements de compensation.',
    faqQ3: 'Q: Où puis-je trouver les codes les plus récents en premier ?',
    faqA3: 'R: Les développeurs publient souvent des codes sur Discord officiel, Twitter (X) et les annonces du jeu. Cette page se met à jour immédiatement lorsque de nouveaux codes sont publiés.'
  }
}

interface Code {
  code: string
  rewards: string[]
  status: 'active' | 'expired'
}

export function AnimeCrusadersContent({ locale }: AnimeCrusadersContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const t = translations[locale] || translations.en
  
  // 代码数据 - 更新至 2025 年 9 月
  const activeCodes: Code[] = [
    {
      code: 'THANKSFOR200KLIKES',
      rewards: ['15 Rerolls', '2000 Gems'],
      status: 'active'
    },
    {
      code: 'THANKSFOR175KLIKES',
      rewards: ['15 Rerolls', '2000 Gems'],
      status: 'active'
    },
    {
      code: 'CIDISBACK',
      rewards: ['Cid headstart package'],
      status: 'active'
    },
    {
      code: 'THANKSFOR150KLIKES',
      rewards: ['15 Rerolls', '2000 Gems'],
      status: 'active'
    },
    {
      code: 'UPDATE0.5',
      rewards: ['2000 Gems', 'Trait Tokens'],
      status: 'active'
    },
    {
      code: 'THANKSFOR100KLIKES',
      rewards: ['2000 Gems', 'Trait Tokens'],
      status: 'active'
    },
    {
      code: 'Follow32_A1',
      rewards: ['Style Reward'],
      status: 'active'
    },
    {
      code: 'SubToZerozKinger',
      rewards: ['Style Reward'],
      status: 'active'
    },
    {
      code: 'ThanksForTheSupport',
      rewards: ['Reroll Tokens', '500 Gems'],
      status: 'active'
    },
    {
      code: 'TYFORTHESUPPORT',
      rewards: ['5 Rerolls', '500 Gems'],
      status: 'active'
    },
    {
      code: 'SORRYABOUTSHUTDOWNSANDBUGS',
      rewards: ['15 Rerolls', '1500 Gems'],
      status: 'active'
    },
    {
      code: 'EARLYACCESS',
      rewards: ['Early Access Reward'],
      status: 'active'
    }
  ]

  const expiredCodes: Code[] = [
    {
      code: 'THANKSFOR75KLIKES',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'SORRYABOUTBPBUG',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'THANKSFOR25KLIKES',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'THANKSFOR10KLIKES',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'SORRYFORCHALLENGES',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'RELEASE',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'RELEASEDELAY',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'MONARCHEVENT',
      rewards: ['Expired'],
      status: 'expired'
    },
    {
      code: 'THESYSTEM',
      rewards: ['Expired'],
      status: 'expired'
    }
  ]

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const renderCodeCard = (code: Code) => (
    <div key={code.code} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-yellow-400 font-mono">{code.code}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          code.status === 'active' 
            ? 'bg-green-600 text-white' 
            : 'bg-red-600 text-white'
        }`}>
          {code.status === 'active' ? t.codeStatusActive : t.codeStatusExpired}
        </span>
      </div>
      <div className="text-sm text-gray-300 mb-3">
        <strong>Rewards:</strong> {code.rewards.join(', ')}
      </div>
      {code.status === 'active' && (
        <button
          onClick={() => copyToClipboard(code.code)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
        >
          {copiedCode === code.code ? t.codeCopied : 'Copy Code'}
        </button>
      )}
    </div>
  )

  // 添加结构化数据
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentT = t as any
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": currentT.faqQ1?.replace('Q: ', '').replace('问：', '').replace('P: ', '').replace('Q: ', ''),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": currentT.faqA1?.replace('A: ', '').replace('答：', '').replace('R: ', '').replace('A: ', '')
            }
          },
          {
            "@type": "Question",
            "name": currentT.faqQ2?.replace('Q: ', '').replace('问：', '').replace('P: ', '').replace('Q: ', ''),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": currentT.faqA2?.replace('A: ', '').replace('答：', '').replace('R: ', '').replace('A: ', '')
            }
          },
          {
            "@type": "Question",
            "name": currentT.faqQ3?.replace('Q: ', '').replace('问：', '').replace('P: ', '').replace('Q: ', ''),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": currentT.faqA3?.replace('A: ', '').replace('答：', '').replace('R: ', '').replace('A: ', '')
            }
          }
        ]
      }

      // 创建或更新结构化数据脚本
      let script = document.querySelector('script[type="application/ld+json"][data-anime-crusaders]') as HTMLScriptElement
      if (!script) {
        script = document.createElement('script') as HTMLScriptElement
        script.type = 'application/ld+json'
        script.setAttribute('data-anime-crusaders', 'true')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData, null, 2)
    }
  }, [locale, t])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 头部 - SEO 优化 */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
        <h2 className="text-2xl text-purple-400 mb-4">{t.subtitle}</h2>
        <p className="text-gray-300 text-lg mb-4">{t.description}</p>
        <p className="text-gray-400 text-sm">
          Searching for &quot;anime crusaders codes&quot; or &quot;code anime crusaders&quot;? You&apos;ve found the most comprehensive and up-to-date resource!
        </p>
      </div>

      {/* 有效代码 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">{t.activeCodesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCodes.map(renderCodeCard)}
        </div>
      </section>

      {/* 兑换教程 */}
      <section className="mb-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">{t.howToRedeemTitle}</h2>
        <ol className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
            {t.howToRedeemStep1}
          </li>
          <li className="flex items-start">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
            {t.howToRedeemStep2}
          </li>
          <li className="flex items-start">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
            {t.howToRedeemStep3}
          </li>
          <li className="flex items-start">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
            {t.howToRedeemStep4}
          </li>
        </ol>
      </section>

      {/* 角色排行 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">📊 Character Tier List</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">S Tier (Top Units)</h3>
              <p className="text-gray-300 text-sm">Sun Woo (System), Brulo (Rage), Shadow (Atomic), Igrith (Blood Commander), Nagu (Blade Trickster), Goko (Perfected Super III), Getu, Lao, Enol</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">A Tier (Very Strong)</h3>
              <p className="text-gray-300 text-sm">Fat Hitman, Toju, Haein, Shaoten, Chonin, Heisou</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">B/C/D Tier (Support/Early Game)</h3>
              <p className="text-gray-300 text-sm">Rose, Golden Freezo, Ureo, and other situational units</p>
            </div>
          </div>
        </div>
      </section>

      {/* 已过期代码 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">{t.expiredCodesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expiredCodes.map(renderCodeCard)}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">{t.faqTitle}</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 space-y-4">
          <div>
            <p className="text-gray-300 font-medium">{t.faqQ1}</p>
            <p className="text-gray-400 text-sm mt-1">{t.faqA1}</p>
          </div>
          <div>
            <p className="text-gray-300 font-medium">{t.faqQ2}</p>
            <p className="text-gray-400 text-sm mt-1">{t.faqA2}</p>
          </div>
          <div>
            <p className="text-gray-300 font-medium">{t.faqQ3}</p>
            <p className="text-gray-400 text-sm mt-1">{t.faqA3}</p>
          </div>
        </div>
      </section>

      {/* 免责声明和数据来源 */}
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-sm text-gray-400">
        <p>⚠️ {t.disclaimer}</p>
        <p className="mt-2">📊 {t.dataSource}</p>
        <p className="mt-2">{t.lastUpdated} September 25, 2025</p>
      </div>
    </div>
  )
}