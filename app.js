/**
 * PROF. DANIEL ABRANCHES - APLICAÇÃO CLIENTE (V2)
 * PSOL // PRESIDENTE DO PSOL JANDIRA
 * Interatividade, Internacionalização (PT/EN/ES), Modais de Metas, Acessibilidade & Formulário Seguro
 * Desenvolvido por BaseByte - Marketing e Tecnologia
 */

let currentLang = 'pt';
let activeModalKey = null;

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccessibility();
  initLanguageSwitcher();
  initCopyLinks();
  initProposalModal();
  initVolunteerForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. TRADUÇÕES COMPLETAS (PT / EN / ES)
   ========================================================================== */
const I18N = {
  pt: {
    htmlLang: 'pt-BR',
    pageTitle: 'Prof. Daniel Abranches | PSOL | Presidente do PSOL Jandira',
    'brand.sub': 'Presidente do PSOL Jandira',
    'nav.home': 'Início',
    'nav.social': 'Redes Oficiais',
    'nav.about': 'Quem Sou',
    'nav.goals': 'Metas',
    'nav.contact': 'Contato',
    'a11y.inc': 'Aumentar Fonte',
    'a11y.dec': 'Diminuir Fonte',
    'social.wa.title': 'Canal Exército do Professor! no WhatsApp',
    'social.ig.title': 'Instagram @prof.daniel_abranches',
    'social.fb.title': 'Página Oficial no Facebook',
    'hero.joinPsol': 'FILIE-SE AO PSOL',
    'hero.headline': 'Jandira merece educação pública forte, <span class="headline-muted">transporte digno e respeito a quem trabalha.</span>',
    'hero.lead': '<strong>Prof. Daniel Abranches:</strong> educador da rede pública estadual e Presidente do PSOL Jandira. Atuação contínua e organizada pelo desenvolvimento de Jandira e pelo fortalecimento da Região Oeste de SP.',
    'hero.ctaGoals': 'Conhecer Nossas Metas',
    'hero.ctaContact': 'Fale Conosco',
    'hero.splitLabel': 'PROF. DANIEL ABRANCHES',
    'hero.splitTitle': 'Jandira merece mais!',
    'hero.splitText': 'Trabalho permanente em defesa da escola pública, da Tarifa Zero municipal e dos direitos de quem vive em Jandira e na Região Oeste de SP.',
    'social.copyTitle': 'Copiar link para compartilhar',
    'social.eyebrow': 'Redes Oficiais',
    'social.heading': 'Acompanhe nosso trabalho <span class="heading-muted">em tempo real</span>',
    'social.subtext': 'Conecte-se pelos canais oficiais do Prof. Daniel Abranches para receber ações, fiscalizações, novidades e mobilizações por Jandira e pela Região Oeste de SP.',
    'social.wa.kicker': 'Canal Oficial no WhatsApp',
    'social.wa.desc': 'Receba em primeira mão as ações, fiscalizações, novidades e mobilizações do Prof. Daniel Abranches pelo desenvolvimento de Jandira e da Região Oeste de SP.',
    'social.wa.cta': 'Seguir no WhatsApp',
    'social.ig.kicker': 'Perfil Oficial no Instagram',
    'social.ig.desc': 'Acompanhe o dia a dia das ações, bastidores, debates e mobilizações pelo desenvolvimento de Jandira e da Região Oeste de SP.',
    'social.ig.cta': 'Seguir no Instagram',
    'social.fb.kicker': 'Página Oficial no Facebook',
    'social.fb.desc': 'Curta e acompanhe publicações, comunicados, agenda e o trabalho diário por Jandira e pela Região Oeste de SP.',
    'social.fb.cta': 'Seguir no Facebook',
    'territory.label': 'Foco de atuação e trabalho:',
    'territory.chip1': 'Desenvolvimento de Jandira',
    'territory.chip2': 'Fortalecer Jandira e a Região Oeste de SP',
    'about.eyebrow': 'Biografia & Trajetória',
    'about.heading': 'Quem é o Prof. Daniel <span class="heading-muted-dark">Abranches?</span>',
    'about.p1': '<strong>Daniel Abranches dos Reis Barros (Prof. Daniel)</strong> é um jovem educador formado na realidade da escola pública e da periferia paulista. Conhece na prática o cotidiano, as dores e a força da juventude trabalhadora de Jandira e da Região Oeste de SP.',
    'about.p2': 'Como <strong>professor dos Ensinos Fundamental e Médio na rede pública estadual</strong>, vive o chão da sala de aula todos os dias. Enfrenta a falta de estrutura e combate a plataformização do ensino, defendendo a valorização do magistério e a educação humanizada.',
    'about.pillarsHeading': 'Trajetória construída <span class="heading-muted-dark">na sala de aula e nas ruas</span>',
    'about.card1.title': 'Educador na Rede Pública Estadual',
    'about.card1.desc': 'Atuação direta na formação de jovens e no combate ao sucateamento e à plataformização do ensino nas escolas públicas.',
    'about.card2.title': 'Presidente do PSOL Jandira',
    'about.card2.desc': 'Organização popular de base, formação política cidadã e defesa firme dos direitos da classe trabalhadora em Jandira e na Região Oeste de SP.',
    'about.card3.title': 'Voz Firme por Transporte Digno e Direitos',
    'about.card3.desc': 'Mobilização permanente pela Tarifa Zero no transporte municipal de Jandira, redução tarifária metropolitana, fim da concessão da ViaMobilidade e fiscalização do fim da escala 6x1.',
    'about.cta': 'Ver Metas de Trabalho',
    'goals.eyebrow': 'Metas de Trabalho • Jandira',
    'goals.heading': 'Metas para o desenvolvimento <span class="heading-muted">de Jandira e Região Oeste</span>',
    'goals.subtext': 'Nosso trabalho continua firme todos os dias. Confira as metas prioritárias para impulsionar o desenvolvimento de Jandira e fortalecer toda a Região Oeste de SP.',
    'goals.btnFull': 'Ver Detalhes da Meta',
    'goals.btnShort': 'Ver Detalhes',
    'goals.m1.pill': 'Meta 01',
    'goals.m1.cat': 'Educação',
    'goals.m1.title': 'Educação Pública de Qualidade em Jandira',
    'goals.m1.quote': '“Quem cuida do futuro precisa de respeito no presente.”',
    'goals.m1.body': 'Trabalho contínuo em defesa da escola pública, contra a privatização e a plataformização compulsória do ensino, priorizando o ensino humanizado e a valorização dos educadores de Jandira.',
    'goals.m1.p1': 'Pressão e acompanhamento pela implementação da <strong>Lei Federal 15.326/2026</strong> em Jandira para equiparação salarial da educação infantil.',
    'goals.m1.p2': 'Inclusão escolar plena com cuidadores e suporte multidisciplinar completo para estudantes PcD.',
    'goals.m1.p3': 'Defesa da saúde mental e valorização docente contra o adoecimento e a sobrecarga da categoria.',
    'goals.m2.pill': 'Meta 02',
    'goals.m2.cat': 'Mobilidade & Trabalho',
    'goals.m2.title': 'Transporte Digno & Fiscalização do Fim da Escala 6x1',
    'goals.m2.quote': '“Transporte público de qualidade e tempo livre são direitos básicos.”',
    'goals.m2.body': 'Com o fim da escala 6x1 agora aprovado em lei, atuamos na <strong>fiscalização e fortalecimento para cumprir integralmente o fim da escala 6x1</strong>, somados à luta pela <strong>Tarifa Zero no transporte municipal de Jandira</strong>.',
    'goals.m2.p1': '<strong>Fiscalização e fortalecimento do fim da escala 6x1:</strong> acompanhamento ativo para garantir o cumprimento da lei e proteger quem trabalha em Jandira e na Região Oeste de SP.',
    'goals.m2.p2': '<strong>Tarifa Zero no transporte municipal de Jandira</strong>, renovação da frota de ônibus e reforma estrutural do terminal rodoviário.',
    'goals.m2.p3': '<strong>Fim da concessão da ViaMobilidade</strong> (Linhas 8-Diamante e 9-Esmeralda) e redução progressiva das tarifas metropolitanas.',
    'goals.m3.pill': 'Meta 03',
    'goals.m3.cat': 'Sustentabilidade',
    'goals.m3.title': 'Meio Ambiente & Clima',
    'goals.m3.quote': '“O futuro sustentável de Jandira e da Região Oeste começa agora.”',
    'goals.m3.body': 'Atuação por justiça climática em Jandira para proteger as famílias contra enchentes recorrentes, áreas de risco e ilhas de calor.',
    'goals.m3.p1': 'Combate a enchentes e desassoreamento contínuo de rios e córregos de Jandira.',
    'goals.m3.p2': 'Regularização fundiária socioambiental e apoio a cooperativas de reciclagem.',
    'goals.m4.pill': 'Meta 04',
    'goals.m4.cat': 'Juventude',
    'goals.m4.title': 'Juventude no Poder',
    'goals.m4.quote': '“A juventude de Jandira quer decidir o agora.”',
    'goals.m4.body': 'Construção de oportunidades reais de primeiro emprego digno, acesso à universidade pública e fomento à cultura e ao esporte nos bairros.',
    'goals.m4.p1': 'Primeiro emprego com direitos e programas de qualificação profissional.',
    'goals.m4.p2': 'Ampliação de cursinhos populares pré-vestibulares em Jandira.',
    'goals.m5.pill': 'Meta 05',
    'goals.m5.cat': 'Direitos',
    'goals.m5.title': 'Cidadania & Igualdade',
    'goals.m5.quote': '“Políticas públicas para quem mais precisa.”',
    'goals.m5.body': 'Enfrentamento à violência contra a mulher (DDMs 24h), defesa intransigente dos direitos humanos, equidade racial e segurança alimentar em Jandira.',
    'goals.m5.p1': 'Fortalecimento da rede de proteção e atendimento 24h às mulheres.',
    'goals.m5.p2': 'Políticas de equidade racial, acolhimento e combate à fome.',
    'contact.eyebrow': 'Participação & Contato',
    'contact.heading': 'Construa uma Jandira melhor <span class="heading-muted">com a gente</span>',
    'contact.subtext': 'Cadastre-se para acompanhar nosso trabalho, enviar demandas do seu bairro e fortalecer Jandira e a Região Oeste de SP ao lado do Prof. Daniel Abranches.',
    'contact.badge': 'Cadastro Oficial',
    'contact.cardTitle': 'Preencha seus dados',
    'contact.cardSub': 'Fique conectado com as ações e iniciativas do Prof. Daniel Abranches.',
    'form.nameLabel': 'Nome Completo *',
    'form.namePh': 'Ex: Maria Silva',
    'form.phoneLabel': 'WhatsApp com DDD *',
    'form.emailLabel': 'E-mail *',
    'form.emailPh': 'Ex: maria@email.com',
    'form.cityLabel': 'Bairro / Cidade *',
    'form.cityPh': 'Ex: Centro, Jandira - SP',
    'form.auth': 'Autorizo o recebimento de comunicações por meio dos canais oficiais e de parceiros',
    'form.submit': 'Enviar Cadastro pelo WhatsApp',
    'form.directWa': 'Dúvidas ou demandas? Fale direto no WhatsApp: (11) 91273-0806',
    'form.privacy': 'Dados utilizados para comunicação por meio dos canais oficiais e de parceiros.',
    'footer.role': 'PSOL • Presidente do PSOL Jandira',
    'footer.desc': 'Educador da rede pública estadual, filiado ao PSOL e Presidente do PSOL Jandira. Trabalho contínuo pelo desenvolvimento de Jandira e fortalecimento da Região Oeste de SP, pela educação pública de qualidade, Tarifa Zero municipal e fiscalização do fim da escala 6x1.',
    'footer.navHeading': 'Navegação',
    'footer.navHome': 'Início da Página',
    'footer.navGoals': 'Metas por Jandira',
    'footer.navAi': 'Dados para IA',
    'footer.channelsHeading': 'Canais Oficiais',
    'footer.waChannel': 'Canal WhatsApp:',
    'footer.copyright': '© 2026 Prof. Daniel Abranches — PSOL Jandira. Todos os direitos reservados.',
    'footer.developedBy': 'Desenvolvido por',
    'modal.actionsLabel': 'Ações e compromissos por Jandira',
    'modal.waBtn': 'Entrar no Canal WhatsApp',
    'modal.suggestBtn': 'Enviar Sugestão',
    'floating.waTitle': 'Falar no WhatsApp',
    toastMissing: 'Preencha seu nome, WhatsApp e e-mail.',
    toastRedirect: 'Redirecionando para o WhatsApp...',
    toastCopied: 'Link copiado para compartilhar!',
    toastLang: 'Idioma alterado para Português',
    floatingWaText: 'Olá Prof. Daniel Abranches! Acessei o site e gostaria de conversar sobre Jandira.',
    formWaIntro: 'Olá Prof. Daniel Abranches e equipe!\n\nGostaria de acompanhar e somar no trabalho pelo desenvolvimento de Jandira e da Região Oeste de SP.',
    formWaAuth: '\n*Comunicação:* Autorizo o recebimento de comunicações por meio dos canais oficiais e de parceiros.',
    formWaFooter: '_Mensagem enviada pelo site oficial danielabranches.com.br_',
    formWaFields: { name: 'Nome', phone: 'WhatsApp', email: 'E-mail', city: 'Bairro/Cidade' }
  },

  en: {
    htmlLang: 'en',
    pageTitle: 'Prof. Daniel Abranches | PSOL | President of PSOL Jandira',
    'brand.sub': 'President of PSOL Jandira',
    'nav.home': 'Home',
    'nav.social': 'Official Channels',
    'nav.about': 'About',
    'nav.goals': 'Goals',
    'nav.contact': 'Contact',
    'a11y.inc': 'Increase Font Size',
    'a11y.dec': 'Decrease Font Size',
    'social.wa.title': 'Exército do Professor! WhatsApp Channel',
    'social.ig.title': 'Instagram @prof.daniel_abranches',
    'social.fb.title': 'Official Facebook Page',
    'hero.joinPsol': 'JOIN PSOL',
    'hero.headline': 'Jandira deserves strong public education, <span class="headline-muted">dignified transit, and respect for working people.</span>',
    'hero.lead': '<strong>Prof. Daniel Abranches</strong> — state public school teacher and President of PSOL Jandira. Continuous, grassroots work for the development of Jandira and the strengthening of Greater São Paulo’s West Region.',
    'hero.ctaGoals': 'Explore Our Goals',
    'hero.ctaContact': 'Get in Touch',
    'hero.splitLabel': 'PROF. DANIEL ABRANCHES',
    'hero.splitTitle': 'Jandira deserves more!',
    'hero.splitText': 'Ongoing advocacy for public schools, municipal Fare-Free Transit, and the rights of residents in Jandira and the West Region of SP.',
    'social.copyTitle': 'Copy link to share',
    'social.eyebrow': 'Official Channels',
    'social.heading': 'Follow our work <span class="heading-muted">in real time</span>',
    'social.subtext': 'Connect through Prof. Daniel Abranches’ official channels for updates, oversight actions, news, and community mobilization across Jandira and the West Region of SP.',
    'social.wa.kicker': 'Official WhatsApp Channel',
    'social.wa.desc': 'Receive firsthand updates on initiatives, public oversight, news, and mobilization by Prof. Daniel Abranches for Jandira and the West Region of SP.',
    'social.wa.cta': 'Follow on WhatsApp',
    'social.ig.kicker': 'Official Instagram Profile',
    'social.ig.desc': 'Follow daily actions, behind-the-scenes work, public debates, and community mobilization for Jandira and the West Region of SP.',
    'social.ig.cta': 'Follow on Instagram',
    'social.fb.kicker': 'Official Facebook Page',
    'social.fb.desc': 'Like and follow posts, official statements, schedules, and ongoing efforts for Jandira and the West Region of SP.',
    'social.fb.cta': 'Follow on Facebook',
    'territory.label': 'Focus area and commitment:',
    'territory.chip1': 'Development of Jandira',
    'territory.chip2': 'Strengthening Jandira & West Region of SP',
    'about.eyebrow': 'Biography & Background',
    'about.heading': 'Who is Prof. Daniel <span class="heading-muted-dark">Abranches?</span>',
    'about.p1': '<strong>Daniel Abranches dos Reis Barros (Prof. Daniel)</strong> is a young educator shaped by the reality of public schools and São Paulo’s working-class neighborhoods. He knows firsthand the daily life, struggles, and resilience of working youth in Jandira and the West Region of SP.',
    'about.p2': 'As a <strong>middle and high school teacher in the state public school system</strong>, he lives the reality of the classroom every day—confronting underfunding and opposing the forced platformization of education while standing up for teachers and humanized learning.',
    'about.pillarsHeading': 'A path built <span class="heading-muted-dark">in the classroom and on the streets</span>',
    'about.card1.title': 'State Public School Educator',
    'about.card1.desc': 'Direct commitment to student development and fighting the dismantling and excessive platformization of public schools.',
    'about.card2.title': 'President of PSOL Jandira',
    'about.card2.desc': 'Grassroots organizing, civic political education, and steadfast defense of working-class rights in Jandira and the West Region of SP.',
    'about.card3.title': 'Strong Voice for Dignified Transit & Rights',
    'about.card3.desc': 'Continuous mobilization for municipal Fare-Free Transit in Jandira, metropolitan fare reductions, ending the ViaMobilidade concession, and enforcing the end of the 6x1 work schedule.',
    'about.cta': 'See Work Goals',
    'goals.eyebrow': 'Work Goals • Jandira',
    'goals.heading': 'Goals for the development <span class="heading-muted">of Jandira & West Region</span>',
    'goals.subtext': 'Our work continues every single day. Explore our priority goals to drive Jandira’s development and strengthen the entire West Region of São Paulo.',
    'goals.btnFull': 'View Goal Details',
    'goals.btnShort': 'View Details',
    'goals.m1.pill': 'Goal 01',
    'goals.m1.cat': 'Education',
    'goals.m1.title': 'Quality Public Education in Jandira',
    'goals.m1.quote': '“Those who care for the future deserve respect in the present.”',
    'goals.m1.body': 'Ongoing work defending public schools against privatization and forced digital platformization, prioritizing humanized teaching and fair recognition for Jandira’s educators.',
    'goals.m1.p1': 'Advocacy and monitoring for implementing <strong>Federal Law 15.326/2026</strong> in Jandira to ensure wage parity for early childhood educators.',
    'goals.m1.p2': 'Full school inclusion with dedicated caregivers and multidisciplinary support for students with disabilities.',
    'goals.m1.p3': 'Mental health support and teacher valuation policies to combat burnout and work overload.',
    'goals.m2.pill': 'Goal 02',
    'goals.m2.cat': 'Mobility & Labor',
    'goals.m2.title': 'Dignified Transit & Enforcing the End of the 6x1 Schedule',
    'goals.m2.quote': '“Quality public transit and free time are fundamental rights.”',
    'goals.m2.body': 'With the end of the 6x1 work schedule now approved into law, we focus on <strong>oversight and strengthening enforcement so it is fully respected</strong>, alongside our fight for <strong>municipal Fare-Free Transit in Jandira</strong>.',
    'goals.m2.p1': '<strong>Oversight and enforcement of the end of the 6x1 schedule:</strong> active monitoring to ensure compliance with the law and protect workers across Jandira and the West Region of SP.',
    'goals.m2.p2': '<strong>Municipal Fare-Free Transit in Jandira</strong>, bus fleet renewal, and structural renovation of the city bus terminal.',
    'goals.m2.p3': '<strong>Ending the ViaMobilidade concession</strong> (Lines 8-Diamond & 9-Emerald) and progressive reduction of metropolitan fares.',
    'goals.m3.pill': 'Goal 03',
    'goals.m3.cat': 'Sustainability',
    'goals.m3.title': 'Environment & Climate',
    'goals.m3.quote': '“The sustainable future of Jandira and the West Region starts now.”',
    'goals.m3.body': 'Advocating for climate justice in Jandira to protect families from recurring floods, high-risk housing areas, and urban heat islands.',
    'goals.m3.p1': 'Flood prevention and continuous dredging of rivers and streams across Jandira.',
    'goals.m3.p2': 'Socio-environmental land regularization and support for recycling cooperatives.',
    'goals.m4.pill': 'Goal 04',
    'goals.m4.cat': 'Youth',
    'goals.m4.title': 'Youth in Power',
    'goals.m4.quote': '“Jandira’s youth wants to shape the present.”',
    'goals.m4.body': 'Building real pathways to dignified first jobs, public university access, and vibrant local culture and sports across neighborhoods.',
    'goals.m4.p1': 'Dignified first-job initiatives with labor rights and vocational training.',
    'goals.m4.p2': 'Expansion of free community university-prep courses in Jandira.',
    'goals.m5.pill': 'Goal 05',
    'goals.m5.cat': 'Rights',
    'goals.m5.title': 'Citizenship & Equality',
    'goals.m5.quote': '“Public policies for those who need them most.”',
    'goals.m5.body': 'Combating violence against women (24/7 Women’s Police Stations), defending human rights, racial equity, and food security in Jandira.',
    'goals.m5.p1': 'Strengthening protection networks and 24/7 support services for women.',
    'goals.m5.p2': 'Racial equity policies, community care, and hunger relief programs.',
    'contact.eyebrow': 'Participation & Contact',
    'contact.heading': 'Build a better Jandira <span class="heading-muted">with us</span>',
    'contact.subtext': 'Sign up to follow our work, share your neighborhood’s priorities, and help strengthen Jandira and the West Region of SP alongside Prof. Daniel Abranches.',
    'contact.badge': 'Official Sign-Up',
    'contact.cardTitle': 'Fill in your details',
    'contact.cardSub': 'Stay connected with Prof. Daniel Abranches’ actions and initiatives.',
    'form.nameLabel': 'Full Name *',
    'form.namePh': 'e.g., Maria Silva',
    'form.phoneLabel': 'WhatsApp with Area Code *',
    'form.emailLabel': 'Email *',
    'form.emailPh': 'e.g., maria@email.com',
    'form.cityLabel': 'Neighborhood / City *',
    'form.cityPh': 'e.g., Centro, Jandira - SP',
    'form.auth': 'I authorize receiving communications through official and partner channels',
    'form.submit': 'Send Registration via WhatsApp',
    'form.directWa': 'Questions or suggestions? Message us directly on WhatsApp: (11) 91273-0806',
    'form.privacy': 'Data used for communication through official and partner channels.',
    'footer.role': 'PSOL • President of PSOL Jandira',
    'footer.desc': 'State public school educator, PSOL member, and President of PSOL Jandira. Continuous work for Jandira’s development and strengthening the West Region of SP—fighting for quality public education, municipal Fare-Free Transit, and enforcement of the end of the 6x1 schedule.',
    'footer.navHeading': 'Navigation',
    'footer.navHome': 'Back to Top',
    'footer.navGoals': 'Goals for Jandira',
    'footer.navAi': 'AI Info',
    'footer.channelsHeading': 'Official Channels',
    'footer.waChannel': 'WhatsApp Channel:',
    'footer.copyright': '© 2026 Prof. Daniel Abranches — PSOL Jandira. All rights reserved.',
    'footer.developedBy': 'Developed by',
    'modal.actionsLabel': 'Actions and commitments for Jandira',
    'modal.waBtn': 'Join WhatsApp Channel',
    'modal.suggestBtn': 'Send a Suggestion',
    'floating.waTitle': 'Chat on WhatsApp',
    toastMissing: 'Please enter your name, WhatsApp number, and email.',
    toastRedirect: 'Redirecting to WhatsApp...',
    toastCopied: 'Link copied to share!',
    toastLang: 'Language switched to English',
    floatingWaText: 'Hello Prof. Daniel Abranches! I visited the website and would like to talk about Jandira.',
    formWaIntro: 'Hello Prof. Daniel Abranches and team!\n\nI would like to follow and support the work for the development of Jandira and the West Region of SP.',
    formWaAuth: '\n*Communication:* I authorize receiving communications through official and partner channels.',
    formWaFooter: '_Message sent via official website danielabranches.com.br_',
    formWaFields: { name: 'Name', phone: 'WhatsApp', email: 'Email', city: 'Neighborhood/City' }
  },

  es: {
    htmlLang: 'es',
    pageTitle: 'Prof. Daniel Abranches | PSOL | Presidente del PSOL Jandira',
    'brand.sub': 'Presidente del PSOL Jandira',
    'nav.home': 'Inicio',
    'nav.social': 'Redes Oficiales',
    'nav.about': 'Quién Soy',
    'nav.goals': 'Metas',
    'nav.contact': 'Contacto',
    'a11y.inc': 'Aumentar Fuente',
    'a11y.dec': 'Disminuir Fuente',
    'social.wa.title': 'Canal Exército do Professor! en WhatsApp',
    'social.ig.title': 'Instagram @prof.daniel_abranches',
    'social.fb.title': 'Página Oficial en Facebook',
    'hero.joinPsol': 'AFÍLIATE AL PSOL',
    'hero.headline': 'Jandira merece educación pública fuerte, <span class="headline-muted">transporte digno y respeto a quienes trabajan.</span>',
    'hero.lead': '<strong>Prof. Daniel Abranches</strong> — docente de la red pública estatal y Presidente del PSOL Jandira. Trabajo continuo y organizado por el desarrollo de Jandira y el fortalecimiento de la Región Oeste de SP.',
    'hero.ctaGoals': 'Conocer Nuestras Metas',
    'hero.ctaContact': 'Contáctanos',
    'hero.splitLabel': 'PROF. DANIEL ABRANCHES',
    'hero.splitTitle': '¡Jandira merece más!',
    'hero.splitText': 'Trabajo permanente en defensa de la escuela pública, la Tarifa Cero municipal y los derechos de quienes viven en Jandira y la Región Oeste de SP.',
    'social.copyTitle': 'Copiar enlace para compartir',
    'social.eyebrow': 'Redes Oficiales',
    'social.heading': 'Sigue nuestro trabajo <span class="heading-muted">en tiempo real</span>',
    'social.subtext': 'Conéctate a través de los canales oficiales del Prof. Daniel Abranches para recibir acciones, fiscalizaciones, novedades y movilizaciones por Jandira y la Región Oeste de SP.',
    'social.wa.kicker': 'Canal Oficial en WhatsApp',
    'social.wa.desc': 'Recibe de primera mano las acciones, fiscalizaciones, novedades y movilizaciones del Prof. Daniel Abranches por el desarrollo de Jandira y la Región Oeste de SP.',
    'social.wa.cta': 'Seguir en WhatsApp',
    'social.ig.kicker': 'Perfil Oficial en Instagram',
    'social.ig.desc': 'Acompaña el día a día de las acciones, entretelones, debates y movilizaciones por el desarrollo de Jandira y la Región Oeste de SP.',
    'social.ig.cta': 'Seguir en Instagram',
    'social.fb.kicker': 'Página Oficial en Facebook',
    'social.fb.desc': 'Sigue y acompaña publicaciones, comunicados, agenda y el trabajo diario por Jandira y la Región Oeste de SP.',
    'social.fb.cta': 'Seguir en Facebook',
    'territory.label': 'Enfoque de actuación y trabajo:',
    'territory.chip1': 'Desarrollo de Jandira',
    'territory.chip2': 'Fortalecer Jandira y la Región Oeste de SP',
    'about.eyebrow': 'Biografía y Trayectoria',
    'about.heading': '¿Quién es el Prof. Daniel <span class="heading-muted-dark">Abranches?</span>',
    'about.p1': '<strong>Daniel Abranches dos Reis Barros (Prof. Daniel)</strong> es un joven educador formado en la realidad de la escuela pública y de la periferia paulista. Conoce en la práctica lo cotidiano, los desafíos y la fuerza de la juventud trabajadora de Jandira y la Región Oeste de SP.',
    'about.p2': 'Como <strong>profesor de Educación Primaria y Secundaria en la red pública estatal</strong>, vive la sala de clases todos los días. Enfrenta la falta de infraestructura y combate la plataformización de la enseñanza, defendiendo la valorización docente y la educación humanizada.',
    'about.pillarsHeading': 'Trayectoria construida <span class="heading-muted-dark">en el aula y en las calles</span>',
    'about.card1.title': 'Educador en la Red Pública Estatal',
    'about.card1.desc': 'Actuación directa en la formación de jóvenes y en el combate al desmantelamiento y la plataformización de la enseñanza en las escuelas públicas.',
    'about.card2.title': 'Presidente del PSOL Jandira',
    'about.card2.desc': 'Organización popular de base, formación política ciudadana y defensa firme de los derechos de la clase trabajadora en Jandira y la Región Oeste de SP.',
    'about.card3.title': 'Voz Firme por Transporte Digno y Derechos',
    'about.card3.desc': 'Movilización permanente por la Tarifa Cero en el transporte municipal de Jandira, reducción tarifaria metropolitana, fin de la concesión de ViaMobilidade y fiscalización del fin de la jornada 6x1.',
    'about.cta': 'Ver Metas de Trabajo',
    'goals.eyebrow': 'Metas de Trabajo • Jandira',
    'goals.heading': 'Metas para el desarrollo <span class="heading-muted">de Jandira y Región Oeste</span>',
    'goals.subtext': 'Nuestro trabajo continúa firme todos los días. Conoce las metas prioritarias para impulsar el desarrollo de Jandira y fortalecer toda la Región Oeste de SP.',
    'goals.btnFull': 'Ver Detalles de la Meta',
    'goals.btnShort': 'Ver Detalles',
    'goals.m1.pill': 'Meta 01',
    'goals.m1.cat': 'Educación',
    'goals.m1.title': 'Educación Pública de Calidad en Jandira',
    'goals.m1.quote': '“Quien cuida el futuro merece respeto en el presente.”',
    'goals.m1.body': 'Trabajo continuo en defensa de la escuela pública, contra la privatización y la plataformización obligatoria, priorizando la enseñanza humanizada y la valorización docente en Jandira.',
    'goals.m1.p1': 'Presión y seguimiento para la implementación de la <strong>Ley Federal 15.326/2026</strong> en Jandira para la equiparación salarial de la educación infantil.',
    'goals.m1.p2': 'Inclusión escolar plena con cuidadores y apoyo multidisciplinario completo para estudiantes con discapacidad.',
    'goals.m1.p3': 'Defensa de la salud mental y valorización docente contra el agotamiento y la sobrecarga laboral.',
    'goals.m2.pill': 'Meta 02',
    'goals.m2.cat': 'Movilidad y Trabajo',
    'goals.m2.title': 'Transporte Digno y Fiscalización del Fin de la Jornada 6x1',
    'goals.m2.quote': '“El transporte público de calidad y el tiempo libre son derechos básicos.”',
    'goals.m2.body': 'Con el fin de la jornada 6x1 ya aprobado por ley, trabajamos en la <strong>fiscalización y fortalecimiento para garantizar su cumplimiento integral</strong>, junto a la lucha por la <strong>Tarifa Cero en el transporte municipal de Jandira</strong>.',
    'goals.m2.p1': '<strong>Fiscalización y fortalecimiento del fin de la jornada 6x1:</strong> seguimiento activo para asegurar el cumplimiento de la ley y proteger a quienes trabajan en Jandira y la Región Oeste de SP.',
    'goals.m2.p2': '<strong>Tarifa Cero en el transporte municipal de Jandira</strong>, renovación de la flota de autobuses y reforma estructural de la terminal.',
    'goals.m2.p3': '<strong>Fin de la concesión de ViaMobilidade</strong> (Líneas 8-Diamante y 9-Esmeralda) y reducción progresiva de las tarifas metropolitanas.',
    'goals.m3.pill': 'Meta 03',
    'goals.m3.cat': 'Sostenibilidad',
    'goals.m3.title': 'Medio Ambiente y Clima',
    'goals.m3.quote': '“El futuro sostenible de Jandira y la Región Oeste comienza ahora.”',
    'goals.m3.body': 'Actuación por la justicia climática en Jandira para proteger a las familias contra inundaciones recurrentes, zonas de riesgo e islas de calor.',
    'goals.m3.p1': 'Prevención de inundaciones y desazolve continuo de ríos y arroyos en Jandira.',
    'goals.m3.p2': 'Regularización territorial socioambiental y apoyo a cooperativas de reciclaje.',
    'goals.m4.pill': 'Meta 04',
    'goals.m4.cat': 'Juventud',
    'goals.m4.title': 'Juventud en el Poder',
    'goals.m4.quote': '“La juventud de Jandira quiere decidir el ahora.”',
    'goals.m4.body': 'Construcción de oportunidades reales de primer empleo digno, acceso a la universidad pública e impulso a la cultura y el deporte en los barrios.',
    'goals.m4.p1': 'Primer empleo con derechos y programas de formación profesional.',
    'goals.m4.p2': 'Ampliación de cursos populares gratuitos de preparación universitaria en Jandira.',
    'goals.m5.pill': 'Meta 05',
    'goals.m5.cat': 'Derechos',
    'goals.m5.title': 'Ciudadanía e Igualdad',
    'goals.m5.quote': '“Políticas públicas para quienes más lo necesitan.”',
    'goals.m5.body': 'Enfrentamiento a la violencia contra la mujer (comisarías 24h), defensa de los derechos humanos, equidad racial y seguridad alimentaria en Jandira.',
    'goals.m5.p1': 'Fortalecimiento de la red de protección y atención 24h para mujeres.',
    'goals.m5.p2': 'Políticas de equidad racial, acogida y combate al hambre.',
    'contact.eyebrow': 'Participación y Contacto',
    'contact.heading': 'Construye una Jandira mejor <span class="heading-muted">con nosotros</span>',
    'contact.subtext': 'Regístrate para acompañar nuestro trabajo, enviar propuestas de tu barrio y fortalecer Jandira y la Región Oeste de SP junto al Prof. Daniel Abranches.',
    'contact.badge': 'Registro Oficial',
    'contact.cardTitle': 'Completa tus datos',
    'contact.cardSub': 'Mantente conectado con las acciones e iniciativas del Prof. Daniel Abranches.',
    'form.nameLabel': 'Nombre Completo *',
    'form.namePh': 'Ej.: María Silva',
    'form.phoneLabel': 'WhatsApp con código *',
    'form.emailLabel': 'Correo electrónico *',
    'form.emailPh': 'Ej.: maria@email.com',
    'form.cityLabel': 'Barrio / Ciudad *',
    'form.cityPh': 'Ej.: Centro, Jandira - SP',
    'form.auth': 'Autorizo recibir comunicaciones a través de los canales oficiales y de aliados',
    'form.submit': 'Enviar Registro por WhatsApp',
    'form.directWa': '¿Dudas o propuestas? Escribe directo por WhatsApp: (11) 91273-0806',
    'form.privacy': 'Datos utilizados para comunicación por medio de los canales oficiales y de aliados.',
    'footer.role': 'PSOL • Presidente del PSOL Jandira',
    'footer.desc': 'Educador de la red pública estatal, afiliado al PSOL y Presidente del PSOL Jandira. Trabajo continuo por el desarrollo de Jandira y el fortalecimiento de la Región Oeste de SP, por la educación pública de calidad, la Tarifa Cero municipal y la fiscalización del fin de la jornada 6x1.',
    'footer.navHeading': 'Navegación',
    'footer.navHome': 'Inicio de la Página',
    'footer.navGoals': 'Metas por Jandira',
    'footer.navAi': 'Datos para IA',
    'footer.channelsHeading': 'Canales Oficiales',
    'footer.waChannel': 'Canal WhatsApp:',
    'footer.copyright': '© 2026 Prof. Daniel Abranches — PSOL Jandira. Todos los derechos reservados.',
    'footer.developedBy': 'Desarrollado por',
    'modal.actionsLabel': 'Acciones y compromisos por Jandira',
    'modal.waBtn': 'Unirse al Canal de WhatsApp',
    'modal.suggestBtn': 'Enviar Sugerencia',
    'floating.waTitle': 'Hablar por WhatsApp',
    toastMissing: 'Por favor, completa tu nombre, WhatsApp y correo electrónico.',
    toastRedirect: 'Redirigiendo a WhatsApp...',
    toastCopied: '¡Enlace copiado para compartir!',
    toastLang: 'Idioma cambiado a Español',
    floatingWaText: '¡Hola Prof. Daniel Abranches! Visité el sitio web y me gustaría conversar sobre Jandira.',
    formWaIntro: '¡Hola Prof. Daniel Abranches y equipo!\n\nMe gustaría acompañar y sumarme al trabajo por el desarrollo de Jandira y la Región Oeste de SP.',
    formWaAuth: '\n*Comunicación:* Autorizo recibir comunicaciones a través de los canales oficiales y de aliados.',
    formWaFooter: '_Mensaje enviado desde el sitio oficial danielabranches.com.br_',
    formWaFields: { name: 'Nombre', phone: 'WhatsApp', email: 'Correo', city: 'Barrio/Ciudad' }
  }
};

/* ==========================================================================
   2. BASE DE DADOS MULTILÍNGUE DO MODAL DE METAS (PT / EN / ES)
   ========================================================================== */
const PROPOSALS_DATA = {
  pt: {
    educacao: {
      title: "Educação Pública de Qualidade e Respeito aos Educadores",
      badge: "Meta 01 • Educação",
      quote: "Quem cuida do futuro precisa de respeito no presente.",
      description: "Trabalho permanente em defesa da escola pública em Jandira e na Região Oeste de SP, combatendo a privatização, o sucateamento e a plataformização compulsória do ensino.",
      fullDetails: [
        "<strong>Fim da Plataformização Compulsória:</strong> Enfrentamento direto à imposição desmedida de aplicativos e telas no processo pedagógico em detrimento do ensino humanizado e do papel central do professor em sala de aula.",
        "<strong>Implementação da Lei Federal 15.326/2026 em Jandira:</strong> Pressão e mobilização contínua na rede municipal de Jandira para garantir a equiparação e a valorização salarial dos professores da educação infantil a todo o quadro do magistério.",
        "<strong>Saúde Mental e Valorização Docente:</strong> Defesa de políticas públicas de prevenção ao adoecimento mental dos profissionais da educação e combate à sobrecarga de trabalho.",
        "<strong>Inclusão Escolar Completa para PcD:</strong> Garantia de cuidadores, profissionais de apoio e salas de recursos multifuncionais estruturadas para crianças com deficiência e neurodivergentes em todas as escolas de Jandira.",
        "<strong>Infraestrutura e Merenda de Qualidade:</strong> Cobrança por reformas estruturais imediatas nas escolas públicas de Jandira e fortalecimento da rede de ensino na Região Oeste de SP."
      ]
    },
    transporte: {
      title: "Transporte Público Digno & Fiscalização do Fim da Escala 6x1",
      badge: "Meta 02 • Mobilidade & Trabalho",
      quote: "Transporte público de qualidade e tempo livre são direitos básicos.",
      description: "Com a aprovação da lei pelo fim da escala 6x1, concentramos forças na fiscalização e no fortalecimento do seu cumprimento efetivo, junto à luta pela Tarifa Zero municipal em Jandira e por transporte digno.",
      fullDetails: [
        "<strong>Fiscalização e Fortalecimento do Fim da Escala 6x1:</strong> Com a lei aprovada, atuamos na fiscalização rigorosa, orientação aos trabalhadores e fortalecimento dos mecanismos de denúncia para garantir o cumprimento efetivo do fim da escala 6x1 em Jandira e na Região Oeste de SP.",
        "<strong>Tarifa Zero no Transporte Municipal de Jandira:</strong> Defesa firme da implantação da Tarifa Zero para as linhas de ônibus municipais de Jandira, garantindo transporte gratuito e digno para toda a população da cidade.",
        "<strong>Emergência no Transporte de Jandira:</strong> Cobrança pela renovação imediata da frota sucateada de ônibus municipais e pela reforma estrutural completa do terminal rodoviário de Jandira.",
        "<strong>Redução Tarifária Metropolitana:</strong> Articulação regional pela redução progressiva das passagens dos trens, metrô e ônibus intermunicipais que atendem Jandira e a Região Oeste de SP.",
        "<strong>Fim da Concessão da ViaMobilidade:</strong> Posição firme pelo rompimento do contrato das Linhas 8-Diamante e 9-Esmeralda, exigindo gestão pública eficiente e o fim dos atrasos, superlotações e panes constantes."
      ]
    },
    meio_ambiente: {
      title: "Meio Ambiente, Sustentabilidade e Justiça Climática",
      badge: "Meta 03 • Sustentabilidade",
      quote: "O futuro sustentável de Jandira e da Região Oeste começa agora.",
      description: "Atuação por políticas ambientais sérias em Jandira para enfrentar o calor extremo, proteger os bairros de enchentes e valorizar a economia sustentável.",
      fullDetails: [
        "<strong>Combate Preventivo a Enchentes em Jandira:</strong> Cobrança por limpeza regular, desassoreamento contínuo e contenção de margens de rios, córregos e bacias que cortam o município.",
        "<strong>Regularização Fundiária Socioambiental:</strong> Defesa da urbanização com saneamento básico, iluminação pública e segurança para famílias que vivem em áreas de risco ou encostas em Jandira.",
        "<strong>Parques Lineares e Reflorestamento Urbano:</strong> Ampliação de áreas verdes, arborização de bairros e criação de parques públicos para diminuir as ilhas de calor e ampliar espaços de convivência.",
        "<strong>Proteção da Biodiversidade Regional:</strong> Defesa ativa das matas remanescentes de Mata Atlântica e das nascentes de Jandira e da Região Oeste de SP.",
        "<strong>Fortalecimento de Cooperativas de Reciclagem:</strong> Apoio e incentivo a associações e cooperativas de catadores de materiais recicláveis no município."
      ]
    },
    juventude: {
      title: "Juventude no Poder, Emprego Digno e Cultura",
      badge: "Meta 04 • Juventude",
      quote: "A juventude de Jandira não quer só esperar o futuro, quer decidir o agora.",
      description: "Iniciativas para abrir caminhos reais de trabalho, estudos, cultura e protagonismo para a juventude de Jandira e da Região Oeste de SP.",
      fullDetails: [
        "<strong>Primeiro Emprego com Direitos:</strong> Defesa de programas de qualificação profissional com bolsa permanência e garantia integral de direitos trabalhistas para jovens.",
        "<strong>Acesso à Universidade Pública:</strong> Criação e ampliação de cursinhos populares gratuitos preparatórios para vestibulares e ENEM em Jandira.",
        "<strong>Cultura Viva nos Bairros:</strong> Fomento a saraus, batalhas de rima, dança, teatro, música e coletivos audiovisuais locais.",
        "<strong>Esporte e Lazer Comunitário:</strong> Cobrança pela revitalização, abertura e iluminação de quadras públicas nos fins de semana e noites para práticas esportivas seguras em Jandira."
      ]
    },
    cidadania: {
      title: "Cidadania, Direitos Humanos e Igualdade Social",
      badge: "Meta 05 • Direitos Humanos",
      quote: "Políticas públicas para quem mais precisa.",
      description: "Defesa intransigente dos direitos humanos, equidade racial, igualdade de gênero e proteção às populações vulneráveis em Jandira e na Região Oeste de SP.",
      fullDetails: [
        "<strong>Combate à Violência Contra a Mulher:</strong> Fortalecimento das Delegacias da Mulher (DDMs) com atendimento 24h e ampliação da rede de acolhimento psicológico e jurídico para vítimas em Jandira e região.",
        "<strong>Combate ao Racismo e Discriminação:</strong> Defesa da implementação efetiva do ensino de história e cultura afro-brasileira e indígena nas escolas públicas.",
        "<strong>Respeito e Acolhimento LGBTQIA+:</strong> Mobilização por centros de referência e acolhimento para a população em situação de vulnerabilidade.",
        "<strong>Assistência Social Ativa:</strong> Fortalecimento de cozinhas comunitárias e programas de segurança alimentar e combate à fome nos bairros de Jandira."
      ]
    }
  },

  en: {
    educacao: {
      title: "Quality Public Education & Respect for Educators",
      badge: "Goal 01 • Education",
      quote: "Those who care for the future deserve respect in the present.",
      description: "Permanent work defending public schools in Jandira and the West Region of SP, fighting privatization, underfunding, and forced digital platformization.",
      fullDetails: [
        "<strong>End of Mandatory Platformization:</strong> Directly confronting the excessive imposition of apps and screens in pedagogy at the expense of humanized teaching and the central role of teachers.",
        "<strong>Implementation of Federal Law 15.326/2026 in Jandira:</strong> Ongoing advocacy in Jandira’s municipal network to secure wage parity and fair recognition for early childhood teachers.",
        "<strong>Mental Health & Teacher Valuation:</strong> Advocating for public policies to prevent educator burnout and combat chronic work overload.",
        "<strong>Full School Inclusion for Students with Disabilities:</strong> Ensuring caregivers, specialized support staff, and fully equipped resource rooms in every school in Jandira.",
        "<strong>School Infrastructure & Quality Meals:</strong> Demanding urgent structural repairs for public schools in Jandira and strengthening the public education network across the West Region of SP."
      ]
    },
    transporte: {
      title: "Dignified Public Transit & Enforcing the End of the 6x1 Schedule",
      badge: "Goal 02 • Mobility & Labor",
      quote: "Quality public transit and free time are fundamental rights.",
      description: "With the end of the 6x1 work schedule approved into law, we focus on oversight and strengthening full compliance, alongside municipal Fare-Free Transit in Jandira.",
      fullDetails: [
        "<strong>Oversight & Enforcement of the End of the 6x1 Schedule:</strong> With the law passed, we carry out strict oversight, worker guidance, and reporting support to ensure full compliance across Jandira and the West Region of SP.",
        "<strong>Municipal Fare-Free Transit in Jandira:</strong> Firm defense of Fare-Free municipal bus lines in Jandira, guaranteeing dignified, zero-cost mobility for all residents.",
        "<strong>Urgent Improvements for Jandira’s Transit:</strong> Demanding immediate renewal of aging municipal buses and full structural renovation of Jandira’s bus terminal.",
        "<strong>Metropolitan Fare Reduction:</strong> Regional advocacy for progressive fare reductions on trains, metro, and intercity buses serving Jandira and the West Region of SP.",
        "<strong>Ending the ViaMobilidade Concession:</strong> Clear stance to terminate the Lines 8-Diamond and 9-Emerald contract, demanding efficient public management and an end to delays and breakdowns."
      ]
    },
    meio_ambiente: {
      title: "Environment, Sustainability & Climate Justice",
      badge: "Goal 03 • Sustainability",
      quote: "The sustainable future of Jandira and the West Region starts now.",
      description: "Advocating for strong environmental policies in Jandira to tackle extreme heat, protect neighborhoods from flooding, and support the sustainable economy.",
      fullDetails: [
        "<strong>Preventive Flood Action in Jandira:</strong> Demanding regular cleaning, continuous dredging, and riverbank reinforcement across local rivers and streams.",
        "<strong>Socio-Environmental Land Regularization:</strong> Defending urbanization with sanitation, street lighting, and safety for families living in high-risk areas in Jandira.",
        "<strong>Linear Parks & Urban Reforestation:</strong> Expanding green areas, neighborhood tree planting, and public parks to reduce urban heat islands.",
        "<strong>Protecting Regional Biodiversity:</strong> Active defense of remaining Atlantic Forest areas and water springs in Jandira and the West Region of SP.",
        "<strong>Strengthening Recycling Cooperatives:</strong> Supporting and investing in local waste-picker associations and recycling cooperatives."
      ]
    },
    juventude: {
      title: "Youth in Power, Dignified Jobs & Culture",
      badge: "Goal 04 • Youth",
      quote: "Jandira’s youth doesn’t just want to wait for the future—it wants to shape the present.",
      description: "Initiatives opening real pathways to dignified work, higher education, culture, and leadership for youth in Jandira and the West Region of SP.",
      fullDetails: [
        "<strong>First Job with Labor Rights:</strong> Supporting vocational training programs with retention stipends and full labor protections for young workers.",
        "<strong>Access to Public Universities:</strong> Creating and expanding free community exam-prep courses for ENEM and public universities in Jandira.",
        "<strong>Living Culture in the Neighborhoods:</strong> Supporting local poetry slams, rap battles, dance, theater, music, and audiovisual collectives.",
        "<strong>Community Sports & Leisure:</strong> Demanding revitalization, weekend access, and night lighting for public sports courts across Jandira."
      ]
    },
    cidadania: {
      title: "Citizenship, Human Rights & Social Equality",
      badge: "Goal 05 • Human Rights",
      quote: "Public policies for those who need them most.",
      description: "Unwavering defense of human rights, racial equity, gender equality, and protection for vulnerable communities in Jandira and the West Region of SP.",
      fullDetails: [
        "<strong>Combating Violence Against Women:</strong> Strengthening 24/7 Women’s Police Stations (DDMs) and expanding psychological and legal support networks in Jandira and the region.",
        "<strong>Fighting Racism & Discrimination:</strong> Enforcing the teaching of Afro-Brazilian and Indigenous history and culture in public schools.",
        "<strong>LGBTQIA+ Respect & Care:</strong> Advocating for reference and support centers for vulnerable community members.",
        "<strong>Active Social Assistance:</strong> Strengthening community kitchens and food security initiatives across Jandira’s neighborhoods."
      ]
    }
  },

  es: {
    educacao: {
      title: "Educación Pública de Calidad y Respeto a los Educadores",
      badge: "Meta 01 • Educación",
      quote: "Quien cuida el futuro merece respeto en el presente.",
      description: "Trabajo permanente en defensa de la escuela pública en Jandira y la Región Oeste de SP, combatiendo la privatización, el deterioro y la plataformización obligatoria.",
      fullDetails: [
        "<strong>Fin de la Plataformización Obligatoria:</strong> Enfrentamiento directo a la imposición excesiva de aplicaciones y pantallas en el proceso pedagógico en perjuicio de la enseñanza humanizada y del papel central del docente.",
        "<strong>Implementación de la Ley Federal 15.326/2026 en Jandira:</strong> Presión y movilización continua en la red municipal de Jandira para garantizar la equiparación y valorización salarial docente en educación infantil.",
        "<strong>Salud Mental y Valorización Docente:</strong> Defensa de políticas públicas para prevenir el agotamiento mental y combatir la sobrecarga laboral en la educación.",
        "<strong>Inclusión Escolar Plena para PcD:</strong> Garantía de cuidadores, profesionales de apoyo y aulas de recursos multifuncionales en todas las escuelas de Jandira.",
        "<strong>Infraestructura y Alimentación de Calidad:</strong> Exigencia de reformas estructurales inmediatas en las escuelas públicas de Jandira y fortalecimiento educativo en la Región Oeste de SP."
      ]
    },
    transporte: {
      title: "Transporte Público Digno y Fiscalización del Fin de la Jornada 6x1",
      badge: "Meta 02 • Movilidad y Trabajo",
      quote: "El transporte público de calidad y el tiempo libre son derechos básicos.",
      description: "Con la aprobación de la ley del fin de la jornada 6x1, concentramos fuerzas en la fiscalización y fortalecimiento de su cumplimiento efectivo, junto a la lucha por la Tarifa Cero municipal en Jandira.",
      fullDetails: [
        "<strong>Fiscalización y Fortalecimiento del Fin de la Jornada 6x1:</strong> Con la ley aprobada, actuamos en la fiscalización rigurosa, orientación a los trabajadores y canales de denuncia para asegurar su cumplimiento efectivo en Jandira y la Región Oeste de SP.",
        "<strong>Tarifa Cero en el Transporte Municipal de Jandira:</strong> Defensa firme de la implementación de la Tarifa Cero para las líneas municipales de Jandira, garantizando movilidad gratuita y digna.",
        "<strong>Emergencia en el Transporte de Jandira:</strong> Exigencia de renovación inmediata de la flota de autobuses municipales y reforma estructural de la terminal de Jandira.",
        "<strong>Reducción Tarifaria Metropolitana:</strong> Articulación regional para la reducción progresiva de tarifas en trenes, metro y autobuses intermunicipales de Jandira y la Región Oeste de SP.",
        "<strong>Fin de la Concesión de ViaMobilidade:</strong> Postura firme por la cancelación del contrato de las Líneas 8-Diamante y 9-Esmeralda, exigiendo gestión pública eficiente y fin de retrasos y fallas."
      ]
    },
    meio_ambiente: {
      title: "Medio Ambiente, Sostenibilidad y Justicia Climática",
      badge: "Meta 03 • Sostenibilidad",
      quote: "El futuro sostenible de Jandira y la Región Oeste comienza ahora.",
      description: "Actuación por políticas ambientales serias en Jandira para enfrentar el calor extremo, proteger los barrios de inundaciones y valorar la economía sostenible.",
      fullDetails: [
        "<strong>Prevención de Inundaciones en Jandira:</strong> Exigencia de limpieza periódica, desazolve continuo y contención de márgenes de ríos y arroyos del municipio.",
        "<strong>Regularización Territorial Socioambiental:</strong> Defensa de la urbanización con saneamiento básico, alumbrado público y seguridad para familias en zonas de riesgo en Jandira.",
        "<strong>Parques Lineales y Reforestación Urbana:</strong> Ampliación de áreas verdes, arborización de barrios y parques públicos para reducir las islas de calor.",
        "<strong>Protección de la Biodiversidad Regional:</strong> Defensa activa de los remanentes de Mata Atlántica y nacientes en Jandira y la Región Oeste de SP.",
        "<strong>Fortalecimiento de Cooperativas de Reciclaje:</strong> Apoyo e incentivo a asociaciones y cooperativas de recicladores del municipio."
      ]
    },
    juventude: {
      title: "Juventud en el Poder, Empleo Digno y Cultura",
      badge: "Meta 04 • Juventud",
      quote: "La juventud de Jandira no solo quiere esperar el futuro, quiere decidir el ahora.",
      description: "Iniciativas para abrir caminos reales de trabajo, estudios, cultura y protagonismo para la juventud de Jandira y la Región Oeste de SP.",
      fullDetails: [
        "<strong>Primer Empleo con Derechos:</strong> Defensa de programas de formación profesional con beca de permanencia y garantía integral de derechos laborales.",
        "<strong>Acceso a la Universidad Pública:</strong> Creación y ampliación de cursos populares gratuitos preparatorios para el ENEM y universidades públicas en Jandira.",
        "<strong>Cultura Viva en los Barrios:</strong> Fomento a encuentros culturales, batallas de rima, danza, teatro, música y colectivos audiovisuales locales.",
        "<strong>Deporte y Recreación Comunitaria:</strong> Exigencia de revitalización, apertura e iluminación nocturna de canchas públicas para el deporte seguro en Jandira."
      ]
    },
    cidadania: {
      title: "Ciudadanía, Derechos Humanos e Igualdad Social",
      badge: "Meta 05 • Derechos Humanos",
      quote: "Políticas públicas para quienes más lo necesitan.",
      description: "Defensa intransigente de los derechos humanos, equidad racial, igualdad de género y protección a las poblaciones vulnerables en Jandira y la Región Oeste de SP.",
      fullDetails: [
        "<strong>Combate a la Violencia Contra la Mujer:</strong> Fortalecimiento de las Comisarías de la Mujer (DDMs) 24h y ampliación de la red de apoyo psicológico y jurídico en Jandira y la región.",
        "<strong>Combate al Racismo y la Discriminación:</strong> Implementación efectiva de la enseñanza de historia y cultura afrobrasileña e indígena en las escuelas públicas.",
        "<strong>Respeto y Acogida LGBTQIA+:</strong> Movilización por centros de referencia y atención para personas en situación de vulnerabilidad.",
        "<strong>Asistencia Social Activa:</strong> Fortalecimiento de comedores comunitarios y programas de seguridad alimentaria y combate al hambre en los barrios de Jandira."
      ]
    }
  }
};

/* ==========================================================================
   3. SELETOR DE IDIOMAS (PT / EN / ES)
   ========================================================================== */
function applyLanguage(lang, notify = false) {
  const dict = I18N[lang] || I18N.pt;
  currentLang = I18N[lang] ? lang : 'pt';

  document.documentElement.lang = dict.htmlLang;
  document.title = dict.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
  });

  // Atualizar link do botão flutuante do WhatsApp com mensagem no idioma ativo
  const floatingWa = document.getElementById('floatingWaBtn');
  if (floatingWa && dict.floatingWaText) {
    floatingWa.href = `https://wa.me/5511912730806?text=${encodeURIComponent(dict.floatingWaText)}`;
  }

  // Atualizar botões ativos do seletor de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-lang') === currentLang;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Se o modal de metas estiver aberto, re-renderizar no novo idioma
  if (activeModalKey) {
    renderProposalModalContent(activeModalKey);
  }

  try {
    localStorage.setItem('prof_daniel_lang', currentLang);
  } catch (e) {
    // Ignore storage restriction
  }

  if (notify && dict.toastLang) {
    showToast(dict.toastLang);
  }
}

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  let savedLang = 'pt';
  try {
    const stored = localStorage.getItem('prof_daniel_lang');
    if (stored && I18N[stored]) savedLang = stored;
  } catch (e) {
    // Ignore storage restriction
  }

  applyLanguage(savedLang, false);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang, true);
      }
    });
  });
}

/* ==========================================================================
   4. NAVEGAÇÃO & HEADER RESPONSIVO
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-item-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          const navTarget = document.querySelector(`.nav-item-link[href="#${sectionId}"]`);
          if (navTarget) {
            navLinks.forEach(l => l.classList.remove('active'));
            navTarget.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => navObserver.observe(section));
  }
}

/* ==========================================================================
   5. ACESSIBILIDADE (TAMANHO DA FONTE)
   ========================================================================== */
function initAccessibility() {
  const fontIncBtn = document.getElementById('fontIncrease');
  const fontDecBtn = document.getElementById('fontDecrease');

  let currentZoom = 100;
  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentZoom < 130) {
        currentZoom += 10;
        document.documentElement.style.fontSize = `${(16 * currentZoom) / 100}px`;
      }
    });
  }
  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentZoom > 90) {
        currentZoom -= 10;
        document.documentElement.style.fontSize = `${(16 * currentZoom) / 100}px`;
      }
    });
  }
}

/* ==========================================================================
   6. MODAL DE METAS POR JANDIRA
   ========================================================================== */
function renderProposalModalContent(targetKey) {
  const langProposals = PROPOSALS_DATA[currentLang] || PROPOSALS_DATA.pt;
  const data = langProposals[targetKey];
  if (!data) return false;

  const modalBadge = document.getElementById('modalProposalBadge');
  const modalTitle = document.getElementById('modalProposalTitle');
  const modalQuote = document.getElementById('modalProposalQuote');
  const modalDesc = document.getElementById('modalProposalDesc');
  const modalList = document.getElementById('modalProposalList');

  if (modalBadge) modalBadge.textContent = data.badge;
  if (modalTitle) modalTitle.textContent = data.title;
  if (modalQuote) modalQuote.textContent = `“${data.quote}”`;
  if (modalDesc) modalDesc.textContent = data.description;
  if (modalList) {
    modalList.innerHTML = data.fullDetails.map(item => `
      <li class="modal-detail-item">
        <span class="modal-detail-dot" aria-hidden="true"></span>
        <div>${item}</div>
      </li>
    `).join('');
  }
  return true;
}

function initProposalModal() {
  const modalBackdrop = document.getElementById('proposalModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const detailButtons = document.querySelectorAll('[data-proposal-target]');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetKey = btn.getAttribute('data-proposal-target');
      if (!renderProposalModalContent(targetKey)) return;

      activeModalKey = targetKey;
      modalBackdrop?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    activeModalKey = null;
    modalBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. FORMULÁRIO DE CONTATO & INTEGRAÇÃO WHATSAPP
   ========================================================================== */
function initVolunteerForm() {
  const form = document.getElementById('volunteerForm');
  const phoneInput = document.getElementById('volunteerPhone');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (v.length > 5) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)/, '($1');
      }
      e.target.value = v;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const honeypot = document.getElementById('website_field');
      if (honeypot && honeypot.value.trim() !== '') {
        return;
      }

      const dict = I18N[currentLang] || I18N.pt;
      const name = document.getElementById('volunteerName')?.value.trim() || '';
      const phone = document.getElementById('volunteerPhone')?.value.trim() || '';
      const email = document.getElementById('volunteerEmail')?.value.trim() || '';
      const city = document.getElementById('volunteerCity')?.value.trim() || 'Jandira - SP';
      const authorizedComm = document.getElementById('optCommunication')?.checked;

      if (!name || !phone || !email) {
        showToast(dict.toastMissing);
        return;
      }

      const f = dict.formWaFields;
      const commText = authorizedComm ? dict.formWaAuth : '';
      const emailText = email ? `\n*${f.email}:* ${email}` : '';
      const whatsappMessage = `${dict.formWaIntro}\n\n*${f.name}:* ${name}\n*${f.phone}:* ${phone}${emailText}\n*${f.city}:* ${city}${commText}\n\n${dict.formWaFooter}`;

      const targetNumber = '5511912730806';
      const encodedMsg = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;

      showToast(dict.toastRedirect);

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        form.reset();
      }, 800);
    });
  }
}

/* ==========================================================================
   8. ANIMAÇÕES SUAVES NO SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.social-bento-card, .trajectory-dark-card, .meta-card, .contact-modern-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   9. COPIAR LINK PARA COMPARTILHAR (CARDS DE REDES OFICIAIS)
   ========================================================================== */
function initCopyLinks() {
  const copyButtons = document.querySelectorAll('.social-copy-btn[data-copy-url]');
  const linkIconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  const checkIconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const url = btn.getAttribute('data-copy-url');
      if (!url) return;

      let copied = false;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(url);
          copied = true;
        } catch (err) {
          copied = false;
        }
      }

      if (!copied) {
        const tempInput = document.createElement('textarea');
        tempInput.value = url;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand('copy');
          copied = true;
        } catch (err) {
          copied = false;
        }
        document.body.removeChild(tempInput);
      }

      if (copied) {
        const dict = I18N[currentLang] || I18N.pt;
        btn.classList.add('copied');
        btn.innerHTML = checkIconSvg;
        showToast(dict.toastCopied);

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = linkIconSvg;
        }, 1800);
      }
    });
  });
}

/* ==========================================================================
   10. TOAST DE FEEDBACK
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-modern';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}
