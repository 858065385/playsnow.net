'use client'

import { Locale } from '@/app/config/i18n'

// 私有组件翻译
const translations = {
  en: {
    title: 'About PlayNow',
    lastUpdated: 'Last updated: November 4, 2025',
    welcome:
      'PlayNow is a lightweight browser-game index that helps you jump into playable titles instantly. Our latest refresh reorganised the catalogue and expanded localisation so players worldwide can browse with ease.',
    focusTitle: 'What we focus on',
    focusItems: [
      'Curating casual and web games by theme so you can spot the right title fast',
      'Highlighting gameplay notes, device hints, and reliable outbound links',
      'Keeping the mobile experience lightweight for quick play sessions anywhere'
    ],
    updates:
      'In November 2025 we streamlined content structure, refreshed category tags, and added legal links across every locale.',
    roadmapTitle: 'Next on our roadmap',
    roadmapItems: [
      'Weekly updates to “New Arrivals” and “Player Favourites” spotlights',
      'More language coverage based on community feedback',
      'Content tidy-ups in collaboration with rights holders'
    ],
    contactTitle: 'Contact',
    contactText: 'Email: karkanini9@gmail.com (reach out for listings, edits, or takedown requests).',
    thankYou: 'Thanks for visiting PlayNow — enjoy your session!'
  },
  zh: {
    title: '关于 PlayNow',
    lastUpdated: '最后更新：2025 年 11 月 4 日',
    welcome:
      'PlayNow 是一个轻量的网页小游戏索引站，帮助你随时随地快速找到可玩的作品。我们在本次更新中重组了内容结构，并扩展了多语言页面，方便全球玩家浏览。',
    focusTitle: '我们关注的重点',
    focusItems: [
      '按主题整理网页/休闲小游戏，帮助你迅速找到合适的内容',
      '提供一句话玩法亮点、设备提示和可信跳转链接，节省筛选时间',
      '保持移动端加载轻量，随时打开就能玩'
    ],
    updates:
      '在 2025 年 11 月的更新中，我们优化了分类标签，并在所有语言版本中加入了法律与隐私链接。',
    roadmapTitle: '接下来我们会做',
    roadmapItems: [
      '每周更新“最新上架”和“玩家热度”榜单',
      '根据反馈继续扩展语言支持',
      '与版权方合作维护和清理内容'
    ],
    contactTitle: '联系我们',
    contactText: '邮箱：karkanini9@gmail.com（用于上架、信息修改或下架请求）',
    thankYou: '感谢访问 PlayNow，祝你玩得开心！'
  },
  es: {
    title: 'Acerca de PlayNow',
    lastUpdated: 'Última actualización: 4 de noviembre de 2025',
    welcome:
      'PlayNow es un índice ligero de juegos web que te permite entrar de inmediato a títulos jugables. En esta actualización reorganizamos el catálogo y ampliamos la localización para que los jugadores de todo el mundo naveguen sin fricciones.',
    focusTitle: 'En qué nos enfocamos',
    focusItems: [
      'Organizar juegos casuales y de navegador por temática para que encuentres rápido lo que buscas',
      'Compartir notas clave de jugabilidad, consejos de dispositivo y enlaces confiables',
      'Mantener una experiencia móvil liviana para jugar en cualquier momento'
    ],
    updates:
      'En noviembre de 2025 refinamos las etiquetas de categoría y añadimos enlaces legales en cada idioma.',
    roadmapTitle: 'Próximos pasos',
    roadmapItems: [
      'Actualizaciones semanales de “Novedades” y “Favoritos de jugadores”',
      'Más idiomas según la retroalimentación de la comunidad',
      'Revisión continua del contenido junto con los titulares de derechos'
    ],
    contactTitle: 'Contacto',
    contactText: 'Correo: karkanini9@gmail.com (listados, ajustes o solicitudes de retirada).',
    thankYou: 'Gracias por visitar PlayNow. ¡Que disfrutes tus partidas!'
  },
  fr: {
    title: 'À propos de PlayNow',
    lastUpdated: 'Dernière mise à jour : 4 novembre 2025',
    welcome:
      'PlayNow est un index léger de jeux web qui vous permet de lancer rapidement un titre jouable. Cette mise à jour réorganise notre catalogue et renforce la localisation afin de faciliter la navigation pour tous les joueurs.',
    focusTitle: 'Nos priorités',
    focusItems: [
      'Classer les jeux casual et HTML5 par thématique pour trouver rapidement le bon titre',
      'Lister les points clés du gameplay, les conseils d’appareil et des liens fiables',
      'Conserver une expérience mobile fluide pour jouer partout'
    ],
    updates:
      'En novembre 2025, nous avons affiné les balises de catégories et ajouté des liens légaux dans chaque langue.',
    roadmapTitle: 'Prochaines étapes',
    roadmapItems: [
      'Mises à jour hebdomadaires des rubriques « Nouveautés » et « Coups de cœur des joueurs »',
      'Support de nouvelles langues selon vos retours',
      'Nettoyage continu du contenu avec les ayants droit'
    ],
    contactTitle: 'Contact',
    contactText: 'E-mail : karkanini9@gmail.com (ajouts, modifications ou demandes de retrait).',
    thankYou: 'Merci de visiter PlayNow — bon jeu !'
  }
};

/**
 * 关于我们内容组件 - 客户端组件
 */
export function AboutContent({
  locale
}: {
  locale: Locale
}) {
  const t = translations[locale] || translations.en;

  return (
    <main className="main-content max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
        <p className="text-sm text-gray-500">{t.lastUpdated}</p>
      </header>

      <section className="space-y-4">
        <p className="text-lg">{t.welcome}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">{t.focusTitle}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t.focusItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <p>{t.updates}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">{t.roadmapTitle}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t.roadmapItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">{t.contactTitle}</h2>
        <p>{t.contactText}</p>
      </section>

      <p className="text-lg font-semibold">{t.thankYou}</p>
    </main>
  )
}
