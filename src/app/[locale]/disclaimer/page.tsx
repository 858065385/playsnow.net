import { Locale } from '@/app/config/i18n'
import { LocaleParams } from '@/app/types/routeParams'

type Section = {
  heading: string;
  paragraphs: string[];
};

type DisclaimerTranslation = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
};

const translations: Record<Locale, DisclaimerTranslation> & { [key: string]: DisclaimerTranslation } = {
  en: {
    title: 'Disclaimer',
    lastUpdated: 'Last updated: November 4, 2025',
    intro:
      'Welcome to https://playsnow.net (“PlayNow”). Please read this disclaimer before using the site. By browsing or interacting with any content you acknowledge and agree to the statements below.',
    sections: [
      {
        heading: 'Third-Party Games and Copyright',
        paragraphs: [
          'Many game titles, screenshots, icons, and descriptions displayed on PlayNow belong to their respective copyright owners or are sourced from openly available materials.',
          'PlayNow only curates, categorises, and recommends publicly accessible resources and does not claim ownership of third-party content. If you are a rights holder and wish to request listing changes or removal, contact us and we will respond promptly after verification.'
        ]
      },
      {
        heading: 'External Links',
        paragraphs: [
          'Links on PlayNow may send you to third-party websites, stores, or download portals. These destinations are outside our control. You assume all risk for visiting or interacting with external sites; please review their security and privacy practices independently.'
        ]
      },
      {
        heading: 'Downloads and Usage',
        paragraphs: [
          'Some games or resources require you to download files, register, or make purchases on third-party platforms. Any such actions—including downloads, installations, payments, account logins, or the submission of personal information—are exclusively between you and the provider. PlayNow bears no responsibility for associated outcomes.'
        ]
      },
      {
        heading: 'Information Accuracy',
        paragraphs: [
          'We strive to keep listings timely and accurate, but game content may change without notice (version updates, renames, gameplay adjustments, removals). We cannot guarantee that every detail remains current, and reliance on the information provided is at your own risk.'
        ]
      },
      {
        heading: 'Advertising',
        paragraphs: [
          'PlayNow may display advertisements or promotional placements supplied by third parties. Advertisers are solely responsible for the truthfulness and legality of their materials. Any transaction or interaction between you and an advertiser is independent of PlayNow.'
        ]
      },
      {
        heading: 'Changes to this Disclaimer',
        paragraphs: [
          'We reserve the right to modify this disclaimer at any time. Updates take effect once published on this page, so please review it periodically.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [
          'For questions about this disclaimer or to submit copyright/takedown requests, email karkanini9@gmail.com.'
        ]
      }
    ]
  },
  zh: {
    title: '免责声明',
    lastUpdated: '最后更新：2025 年 11 月 4 日',
    intro:
      '欢迎访问 https://playsnow.net（“PlayNow”）。在使用本站内容之前请仔细阅读本免责声明。一旦访问或使用，即视为您已知晓并同意以下声明。',
    sections: [
      {
        heading: '第三方游戏与版权',
        paragraphs: [
          '本站展示的游戏名称、截图、图标、简介等资料，多数来自各自的版权所有者或公开可获取的素材。',
          'PlayNow 仅负责收录、分类和推荐公开资源，并不对第三方内容主张所有权。如您是权利人，需修改或下架相关内容，请与我们联系，我们会在核实后及时处理。'
        ]
      },
      {
        heading: '外部链接',
        paragraphs: [
          '本站提供的部分链接可能指向第三方网站、应用商店或下载页面。该等站点不受我们控制，您访问和使用第三方网站所产生的风险需自行承担，请自行审核其安全性与隐私政策。'
        ]
      },
      {
        heading: '下载与使用',
        paragraphs: [
          '如某些游戏或资源要求您在第三方平台下载、注册或付费，该平台上的所有操作（包括下载、安装、充值、账号登录、提交个人信息等）均与 PlayNow 无关，我们不对由此产生的结果负责。'
        ]
      },
      {
        heading: '信息准确性',
        paragraphs: [
          '我们会努力保持信息的及时与准确，但游戏内容可能随时发生变化（版本更新、改名、玩法调整或下架）。我们无法保证所有信息始终最新，您需要自行判断并承担由此带来的风险。'
        ]
      },
      {
        heading: '广告声明',
        paragraphs: [
          'PlayNow 可能展示第三方提供的广告或推广信息，其真实性、合法性以及所承诺的服务/商品由广告主自行负责。您与广告主之间的任何交易与 PlayNow 无关。'
        ]
      },
      {
        heading: '免责声明的变更',
        paragraphs: [
          '我们保留随时修改本声明的权利。变更内容一经在本页公布即刻生效，建议您定期查阅。'
        ]
      },
      {
        heading: '联系我们',
        paragraphs: [
          '如对本声明有疑问，或需提交版权/下架请求，请发送邮件至 karkanini9@gmail.com。'
        ]
      }
    ]
  },
  es: {
    title: 'Aviso Legal',
    lastUpdated: 'Última actualización: 4 de noviembre de 2025',
    intro:
      'Bienvenido a https://playsnow.net (“PlayNow”). Lea este aviso legal antes de utilizar el sitio. Al navegar o interactuar con el contenido, usted reconoce y acepta las declaraciones siguientes.',
    sections: [
      {
        heading: 'Juegos de Terceros y Derechos de Autor',
        paragraphs: [
          'Muchos títulos, capturas, iconos y descripciones mostrados en PlayNow pertenecen a sus respectivos titulares o provienen de recursos disponibles públicamente.',
          'PlayNow se limita a recopilar, clasificar y recomendar recursos accesibles y no reclama propiedad sobre contenido de terceros. Si usted es titular de derechos y desea modificar o retirar contenido, contáctenos y responderemos tras verificar la solicitud.'
        ]
      },
      {
        heading: 'Enlaces Externos',
        paragraphs: [
          'Algunos enlaces pueden dirigirlo a sitios web, tiendas o portales de descarga de terceros. Dichos destinos quedan fuera de nuestro control y cualquier riesgo derivado de su visita o interacción corre por su cuenta. Revise las políticas de seguridad y privacidad correspondientes.'
        ]
      },
      {
        heading: 'Descargas y Uso',
        paragraphs: [
          'Ciertos juegos o recursos pueden requerir descargar archivos, registrarse o pagar en plataformas externas. Estas acciones —incluyendo descargas, instalaciones, pagos, inicios de sesión o el envío de datos personales— son exclusivamente entre usted y el proveedor. PlayNow no asume responsabilidad por los resultados.'
        ]
      },
      {
        heading: 'Exactitud de la Información',
        paragraphs: [
          'Nos esforzamos por mantener la información actualizada, pero los juegos pueden cambiar sin aviso (actualizaciones, cambios de nombre, ajustes de jugabilidad, retiros). No podemos garantizar que cada detalle sea vigente y cualquier uso de la información se hace bajo su propio riesgo.'
        ]
      },
      {
        heading: 'Publicidad',
        paragraphs: [
          'PlayNow puede mostrar anuncios o promociones proporcionados por terceros. Los anunciantes son responsables de la veracidad y legalidad de su contenido. Cualquier transacción entre usted y un anunciante es independiente de PlayNow.'
        ]
      },
      {
        heading: 'Cambios en este Aviso',
        paragraphs: [
          'Nos reservamos el derecho de modificar este aviso legal en cualquier momento. Las actualizaciones entran en vigor cuando se publican en esta página; le recomendamos revisarla periódicamente.'
        ]
      },
      {
        heading: 'Contacto',
        paragraphs: [
          'Para consultas relacionadas con este aviso o solicitudes de derechos de autor/retiro, escriba a karkanini9@gmail.com.'
        ]
      }
    ]
  },
  fr: {
    title: 'Avis de Non-Responsabilité',
    lastUpdated: 'Dernière mise à jour : 4 novembre 2025',
    intro:
      'Bienvenue sur https://playsnow.net (« PlayNow »). Veuillez lire attentivement cet avis avant d’utiliser le site. En naviguant ou en interagissant avec le contenu, vous reconnaissez et acceptez les déclarations ci-dessous.',
    sections: [
      {
        heading: 'Jeux de Tiers et Droits d’Auteur',
        paragraphs: [
          'De nombreux jeux, captures d’écran, icônes et descriptions présentés sur PlayNow appartiennent à leurs ayants droit ou proviennent de ressources librement accessibles.',
          'PlayNow se limite à l’indexation, au classement et à la recommandation de ressources accessibles au public et ne revendique aucun droit de propriété sur les contenus tiers. Si vous êtes titulaire de droits et souhaitez demander une modification ou un retrait, contactez-nous et nous traiterons votre demande après vérification.'
        ]
      },
      {
        heading: 'Liens Externes',
        paragraphs: [
          'Certains liens peuvent vous diriger vers des sites, boutiques ou portails de téléchargement tiers. Ces destinations ne sont pas sous notre contrôle ; vous assumez les risques liés à leur utilisation. Veuillez vérifier leurs politiques de sécurité et de confidentialité.'
        ]
      },
      {
        heading: 'Téléchargements et Utilisation',
        paragraphs: [
          'Certains jeux ou ressources peuvent nécessiter un téléchargement, une inscription ou un paiement sur des plateformes tierces. Toutes ces actions — téléchargements, installations, paiements, connexions ou transmission d’informations personnelles — relèvent uniquement de vous et du fournisseur. PlayNow décline toute responsabilité à ce sujet.'
        ]
      },
      {
        heading: 'Exactitude des Informations',
        paragraphs: [
          'Nous nous efforçons de maintenir des informations à jour, mais les jeux peuvent être modifiés sans préavis (mises à jour, changements de nom, ajustements de gameplay, retraits). Nous ne pouvons garantir l’actualité exhaustive des données ; toute utilisation se fait à vos risques.'
        ]
      },
      {
        heading: 'Publicité',
        paragraphs: [
          'PlayNow peut afficher des annonces ou contenus promotionnels fournis par des tiers. Les annonceurs sont seuls responsables de la véracité et de la légalité de leurs messages. Toute transaction effectuée avec un annonceur est indépendante de PlayNow.'
        ]
      },
      {
        heading: 'Modifications de cet Avis',
        paragraphs: [
          'Nous nous réservons le droit de modifier le présent avis à tout moment. Les changements prennent effet dès leur publication sur cette page ; nous vous invitons à la consulter régulièrement.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Pour toute question relative à cet avis ou pour adresser des demandes de retrait/droits d’auteur, écrivez-nous à karkanini9@gmail.com.'
        ]
      }
    ]
  }
};

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

export default async function DisclaimerPage({
  params
}: LocaleParams) {
  const { locale } = await Promise.resolve(params)
  const t = translations[locale] || translations.en

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
        </section>
      ))}
    </main>
  )
}
