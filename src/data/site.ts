export type Category = {
  slug: string
  name: string
  summary: string
  metaTitle: string
  icon: string
}

export type Author = {
  slug: string
  name: string
  role: string
  bio: string
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  updatedAt: string
  readingTime: string
  status: 'DRAFT' | 'RESEARCHING' | 'GENERATING' | 'REVIEWING' | 'APPROVED' | 'PUBLISHED' | 'REJECTED'
  keywords: string[]
  metaTitle: string
  metaDescription: string
  heroImage: string
  sources: string[]
  content: string[]
}

export const categories: Category[] = [
  {
    slug: 'electricidad-hogar',
    name: 'Electricidad del hogar',
    summary: 'Consumo, potencia contratada, factura y hábitos que influyen en el gasto diario.',
    metaTitle: 'Electricidad del hogar en España | Guías, comparativas y ahorro',
    icon: '⚡',
  },
  {
    slug: 'ahorro-energetico',
    name: 'Ahorro energético',
    summary: 'Acciones reales para reducir tu consumo sin sacrificar confort ni calidad de vida.',
    metaTitle: 'Ahorro energético en casa | Estrategias y consejos prácticos',
    icon: '💡',
  },
  {
    slug: 'autoconsumo',
    name: 'Autoconsumo',
    summary: 'Paneles solares, baterías, facturación y diseño de instalaciones domésticas inteligentes.',
    metaTitle: 'Autoconsumo solar doméstico | Guías, costes y rentabilidad',
    icon: '☀️',
  },
  {
    slug: 'climatizacion',
    name: 'Calefacción y climatización',
    summary: 'Aire acondicionado, calefacción, bombas de calor y calor doméstico eficiente.',
    metaTitle: 'Climatización y calefacción eficiente | Guías, comparativas y consejos',
    icon: '🌡️',
  },
  {
    slug: 'discriminacion-horaria',
    name: 'Discriminación horaria',
    summary: 'Tarifas por periodos, estrategias de consumo y ahorro real con precios variables.',
    metaTitle: 'Discriminación horaria de la luz | Cómo ahorrar en tus horas punta',
    icon: '🕒',
  },
]

export const authors: Author[] = [
  {
    slug: 'ana-lopez',
    name: 'Ana López',
    role: 'Redactora técnica',
    bio: 'Especializada en consumo doméstico, herramientas prácticas y comparativas energéticas.',
  },
  {
    slug: 'marcos-fernandez',
    name: 'Marcos Fernández',
    role: 'Editor de energía',
    bio: 'Analiza tarifas, eficiencia y decisiones de compra para hogares españoles.',
  },
  {
    slug: 'sofia-ramirez',
    name: 'Sofía Ramírez',
    role: 'Investigadora SEO',
    bio: 'Combina datos, fuentes oficiales y estructura clara para hacer contenido útil y escalable.',
  },
]

export const articles: Article[] = [
  {
    slug: 'cuanto-consume-un-frigorifico',
    title: 'Cuánto consume un frigorífico y cómo calcularlo en casa',
    excerpt: 'Entiende el consumo real de un frigorífico, la influencia de la clase energética y cómo estimar el coste anual de funcionamiento en España.',
    category: 'electricidad-hogar',
    author: 'ana-lopez',
    publishedAt: '2026-09-20',
    updatedAt: '2026-10-01',
    readingTime: '7 min',
    status: 'PUBLISHED',
    keywords: ['consumo frigorífico', 'cuánta electricidad consume un frigorífico', 'precio kWh', 'factura luz'],
    metaTitle: 'Cuánto consume un frigorífico | Calculadora y datos reales para España',
    metaDescription: 'Descubre cuánto consume un frigorífico, cómo calcular el coste anual y qué factores influyen en tu factura de la luz.',
    heroImage: '/images/frigorifico.svg',
    sources: [
      'Ministerio para la Transición Ecológica y el Reto Demográfico',
      'REMIT',
      'IDAE',
    ],
    content: [
      'El consumo del frigorífico depende de varios factores: tamaño, clase energética, temperatura ambiente, frecuencia de apertura y antigüedad del aparato.',
      'Para estimar el gasto real, lo más útil es partir de la potencia media que marca la etiqueta de eficiencia y convertirlo a consumo diario usando horas de funcionamiento.',
      'Un frigorífico moderno de 200 a 300 litros suele oscilar entre 0,8 y 1,4 kWh al día, aunque la variación puede ser mayor según el modelo y la carga.',
      'La fórmula más útil para un usuario doméstico es: consumo diario = potencia nominal x horas de uso / 1000, y luego se multiplica por el precio del kWh para obtener coste estimado.',
      'Si mantienes la temperatura interna estable, evita poner el frigorífico en un lugar muy caliente y revisas el estado de los sellos, puedes reducir el consumo de forma efectiva sin perder comodidad.',
    ],
  },
  {
    slug: 'cuanto-consume-un-aire-acondicionado',
    title: 'Cuánto consume un aire acondicionado y cómo reducir su coste',
    excerpt: 'Analizamos el consumo de un aire acondicionado según potencia, horas de uso y tarifa eléctrica, con ejemplos útiles para el hogar español.',
    category: 'climatizacion',
    author: 'marcos-fernandez',
    publishedAt: '2026-08-18',
    updatedAt: '2026-09-25',
    readingTime: '9 min',
    status: 'PUBLISHED',
    keywords: ['aire acondicionado consumo', 'cuánto cuesta usar aire acondicionado', 'tarifa eléctrica', 'potencia aire acondicionado'],
    metaTitle: 'Cuánto consume un aire acondicionado | Coste, potencia y ahorro',
    metaDescription: 'Calcula el consumo y el coste del aire acondicionado en tu vivienda con ejemplos prácticos adaptados a la tarifa eléctrica española.',
    heroImage: '/images/aire-acondicionado.svg',
    sources: [
      'Comisión Nacional de los Mercados y la Competencia',
      'IDAE',
      'Eurostat',
    ],
    content: [
      'Las unidades de aire acondicionado pueden tener un consumo muy variable según su potencia frigorífica nominal, la regulación del termostato y la temperatura exterior.',
      'En un régimen de uso doméstico, un equipo de 2 a 2,5 kW puede consumir de media entre 0,8 y 1,6 kWh por hora cuando está funcionando de forma continua.',
      'La práctica más útil es calcular el coste por hora y proyectarlo a la temporada: se multiplica el consumo por el precio del kWh y por las horas de uso estimadas.',
      'Programar temperatura, mantener filtros limpios y usar zonas bien aisladas reduce el consumo sin comprometer la comodidad.',
      'La diferencia entre mantener 22ºC y 19ºC puede ser notable en verano, especialmente si la vivienda tiene exposición solar directa o poca aislamiento.',
    ],
  },
  {
    slug: 'tarifas-electricas-2026-espana',
    title: 'Tarifas eléctricas en España 2026: cómo elegir la mejor opción',
    excerpt: 'Comparte un análisis práctico de la tarifa por horas, la fija y la discriminación horaria para decidir con datos más que por intuición.',
    category: 'discriminacion-horaria',
    author: 'sofia-ramirez',
    publishedAt: '2026-10-02',
    updatedAt: '2026-10-02',
    readingTime: '8 min',
    status: 'APPROVED',
    keywords: ['tarifas eléctricas España', 'discriminación horaria', 'PVPC', 'precio de la luz en España'],
    metaTitle: 'Tarifas eléctricas en España 2026 | Guía para elegir la mejor opción',
    metaDescription: 'Descubre cuánta diferencia hay entre la tarifa fija, la variable y la discriminación horaria para reducir costes en el hogar.',
    heroImage: '/images/tarifas-electricas.svg',
    sources: [
      'OMIE',
      'CNMC',
      'Ministerio de Energía',
    ],
    content: [
      'La elección de tarifa no es solo una cuestión de precio base. Hay que mirar la carga del hogar, la posibilidad de desplazar consumo y la tendencia de la energía durante el día.',
      'La tarifa con discriminación horaria puede ser muy interesante para quienes pueden mover lavadoras, secadoras o carga de baterías a periodos baratos.',
      'La tarifa fija suele aportar previsibilidad, pero a veces convence menos si el perfil de consumo es muy flexible y la variabilidad del mercado es alta.',
      'La clave es contrastar el consumo horario con la curva de precios y no elegir según el precio medio solo.',
    ],
  },
  {
    slug: 'cuanto-ahorra-poner-paneles-solares',
    title: 'Cuánto ahorra poner placas solares en una vivienda estándar',
    excerpt: 'Un análisis con cifras orientativas para evaluar si la instalación fotovoltaica tiene sentido en una casa con consumo medio.',
    category: 'autoconsumo',
    author: 'ana-lopez',
    publishedAt: '2026-07-14',
    updatedAt: '2026-08-12',
    readingTime: '10 min',
    status: 'PUBLISHED',
    keywords: ['placas solares ahorro', 'autoconsumo doméstico', 'rentabilidad placas solares'],
    metaTitle: 'Cuánto ahorra poner placas solares | Rentabilidad y cálculo práctico',
    metaDescription: 'Evalúa si instalar placas solares en tu hogar ofrece ahorro real, teniendo en cuenta tarifa, consumo y producción estimada.',
    heroImage: '/images/placas-solares.svg',
    sources: [
      'IDAE',
      'Red Eléctrica Española',
      'Comisión Europea',
    ],
    content: [
      'Las placas solares suelen tener atractivo cuando el consumo eléctrico diario coincide con la producción solar durante la mañana y mediodía.',
      'Un hogar con consumo medio anual de 4.000 a 5.000 kWh puede amortizar una instalación con un dimensionamiento prudente si la factura de la luz es alta y la orientación del tejado es favorable.',
      'El verdadero valor no está solo en la energía producida, sino en cómo se consume y si hay posibilidad de autoconsumo o almacenamiento.',
      'En muchas viviendas, combinar paneles con una batería puede mejorar la autogestión del excedente, pero su rentabilidad depende del perfil de consumo y del coste de la instalación.',
    ],
  },
]

export const tools = [
  {
    name: 'Calculadora de consumo eléctrico',
    summary: 'Calcula el consumo diario, mensual y anual de un electrodoméstico con potencia, horas y precio del kWh.',
    href: '/tools',
  },
  {
    name: 'Comparador de tarifas',
    summary: 'Evalúa si una tarifa fija, variable o con discriminación horaria es más recomendable para tu hogar.',
    href: '/tools',
  },
  {
    name: 'Checklist de eficiencia',
    summary: 'Revisa puntos clave para reducir consumo y mejorar el confort sin grandes inversiones.',
    href: '/tools',
  },
]

export const site = {
  name: 'Energía Hogar España',
  slogan: 'Guías, comparativas y calculadoras para ahorrar energía y mejorar tu factura',
  domain: 'https://www.energiahogarespana.com',
  description:
    'Publicación especializada en electricidad doméstica, ahorro energético, autoconsumo, climatización y tarifas para hogares en España.',
}
