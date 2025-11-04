import { Locale } from '@/app/config/i18n'
import { LocaleParams } from '@/app/types/routeParams'

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type PrivacyTranslation = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
};

const translations: Record<Locale, PrivacyTranslation> & { [key: string]: PrivacyTranslation } = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: November 4, 2025',
    intro:
      'PlayNow (“we”, “our”, “us”) values your privacy. This November 2025 refresh clarifies how our multi-language catalogue works and when third-party services may touch your data. By using https://playsnow.net you agree to this policy.',
    sections: [
      {
        heading: 'Information We May Collect',
        paragraphs: [
          'To keep the site reliable we log non-identifiable usage data such as IP address, browser type, pages viewed, referrers, and visit duration.',
          'If you email us, we receive the contact details you provide (name, email address) along with your message so that we can respond.'
        ]
      },
      {
        heading: 'How We Use Information',
        paragraphs: [
          'We use collected information to operate and improve PlayNow, analyse aggregated traffic trends, support your requests, and comply with legal obligations when necessary.'
        ]
      },
      {
        heading: 'Cookies & Third-Party Services',
        paragraphs: [
          'We may rely on cookies or similar technologies for analytics and advertising partners such as Google AdSense or Google Analytics.'
        ],
        bullets: [
          'Third parties can log IP address, browser details, timestamps, pages viewed, and ad impressions or clicks.',
          'Those cookies are controlled by the third party; we cannot access or alter them.',
          'You can review the partner’s privacy notices to understand how they process data and opt out of personalised ads.',
          'Whenever we add new tracking or advertising partners, we will list them here and provide opt-out guidance.'
        ]
      },
      {
        heading: 'External Links',
        paragraphs: [
          'PlayNow includes links to third-party game sites or download portals. Their content, security, and privacy practices are outside our control. Please review each site’s policies before sharing information.'
        ]
      },
      {
        heading: 'Data Retention',
        paragraphs: [
          'We retain information only for as long as needed to fulfil the purposes in this policy unless law requires a longer period. When it is no longer needed, we delete or anonymise it.'
        ]
      },
      {
        heading: 'Children’s Privacy',
        paragraphs: [
          'PlayNow targets a general audience and does not knowingly collect personal data from children under 13. If you believe we received such data without parental consent, please contact us so we can remove it.'
        ]
      },
      {
        heading: 'Policy Updates',
        paragraphs: [
          'We may revise this policy from time to time. We will highlight the “last updated” date above and where appropriate post in-product notices. Continued use of the site after updates means you accept the changes.'
        ]
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'For privacy requests, copyright notices, or takedown questions email karkanini9@gmail.com.'
        ]
      }
    ]
  },
  zh: {
    title: '隐私政策',
    lastUpdated: '最后更新：2025 年 11 月 4 日',
    intro:
      'PlayNow（以下简称“我们”）重视您的隐私。本次 2025 年 11 月更新说明了多语言目录的工作方式，并进一步明确了第三方服务可能接触到的数据范围。访问 https://playsnow.net 即表示您同意本政策。',
    sections: [
      {
        heading: '我们可能收集的信息',
        paragraphs: [
          '为保证网站稳定运行，我们会记录不含直接身份识别的信息，如 IP 地址、浏览器类型、访问页面、来源链接和停留时长等。',
          '当您通过邮箱与我们联系时，我们会收到您提供的联系方式（姓名、邮箱）以及留言内容，以便回复。'
        ]
      },
      {
        heading: '我们如何使用这些信息',
        paragraphs: [
          '这些信息用于维护和改进 PlayNow 的服务质量、统计访问趋势、处理您的请求，并在必要时履行法律义务。'
        ]
      },
      {
        heading: 'Cookies 与第三方服务',
        paragraphs: [
          '我们可能会使用 Cookies 或类似技术，并接入如 Google AdSense、Google Analytics 等第三方分析或广告服务。'
        ],
        bullets: [
          '第三方可能记录的内容包括：IP 地址、浏览器信息、访问时间、浏览页面以及广告展示或点击情况。',
          '这些 Cookies 由第三方设置和管理，我们无法访问或修改其内容。',
          '您可以查阅第三方的隐私声明，了解它们如何处理数据，并按指引退出个性化广告。',
          '如新增任何追踪或广告合作伙伴，我们会在本页及时列出并提供退出方法。'
        ]
      },
      {
        heading: '外部链接说明',
        paragraphs: [
          'PlayNow 会推荐第三方的游戏下载页或官方网站。这些站点的内容、安全和隐私做法均不受我们控制，建议您在提交信息前先阅读其政策。'
        ]
      },
      {
        heading: '数据保存',
        paragraphs: [
          '除法律要求外，我们仅在实现本政策所述目的所必需的期间内保存相关信息，期满后会删除或匿名化处理。'
        ]
      },
      {
        heading: '未成年人保护',
        paragraphs: [
          'PlayNow 面向普通互联网用户，并不会主动收集 13 岁以下儿童的个人信息。如您认为我们未经监护人同意收集了相关信息，请及时联系我们删除。'
        ]
      },
      {
        heading: '政策更新',
        paragraphs: [
          '我们可能不时更新本隐私政策，并在上方显著位置标注“最后更新”日期；必要时会通过站内提示说明更新要点。继续使用本网站即表示您接受更新后的条款。'
        ]
      },
      {
        heading: '联系我们',
        paragraphs: [
          '如需提交隐私请求、版权通知或下架申请，请发送邮件至 karkanini9@gmail.com。'
        ]
      }
    ]
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 4 de noviembre de 2025',
    intro:
      'PlayNow (“nosotros”) valora su privacidad. Esta actualización de noviembre de 2025 aclara cómo funciona nuestro catálogo multilingüe y cuándo pueden actuar servicios de terceros. Al usar https://playsnow.net usted acepta esta política.',
    sections: [
      {
        heading: 'Información que Podemos Recopilar',
        paragraphs: [
          'Para mantener el sitio estable registramos datos de uso no identificables, como dirección IP, tipo de navegador, páginas visitadas, referencias y duración de la visita.',
          'Si nos escribe por correo electrónico, recibiremos los datos de contacto que proporcione (nombre, correo) y el contenido del mensaje para poder responderle.'
        ]
      },
      {
        heading: 'Cómo Utilizamos la Información',
        paragraphs: [
          'La información recopilada se usa para operar y mejorar PlayNow, analizar tendencias agregadas de tráfico, atender sus solicitudes y cumplir obligaciones legales cuando corresponda.'
        ]
      },
      {
        heading: 'Cookies y Servicios de Terceros',
        paragraphs: [
          'Podemos utilizar cookies u otras tecnologías similares con socios de analítica o publicidad como Google AdSense o Google Analytics.'
        ],
        bullets: [
          'Los terceros pueden registrar dirección IP, detalles del navegador, hora de visita, páginas vistas y datos de impresiones o clics publicitarios.',
          'Dichas cookies están controladas por el tercero; no tenemos acceso ni podemos modificarlas.',
          'Consulte los avisos de privacidad de cada socio para conocer cómo procesan los datos y cómo optar por no recibir publicidad personalizada.',
          'Cuando incorporemos nuevos socios de seguimiento o publicidad, los listaremos aquí y facilitaremos instrucciones para optar por no participar.'
        ]
      },
      {
        heading: 'Enlaces Externos',
        paragraphs: [
          'PlayNow ofrece enlaces a sitios de terceros o portales de descarga. Su contenido, seguridad y prácticas de privacidad escapan a nuestro control; revise sus políticas antes de compartir información.'
        ]
      },
      {
        heading: 'Conservación de Datos',
        paragraphs: [
          'Conservamos la información solo durante el tiempo necesario para los fines descritos en esta política, salvo que la ley exija un periodo mayor; después la eliminamos o la anonimamos.'
        ]
      },
      {
        heading: 'Privacidad de Menores',
        paragraphs: [
          'PlayNow está dirigido a un público general y no recopila deliberadamente datos personales de menores de 13 años. Si cree que hemos recibido dicha información sin consentimiento, contáctenos para eliminarla.'
        ]
      },
      {
        heading: 'Actualizaciones de la Política',
        paragraphs: [
          'Podemos actualizar esta política en cualquier momento. Destacaremos la fecha de “última actualización” y, cuando sea necesario, emitiremos avisos dentro del sitio. El uso continuado implica la aceptación de los cambios.'
        ]
      },
      {
        heading: 'Contacto',
        paragraphs: [
          'Para consultas de privacidad, avisos de derechos de autor o solicitudes de retirada, escriba a karkanini9@gmail.com.'
        ]
      }
    ]
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 4 novembre 2025',
    intro:
      'PlayNow (« nous ») respecte votre vie privée. Cette mise à jour de novembre 2025 précise le fonctionnement de notre catalogue multilingue et les situations où des services tiers peuvent traiter vos données. En utilisant https://playsnow.net, vous acceptez cette politique.',
    sections: [
      {
        heading: 'Informations que Nous Pouvons Collecter',
        paragraphs: [
          'Pour assurer la stabilité du site, nous enregistrons des données d’utilisation non identifiables telles que l’adresse IP, le type de navigateur, les pages consultées, les référents et la durée de visite.',
          'Si vous nous contactez par e-mail, nous recevons les coordonnées que vous fournissez (nom, adresse e-mail) ainsi que votre message afin de vous répondre.'
        ]
      },
      {
        heading: 'Utilisation des Informations',
        paragraphs: [
          'Les informations collectées servent à exploiter et améliorer PlayNow, analyser les tendances de trafic agrégées, répondre à vos demandes et respecter nos obligations légales le cas échéant.'
        ]
      },
      {
        heading: 'Cookies et Services Tiers',
        paragraphs: [
          'Nous pouvons utiliser des cookies ou technologies similaires avec des partenaires d’analyse ou de publicité tels que Google AdSense ou Google Analytics.'
        ],
        bullets: [
          'Les tiers peuvent enregistrer l’adresse IP, les détails du navigateur, l’horodatage, les pages consultées et les impressions ou clics publicitaires.',
          'Ces cookies sont contrôlés par le tiers ; nous ne pouvons pas les consulter ni les modifier.',
          'Consultez les politiques de confidentialité des partenaires pour connaître leur traitement des données et la procédure de désactivation de la publicité personnalisée.',
          'Tout nouveau partenaire de suivi ou de publicité sera indiqué ici avec les instructions de désactivation.'
        ]
      },
      {
        heading: 'Liens Externes',
        paragraphs: [
          'PlayNow propose des liens vers des sites de jeux tiers ou des portails de téléchargement. Leur contenu, leur sécurité et leurs pratiques de confidentialité ne sont pas sous notre contrôle ; veuillez consulter leurs politiques avant de partager des informations.'
        ]
      },
      {
        heading: 'Conservation des Données',
        paragraphs: [
          'Nous conservons les informations uniquement le temps nécessaire pour atteindre les objectifs décrits dans cette politique, sauf obligation légale contraire. Ensuite, nous les supprimons ou les anonymisons.'
        ]
      },
      {
        heading: 'Protection des Mineurs',
        paragraphs: [
          'PlayNow s’adresse au grand public et ne collecte pas sciemment de données personnelles sur les enfants de moins de 13 ans. Si vous pensez que nous avons reçu de telles données sans consentement parental, contactez-nous pour les supprimer.'
        ]
      },
      {
        heading: 'Mises à Jour de la Politique',
        paragraphs: [
          'Nous pouvons modifier cette politique à tout moment. Nous mettrons en évidence la date de « dernière mise à jour » et, si nécessaire, publierons des notifications sur le site. La poursuite de l’utilisation vaut acceptation des modifications.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Pour toute demande liée à la confidentialité, aux droits d’auteur ou aux retraits de contenu, écrivez-nous à karkanini9@gmail.com.'
        ]
      }
    ]
  }
};

/**
 * 生成元数据
 */
export async function generateMetadata({
  params
}: LocaleParams) {
  const { locale } = await Promise.resolve(params)
  const t = translations[locale] || translations.en
  
  return {
    title: `${t.title} - PlayNow`,
    description: t.intro
  }
}

/**
 * 隐私政策页面组件
 */
export default async function PrivacyPolicyPage({
  params
}: LocaleParams) {
  const { locale } = await Promise.resolve(params)
  const t = translations[locale] || translations.en;
  
  return (
    <main className="main-content max-w-4xl mx-auto p-4 md:p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="text-sm text-gray-500">{t.lastUpdated}</p>
        <p className="text-lg">{t.intro}</p>
      </header>

      {t.sections.map((section, index) => (
        <section key={index} className="space-y-3">
          <h2 className="text-2xl font-semibold">{section.heading}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul className="list-disc list-inside space-y-2">
              {section.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  )
}
