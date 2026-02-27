import React, { useState, useEffect, useRef } from "react";
import logoImg from "../assets/68d7406ef4d653456d43654a6af6386410f8dcd0.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Database, Smartphone,
  Globe, Server, ChevronDown, MapPin, Phone, Send, Menu, X, Star,
  Briefcase, GraduationCap, Award, ArrowRight, Instagram,
} from "lucide-react";

// ─── TYPES & LANGUAGE CONFIG ──────────────────────────────────────────────────

type Lang = "es" | "en" | "pt";

const LANGS: { code: Lang; label: string; flags: string[] }[] = [
  { code: "es", label: "Español", flags: ["🇪🇸"] },
  { code: "en", label: "English", flags: ["🇺🇸", "🇬🇧"] },
  { code: "pt", label: "Português", flags: ["🇧🇷", "🇵🇹"] },
];

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

const T = {
  es: {
    nav: {
      links: [
        { label: "Inicio", href: "#inicio" },
        { label: "Acerca de", href: "#acerca" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Skills", href: "#skills" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Contacto", href: "#contacto" },
        { label: "Rating", href: "#rating" },
      ],
      cta: "Contrátame",
    },
    hero: {
      badge: "Disponible para proyectos",
      line1: "FULL STACK",
      line2: "DEVELOPER©",
      subtitle: "Construyo soluciones digitales de alto impacto. Transformo ideas complejas en productos robustos, escalables y orientados al resultado.",
      cta1: "Ver Proyectos",
      cta2: "Contactarme",
      stats: ["Años exp.", "Proyectos", "Clientes", "Rating"],
    },
    about: {
      num: "02.",
      label: "ACERCA DE MÍ",
      title: "Construyo el",
      highlight: "futuro digital",
      titleEnd: "una línea de código a la vez.",
      p1: "Soy técnico en informática y desarrollador de páginas y aplicaciones web con <gold>UI/UX profesionales</gold>. También diseño portfolios de manera profesional utilizando VibeCoding y muchas más herramientas de IA que potencian mi desempeño.",
      p2: "Me apasiona crear soluciones digitales elegantes y funcionales. Cuento con 6 años de formación técnica y actualmente curso Ingeniería en Informática. Siempre busco <b>superar las expectativas</b> en cada proyecto que afronto.",
      location: "Posadas, Misiones (Argentina) / Remoto global",
      values: [
        { title: "Código limpio", desc: "Estándares y mejores prácticas" },
        { title: "Calidad Premium", desc: "Entrego más de lo esperado" },
        { title: "Visión global", desc: "Proyectos internacionales" },
        { title: "En construcción", desc: "Construyendo mi cartera de clientes" },
      ],
    },
    projects: {
      num: "03.",
      label: "PROYECTOS",
      title: "Proyectos",
      highlight: "Destacados",
      filterAll: "Todos",
      featuredBadge: "★ DESTACADO",
      demoBtn: "Demo",
      codeBtn: "Código",
      items: [
        {
          title: "MediAbsence",
          category: "Full Stack",
          description: "Sistema integral para la gestión y manejo rutinario de hospitales. Administración de ausencias médicas, turnos y datos de pacientes con interfaz intuitiva y eficiente.",
        },
        {
          title: "CheckCar MH",
          category: "Full Stack",
          description: "Aplicación web premium tipo SPA para administración de talleres mecánicos. Flujo diferenciado para administradores y clientes, diseño oscuro con estilo glassmorphism. (React 18.3, Vite 6.0, JavaScript ES6+, HTML, CSS)",
        },
        {
          title: "Portfolios Profesionales",
          category: "Frontend",
          description: "Contacto y recibo clientes para satisfacer sus demandas digitales. Planifico y desarrollo portfolios de impacto estratégico utilizando VibeCoding e IA —como este mismo portfolio.",
        },
        {
          title: "Próximo Proyecto",
          category: "Full Stack",
          description: "Nuevo proyecto en camino. Próximamente compartiré los detalles de esta nueva solución digital.",
        },
      ],
    },
    skills: {
      num: "04.",
      label: "SKILLS",
      title: "Stack Técnico &",
      highlight: "Competencias",
      subtitle: "Dominio completo del ciclo de vida del desarrollo de software, desde la concepción hasta el despliegue en producción.",
      softLabel: "HABILIDADES BLANDAS",
      softSkills: [
        "Liderazgo de equipos", "Pensamiento estratégico", "Comunicación efectiva",
        "Resolución de problemas", "Metodologías Ágiles",
        "Gestión de proyectos", "Orientado a resultados",
      ],
      catTitles: ["Frontend", "Backend", "Bases de datos", "Mobile & DevOps"],
    },
    experience: {
      num: "05.",
      label: "EXPERIENCIA RELEVANTE",
      title: "TRAYECTORIA",
      highlight: "PROFESIONAL",
      types: { work: "Trabajo", freelance: "Freelance", education: "Educación" },
      items: [
        {
          role: "300 hs de Prácticas Profesionalizantes",
          company: "Escuela de Robótica — Posadas, Misiones",
          period: "Abril — Nov 2025",
          type: "work",
          description: "Completé 300 horas de prácticas profesionalizantes en la Escuela de Robótica de Posadas, aplicando mis conocimientos técnicos en proyectos reales y fortaleciendo mi experiencia en entornos colaborativos de alta exigencia.",
          achievements: [
            "Aplicación de metodologías ágiles en un entorno professional real",
            "Desarrollo y mantenimiento de soluciones tecnológicas aplicadas",
            "Trabajo interdisciplinario con equipos de robótica y software",
          ],
        },
        {
          role: "Freelance Developer — e-commerce & SaaS",
          company: "Independiente",
          period: "2025 — Actualidad",
          type: "freelance",
          description: "Trabajo como desarrollador freelance especializado en e-commerce y plataformas SaaS, construyendo soluciones web de alto impacto con diseños premium, UI/UX refinada y arquitecturas escalables.",
          achievements: [
            "Especialización en aplicaciones web tipo SPA con React y Vite",
            "Diseño y desarrollo de portfolios profesionales con VibeCoding e IA",
            "Entrega de proyectos con interfaz glassmorphism de nivel premium",
          ],
        },
        {
          role: "Técnico en Informática",
          company: "EPET 34",
          period: "2020 — 2025",
          type: "education",
          description: "Formación técnica de 6 años que me otorgó el título de Técnico en Informática. Adquirí bases sólidas en programación, redes, sistemas operativos y soporte técnico tanto en entornos profesionales como personales.",
          achievements: [
            "Titulado como Técnico en Informática tras 6 años de formación intensiva",
            "Experiencia en soporte técnico, redes y administración de sistemas",
            "Desarrollo de proyectos técnicos aplicados a problemas reales",
          ],
        },
        {
          role: "Ingeniería en Informática",
          company: "Universidad Gastón Dachary",
          period: "2026 — Actualidad",
          type: "education",
          description: "Actualmente cursando Ingeniería en Informática en la Universidad Gastón Dachary, profundizando mis conocimientos en algoritmia, arquitectura de software, bases de datos avanzadas y desarrollo de sistemas complejos.",
          achievements: [
            "Formación universitaria orientada a la ingeniería de software",
            "Profundización en algoritmos, estructuras de datos y arquitecturas modernas",
            "Complemento perfecto a mi trayectoria técnica y freelance activa",
          ],
        },
      ],
    },
    contact: {
      num: "06.",
      label: "CONTACTO",
      title: "¿Tienes un proyecto?",
      highlight: "Hablemos.",
      subtitle: "Estoy disponible para proyectos freelance, posiciones senior y colaboraciones estratégicas. No dudes en contactarme.",
      fields: {
        name: "Nombre", email: "Email", subject: "Asunto", message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre", email: "tu@email.com",
        subject: "¿En qué puedo ayudarte?", message: "Cuéntame sobre tu proyecto...",
      },
      send: "Enviar Mensaje",
      sent: "✓ ¡Mensaje enviado!",
      infoLabels: { email: "Email", whatsapp: "WhatsApp", location: "Ubicación" },
      locationValue: "Posadas, Misiones (Argentina) / Trabajo remoto",
    },
    footer: {
      role: "Full Stack Developer",
      rights: "© 2026 LR Solutions. Todos los derechos reservados.",
    },
    rating: {
      num: "07.",
      label: "RATING",
      title: "Lo que dicen",
      highlight: "de mí",
      subtitle: "¿Trabajaste conmigo o te gustó mi trabajo? Dejá tu reseña y ayudá a otros a conocerme.",
      noReviews: "Sé el primero en dejar una reseña",
      btnLeave: "Dejar reseña",
      modalTitle: "Dejar una reseña",
      fieldName: "Tu nombre",
      fieldComment: "Tu comentario",
      fieldNamePh: "Ej: Juan García",
      fieldCommentPh: "Contá tu experiencia...",
      btnSubmit: "Publicar reseña",
      btnClose: "Cancelar",
      ratingLabel: "Puntuación",
    },
  },

  // ── ENGLISH ──────────────────────────────────────────────────────────────────
  en: {
    nav: {
      links: [
        { label: "Home", href: "#inicio" },
        { label: "About", href: "#acerca" },
        { label: "Projects", href: "#proyectos" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experiencia" },
        { label: "Contact", href: "#contacto" },
        { label: "Rating", href: "#rating" },
      ],
      cta: "Hire Me",
    },
    hero: {
      badge: "Available for projects",
      line1: "FULL STACK",
      line2: "DEVELOPER©",
      subtitle: "I build high-impact digital solutions. I transform complex ideas into robust, scalable products focused on real results.",
      cta1: "View Projects",
      cta2: "Contact Me",
      stats: ["Years exp.", "Projects", "Clients", "Rating"],
    },
    about: {
      num: "02.",
      label: "ABOUT ME",
      title: "I build the",
      highlight: "digital future",
      titleEnd: "one line of code at a time.",
      p1: "I'm an IT technician and web developer creating pages and applications with <gold>professional UI/UX</gold>. I also design portfolios professionally using VibeCoding and many more AI tools that enhance my performance.",
      p2: "I'm passionate about building elegant and functional digital solutions. I have 6 years of technical education and I'm currently studying Computer Engineering. I always strive to <b>exceed expectations</b> in every project I take on.",
      location: "Posadas, Misiones (Argentina) / Remote Global",
      values: [
        { title: "Clean Code", desc: "Standards & best practices" },
        { title: "Premium Quality", desc: "I deliver beyond expectations" },
        { title: "Global Vision", desc: "International projects" },
        { title: "Building Up", desc: "Growing my client portfolio" },
      ],
    },
    projects: {
      num: "03.",
      label: "PROJECTS",
      title: "Featured",
      highlight: "Projects",
      filterAll: "All",
      featuredBadge: "★ FEATURED",
      demoBtn: "Demo",
      codeBtn: "Code",
      items: [
        {
          title: "MediAbsence",
          category: "Full Stack",
          description: "Comprehensive system for routine hospital management. Handles medical absences, appointments, and patient data with an intuitive and efficient interface.",
        },
        {
          title: "CheckCar MH",
          category: "Full Stack",
          description: "Premium SPA web app for auto repair shop management. Differentiated flow for admins and clients, with a dark glassmorphism design. (React 18.3, Vite 6.0, JavaScript ES6+, HTML, CSS)",
        },
        {
          title: "Professional Portfolios",
          category: "Frontend",
          description: "I receive and work with clients to meet their digital demands. I plan and develop strategically impactful portfolios using VibeCoding and AI —like this portfolio itself.",
        },
        {
          title: "Next Project",
          category: "Full Stack",
          description: "A new project is on its way. Details coming soon on this next digital solution.",
        },
      ],
    },
    skills: {
      num: "04.",
      label: "SKILLS",
      title: "Technical Stack &",
      highlight: "Competencies",
      subtitle: "Full mastery of the software development lifecycle, from conception to production deployment.",
      softLabel: "SOFT SKILLS",
      softSkills: [
        "Team Leadership", "Strategic Thinking", "Effective Communication",
        "Problem Solving", "Agile Methodologies",
        "Project Management", "Results-Oriented",
      ],
      catTitles: ["Frontend", "Backend", "Databases", "Mobile & DevOps"],
    },
    experience: {
      num: "05.",
      label: "RELEVANT EXPERIENCE",
      title: "PROFESSIONAL",
      highlight: "TRACK RECORD",
      types: { work: "Work", freelance: "Freelance", education: "Education" },
      items: [
        {
          role: "300 hrs Professional Internship",
          company: "Escuela de Robótica — Posadas, Misiones",
          period: "April — Nov 2025",
          type: "work",
          description: "Completed 300 hours of professional internship at the Robotics School of Posadas, applying technical skills in real-world projects and strengthening my experience in collaborative, high-demand environments.",
          achievements: [
            "Applied agile methodologies in a real professional environment",
            "Development and maintenance of applied technology solutions",
            "Interdisciplinary teamwork with robotics and software teams",
          ],
        },
        {
          role: "Freelance Developer — e-commerce & SaaS",
          company: "Independent",
          period: "2025 — Present",
          type: "freelance",
          description: "Working as a freelance developer specialized in e-commerce and SaaS platforms, building high-impact web solutions with premium designs, refined UI/UX, and scalable architectures.",
          achievements: [
            "Specialization in SPA web applications with React and Vite",
            "Design and development of professional portfolios using VibeCoding and AI",
            "Delivery of projects with premium-level glassmorphism interfaces",
          ],
        },
        {
          role: "IT Technician",
          company: "EPET 34",
          period: "2020 — 2025",
          type: "education",
          description: "6-year technical education that earned me the title of IT Technician. Built a solid foundation in programming, networking, operating systems, and technical support in both professional and personal environments.",
          achievements: [
            "Graduated as IT Technician after 6 years of intensive training",
            "Experience in technical support, networking, and systems administration",
            "Development of applied technical projects for real-world problems",
          ],
        },
        {
          role: "Computer Engineering",
          company: "Universidad Gastón Dachary",
          period: "2026 — Present",
          type: "education",
          description: "Currently studying Computer Engineering at Universidad Gastón Dachary, deepening knowledge in algorithms, software architecture, advanced databases, and complex system development.",
          achievements: [
            "University training focused on software engineering",
            "Deep dive into algorithms, data structures, and modern architectures",
            "Perfect complement to my technical and active freelance journey",
          ],
        },
      ],
    },
    contact: {
      num: "06.",
      label: "CONTACT",
      title: "Got a project?",
      highlight: "Let's talk.",
      subtitle: "I'm available for freelance projects, senior positions, and strategic collaborations. Don't hesitate to reach out.",
      fields: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
      placeholders: {
        name: "Your name", email: "you@email.com",
        subject: "How can I help you?", message: "Tell me about your project...",
      },
      send: "Send Message",
      sent: "✓ Message sent!",
      infoLabels: { email: "Email", whatsapp: "WhatsApp", location: "Location" },
      locationValue: "Posadas, Misiones (Argentina) / Remote work",
    },
    footer: {
      role: "Full Stack Developer",
      rights: "© 2026 LR Solutions. All rights reserved.",
    },
    rating: {
      num: "07.",
      label: "RATING",
      title: "What people say",
      highlight: "about me",
      subtitle: "Did you work with me or enjoy my work? Leave a review and help others get to know me.",
      noReviews: "Be the first to leave a review",
      btnLeave: "Leave a review",
      modalTitle: "Leave a Review",
      fieldName: "Your name",
      fieldComment: "Your comment",
      fieldNamePh: "E.g. John Smith",
      fieldCommentPh: "Share your experience...",
      btnSubmit: "Publish review",
      btnClose: "Cancel",
      ratingLabel: "Rating",
    },
  },

  // ── PORTUGUESE ────────────────────────────────────────────────────────────────
  pt: {
    nav: {
      links: [
        { label: "Início", href: "#inicio" },
        { label: "Sobre mim", href: "#acerca" },
        { label: "Projetos", href: "#proyectos" },
        { label: "Skills", href: "#skills" },
        { label: "Experiência", href: "#experiencia" },
        { label: "Contato", href: "#contacto" },
        { label: "Rating", href: "#rating" },
      ],
      cta: "Contrate-me",
    },
    hero: {
      badge: "Disponível para projetos",
      line1: "FULL STACK",
      line2: "DEVELOPER©",
      subtitle: "Construo soluções digitais de alto impacto. Transformo ideias complexas em produtos robustos, escaláveis e orientados a resultados.",
      cta1: "Ver Projetos",
      cta2: "Entrar em contato",
      stats: ["Anos exp.", "Projetos", "Clientes", "Avaliação"],
    },
    about: {
      num: "02.",
      label: "SOBRE MIM",
      title: "Construo o",
      highlight: "futuro digital",
      titleEnd: "uma linha de código por vez.",
      p1: "Sou técnico em informática e desenvolvedor de páginas e aplicações web com <gold>UI/UX profissional</gold>. Também desenvolvo portfólios profissionalmente usando VibeCoding e outras ferramentas de IA que potencializam meu desempenho.",
      p2: "Sou apaixonado por criar soluções digitais elegantes e funcionais. Tenho 6 anos de formação técnica e atualmente curso Engenharia em Informática. Sempre busco <b>superar expectativas</b> em cada projeto que assumo.",
      location: "Posadas, Misiones (Argentina) / Remoto Global",
      values: [
        { title: "Código limpo", desc: "Padrões e melhores práticas" },
        { title: "Qualidade Premium", desc: "Entrego além do esperado" },
        { title: "Visão global", desc: "Projetos internacionais" },
        { title: "Em crescimento", desc: "Construindo minha carteira de clientes" },
      ],
    },
    projects: {
      num: "03.",
      label: "PROJETOS",
      title: "Projetos em",
      highlight: "Destaque",
      filterAll: "Todos",
      featuredBadge: "★ DESTAQUE",
      demoBtn: "Demo",
      codeBtn: "Código",
      items: [
        {
          title: "MediAbsence",
          category: "Full Stack",
          description: "Sistema completo para gestão rotineira de hospitais. Administra ausências médicas, agendamentos e dados de pacientes com interface intuitiva e eficiente.",
        },
        {
          title: "CheckCar MH",
          category: "Full Stack",
          description: "Aplicação web premium tipo SPA para administração de oficinas mecânicas. Fluxo diferenciado para admins e clientes, design escuro glassmorphism. (React 18.3, Vite 6.0, JS ES6+, HTML, CSS)",
        },
        {
          title: "Portfólios Profissionais",
          category: "Frontend",
          description: "Recebo e atendo clientes para satisfazer suas demandas digitais. Planeio e desenvolvo portfólios de impacto estratégico com VibeCoding e IA —como este portfólio.",
        },
        {
          title: "Próximo Projeto",
          category: "Full Stack",
          description: "Novo projeto a caminho. Em breve compartilharei os detalhes desta nova solução digital.",
        },
      ],
    },
    skills: {
      num: "04.",
      label: "SKILLS",
      title: "Stack Técnico &",
      highlight: "Competências",
      subtitle: "Domínio completo do ciclo de vida do desenvolvimento de software, da concepção ao deploy em produção.",
      softLabel: "HABILIDADES INTERPESSOAIS",
      softSkills: [
        "Liderança de equipes", "Pensamento estratégico", "Comunicação eficaz",
        "Resolução de problemas", "Metodologias Ágeis",
        "Gestão de projetos", "Orientado a resultados",
      ],
      catTitles: ["Frontend", "Backend", "Bancos de dados", "Mobile & DevOps"],
    },
    experience: {
      num: "05.",
      label: "EXPERIÊNCIA RELEVANTE",
      title: "TRAJETÓRIA",
      highlight: "PROFISSIONAL",
      types: { work: "Trabalho", freelance: "Freelance", education: "Educação" },
      items: [
        {
          role: "300 hs de Estágio Profissionalizante",
          company: "Escuela de Robótica — Posadas, Misiones",
          period: "Abril — Nov 2025",
          type: "work",
          description: "Realizei 300 horas de estágio profissionalizante na Escola de Robótica de Posadas, aplicando meu conhecimento técnico em projetos reais e fortalecendo minha experiência em ambientes colaborativos e exigentes.",
          achievements: [
            "Aplicação de metodologias ágeis em ambiente profissional real",
            "Desenvolvimento e manutenção de soluções tecnológicas aplicadas",
            "Trabalho interdisciplinar com equipes de robótica e software",
          ],
        },
        {
          role: "Desenvolvedor Freelance — e-commerce & SaaS",
          company: "Independente",
          period: "2025 — Presente",
          type: "freelance",
          description: "Atuo como desenvolvedor freelance especializado em e-commerce e plataformas SaaS, construindo soluções web de alto impacto com designs premium, UI/UX refinada e arquiteturas escaláveis.",
          achievements: [
            "Especialização em aplicações web SPA com React e Vite",
            "Design e desenvolvimento de portfólios profissionais com VibeCoding e IA",
            "Entrega de projetos com interface glassmorphism de nível premium",
          ],
        },
        {
          role: "Técnico em Informática",
          company: "EPET 34",
          period: "2020 — 2025",
          type: "education",
          description: "Formação técnica de 6 anos que me conferiu o título de Técnico em Informática. Adquiri bases sólidas em programação, redes, sistemas operacionais e suporte técnico em ambientes profissionais e pessoais.",
          achievements: [
            "Formado como Técnico em Informática após 6 anos de formação intensiva",
            "Experiência em suporte técnico, redes e administração de sistemas",
            "Desenvolvimento de projetos técnicos aplicados a problemas reais",
          ],
        },
        {
          role: "Engenharia em Informática",
          company: "Universidad Gastón Dachary",
          period: "2026 — Presente",
          type: "education",
          description: "Atualmente cursando Engenharia em Informática na Universidad Gastón Dachary, aprofundando o conhecimento em algoritmia, arquitetura de software, bancos de dados avançados e desenvolvimento de sistemas complexos.",
          achievements: [
            "Formação universitária orientada à engenharia de software",
            "Aprofundamento em algoritmos, estruturas de dados e arquiteturas modernas",
            "Complemento perfeito à minha trajetória técnica e freelance ativa",
          ],
        },
      ],
    },
    contact: {
      num: "06.",
      label: "CONTATO",
      title: "Tem um projeto?",
      highlight: "Vamos conversar.",
      subtitle: "Estou disponível para projetos freelance, posições sênior e colaborações estratégicas. Não hesite em entrar em contato.",
      fields: { name: "Nome", email: "Email", subject: "Assunto", message: "Mensagem" },
      placeholders: {
        name: "Seu nome", email: "voce@email.com",
        subject: "Como posso te ajudar?", message: "Conte-me sobre seu projeto...",
      },
      send: "Enviar Mensagem",
      sent: "✓ Mensagem enviada!",
      infoLabels: { email: "Email", whatsapp: "WhatsApp", location: "Localização" },
      locationValue: "Posadas, Misiones (Argentina) / Trabalho remoto",
    },
    footer: {
      role: "Full Stack Developer",
      rights: "© 2026 LR Solutions. Todos os direitos reservados.",
    },
    rating: {
      num: "07.",
      label: "AVALIAÇÕES",
      title: "O que dizem",
      highlight: "sobre mim",
      subtitle: "Trabalhou comigo ou gostou do meu trabalho? Deixe sua avaliação e ajude outros a me conhecer.",
      noReviews: "Seja o primeiro a deixar uma avaliação",
      btnLeave: "Deixar avaliação",
      modalTitle: "Deixar uma Avaliação",
      fieldName: "Seu nome",
      fieldComment: "Seu comentário",
      fieldNamePh: "Ex: João Silva",
      fieldCommentPh: "Compartilhe sua experiência...",
      btnSubmit: "Publicar avaliação",
      btnClose: "Cancelar",
      ratingLabel: "Pontuação",
    },
  },
} as const;

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────

const projectImages = [
  "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBkYXJrJTIwVUl8ZW58MXx8fHwxNzcxNzU3ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBlY29tbWVyY2UlMjBwcm9qZWN0JTIwcG9ydGZvbGlvfGVufDF8fHx8MTc3MTgwODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBmaW50ZWNoJTIwYXBwfGVufDF8fHx8MTc3MTgwODE4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwcGxhdGZvcm0lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTgwODE4MXww&ixlib=rb-4.1.0&q=80&w=1080",
];

const projectTags = [
  ["React", "Node.js", "SQL", "UI/UX"],
  ["React 18.3", "Vite 6.0", "JavaScript ES6+", "CSS"],
  ["VibeCoding", "IA", "HTML", "CSS"],
  ["Full Stack", "En desarrollo"],
];

const projectFeatured = [true, true, false, false];

const projectLinks = [
  { demo: "#", code: "https://github.com/tomiileonel/MediAbsence.git" }, // MediAbsence
  { demo: "#", code: "https://github.com/tomiileonel/checkcar.git" }, // CheckCar MH
  { demo: "#", code: "#" }, // Portfolios
  { demo: "#", code: "#" }, // Proximo
];

const skillCategories = (catTitles: readonly string[]) => [
  {
    icon: <Globe size={22} />,
    title: catTitles[0],
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 65 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    icon: <Server size={22} />,
    title: catTitles[1],
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "SQL", level: 82 },
      { name: "Microservices", level: 65 },
    ],
  },
  {
    icon: <Database size={22} />,
    title: catTitles[2],
    skills: [
      { name: "SQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Supabase", level: 72 },
      { name: "Firebase", level: 68 },
    ],
  },
  {
    icon: <Smartphone size={22} />,
    title: catTitles[3],
    skills: [
      { name: "React Native", level: 68 },
      { name: "Docker", level: 62 },
      { name: "AWS", level: 58 },
      { name: "CI/CD", level: 62 },
    ],
  },
];

const expIcons: Record<string, React.ReactNode> = {
  work: <Briefcase size={18} />,
  freelance: <Star size={18} />,
  education: <GraduationCap size={18} />,
};

// ─── LANG SWITCHER ────────────────────────────────────────────────────────────

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#c9a84c]/25 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
        style={{ fontSize: "0.82rem", fontWeight: 600 }}
      >
        <span style={{ fontSize: "1rem" }}>{current.flags.join(" ")}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-xl overflow-hidden border border-[#c9a84c]/15 bg-[#0d0d1a] shadow-2xl z-50"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#c9a84c]/10 ${l.code === lang
                  ? "bg-[#c9a84c]/10 text-[#c9a84c]"
                  : "text-[#a0a0b8] hover:text-white"
                  }`}
                style={{ fontSize: "0.85rem" }}
              >
                <span style={{ fontSize: "1.1rem" }}>{l.flags.join(" ")}</span>
                <span style={{ fontWeight: l.code === lang ? 600 : 400 }}>{l.label}</span>
                {l.code === lang && (
                  <span className="ml-auto text-[#c9a84c]" style={{ fontSize: "0.7rem" }}>✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const t = T[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = t.nav.links.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang, t.nav.links]);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#050508]/95 backdrop-blur-md border-b border-[#c9a84c]/10"
        : "bg-transparent"
        }`}
    >
      {/* ── SELECTED ELEMENT START ── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
          <img src={logoImg} alt="LR Logo" className="w-10 h-10 object-contain" />
          <span className="text-[#c9a84c] tracking-widest hidden sm:block" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
            LR SOLUTIONS
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {t.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm ${activeSection === link.href.replace("#", "")
                ? "text-[#c9a84c] bg-[#c9a84c]/10"
                : "text-[#a0a0b8] hover:text-white hover:bg-white/5"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side: Lang Switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            onClick={() => scrollTo("#contacto")}
            className="px-5 py-2 rounded-lg text-sm bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white hover:opacity-90 transition-all"
            style={{ fontWeight: 500 }}
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button className="text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* ── SELECTED ELEMENT END ── */}

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a12]/98 backdrop-blur-md border-t border-[#c9a84c]/10 px-6 pb-6 pt-2"
        >
          {t.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-[#a0a0b8] hover:text-[#c9a84c] border-b border-white/5 text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacto")}
            className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white text-sm"
          >
            {t.nav.cta}
          </button>
        </motion.div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero({ lang }: { lang: Lang }) {
  const t = T[lang].hero;
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#8b1a2f]/8 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/6 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 w-full">
        <div className="flex-1 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] mb-6" style={{ fontSize: "0.8rem" }}>
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            {t.line1}{" "}
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #8b1a2f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.line2}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#8a8a9a] max-w-xl mx-auto lg:mx-0 mb-8" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            {t.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <button onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white hover:opacity-90 transition-all"
              style={{ fontWeight: 600 }}>
              {t.cta1} <ArrowRight size={18} />
            </button>
            <button onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
              style={{ fontWeight: 600 }}>
              {t.cta2} <Mail size={18} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex gap-8 justify-center lg:justify-start">
            {[
              { n: "6", label: t.stats[0] },
              { n: "10+", label: t.stats[1] },
              { n: "0", label: t.stats[2] },
              { n: "0", label: t.stats[3] },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-[#c9a84c]" style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>{s.n}</div>
                <div className="text-[#5a5a6a]" style={{ fontSize: "0.75rem", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a84c]/20 to-[#8b1a2f]/20 blur-2xl" />
            <div className="absolute inset-4 rounded-full border border-[#c9a84c]/20" style={{ animation: "spin 20s linear infinite" }} />
            <div className="absolute inset-8 rounded-full border border-[#8b1a2f]/20" style={{ animation: "spin 15s linear infinite reverse" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logoImg} alt="LR Logo" className="w-48 h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" />
            </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#0d0d1a] border border-[#c9a84c]/30 text-white flex items-center gap-2" style={{ fontSize: "0.8rem" }}>
            <Code2 size={14} className="text-[#c9a84c]" />
            Full Stack Dev
          </motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#0d0d1a] border border-[#8b1a2f]/30 text-white flex items-center gap-2" style={{ fontSize: "0.8rem" }}>
            <Award size={14} className="text-[#8b1a2f]" />
            Disponible
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5a5a6a]">
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About({ lang }: { lang: Lang }) {
  const t = T[lang].about;

  const renderP = (text: string) =>
    text
      .replace(/<gold>(.*?)<\/gold>/g, `<span style="color:#c9a84c;font-weight:600">$1</span>`)
      .replace(/<b>(.*?)<\/b>/g, `<strong style="color:#ffffff">$1</strong>`);

  return (
    <section id="acerca" className="py-32 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
              {t.title}{" "}
              <span style={{ color: "#c9a84c" }}>{t.highlight}</span>{" "}
              {t.titleEnd}
            </h2>
            <p className="text-[#7a7a8a] mb-6" style={{ lineHeight: 1.9 }}
              dangerouslySetInnerHTML={{ __html: renderP(t.p1) }} />
            <p className="text-[#7a7a8a] mb-8" style={{ lineHeight: 1.9 }}
              dangerouslySetInnerHTML={{ __html: renderP(t.p2) }} />
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-[#8a8a9a]" style={{ fontSize: "0.9rem" }}>
                <MapPin size={16} className="text-[#c9a84c]" />
                {t.location}
              </div>
              <div className="flex items-center gap-3 text-[#8a8a9a]" style={{ fontSize: "0.9rem" }}>
                <Mail size={16} className="text-[#c9a84c]" />
                tomasleonelramon@gmail.com
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632893037506-aac33bf18107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3JraW5nJTIwbGFwdG9wJTIwZGFya3xlbnwxfHx8fDE3NzE4MDgxODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.values.map((v, i) => {
                const icons = [<Code2 size={18} />, <Star size={18} />, <Globe size={18} />, <Award size={18} />];
                return (
                  <div key={i} className="p-4 rounded-xl bg-[#0d0d1a] border border-white/5 hover:border-[#c9a84c]/20 transition-colors">
                    <div className="text-[#c9a84c] mb-2">{icons[i]}</div>
                    <div className="text-white mb-1" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{v.title}</div>
                    <div className="text-[#5a5a6a]" style={{ fontSize: "0.75rem" }}>{v.desc}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function Projects({ lang }: { lang: Lang }) {
  const t = T[lang].projects;
  const [filter, setFilter] = useState<string>("all");

  const allLabel = t.filterAll;
  const categories = ["all", "Full Stack", "Frontend"];
  const catLabels: Record<string, string> = {
    all: allLabel,
    "Full Stack": "Full Stack",
    "Frontend": "Frontend",
  };

  const filtered = t.items
    .map((item, i) => ({ ...item, image: projectImages[i], tags: projectTags[i], featured: projectFeatured[i], links: projectLinks[i] }))
    .filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="proyectos" className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            {t.title}{" "}<span style={{ color: "#c9a84c" }}>{t.highlight}</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === c
                  ? "bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white"
                  : "border border-white/10 text-[#7a7a8a] hover:border-[#c9a84c]/30 hover:text-[#c9a84c]"
                  }`}>
                {catLabels[c]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/5 hover:border-[#c9a84c]/25 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/40 to-transparent" />
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c]" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                    {t.featuredBadge}
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#8b1a2f]/20 border border-[#8b1a2f]/40 text-[#f08090]" style={{ fontSize: "0.7rem" }}>
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{project.title}</h3>
                <p className="text-[#6a6a7a] mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[#8a8a9a] border border-white/5" style={{ fontSize: "0.72rem" }}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.links.demo} target={project.links.demo !== "#" ? "_blank" : undefined} rel={project.links.demo !== "#" ? "noopener noreferrer" : undefined} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white text-sm hover:opacity-90 transition-opacity" style={{ fontWeight: 500 }}>
                    <ExternalLink size={14} /> {t.demoBtn}
                  </a>
                  <a href={project.links.code} target={project.links.code !== "#" ? "_blank" : undefined} rel={project.links.code !== "#" ? "noopener noreferrer" : undefined} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-[#8a8a9a] text-sm hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all">
                    <Github size={14} /> {t.codeBtn}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

function Skills({ lang }: { lang: Lang }) {
  const t = T[lang].skills;
  const cats = skillCategories(t.catTitles);

  return (
    <section id="skills" className="py-32 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
          {t.title}{" "}<span style={{ color: "#c9a84c" }}>{t.highlight}</span>
        </motion.h2>
        <p className="text-[#6a6a7a] mb-16 max-w-2xl" style={{ lineHeight: 1.8 }}>{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cats.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">{cat.icon}</div>
                <h3 className="text-white" style={{ fontSize: "1rem", fontWeight: 700 }}>{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#9a9aaa]" style={{ fontSize: "0.85rem" }}>{skill.name}</span>
                      <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #8b1a2f, #c9a84c)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-[#7a7a8a] mb-6" style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}>{t.softLabel}</h3>
          <div className="flex flex-wrap gap-3">
            {t.softSkills.map((skill, i) => (
              <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-[#c9a84c]/20 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors cursor-default"
                style={{ fontSize: "0.85rem" }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience({ lang }: { lang: Lang }) {
  const t = T[lang].experience;

  return (
    <section id="experiencia" className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-white mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
          {t.title}{" "}<span style={{ color: "#c9a84c" }}>{t.highlight}</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/40 via-[#8b1a2f]/30 to-transparent hidden md:block" />
          <div className="space-y-8">
            {t.items.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="md:pl-20 relative">
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#0d0d1a] border-2 border-[#c9a84c]/40 items-center justify-center text-[#c9a84c]">
                  {expIcons[exp.type]}
                </div>
                <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-[#c9a84c]/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white" style={{ fontSize: "1.1rem", fontWeight: 700 }}>{exp.role}</h3>
                      <span className="text-[#c9a84c]" style={{ fontSize: "0.9rem" }}>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full border text-xs ${exp.type === "education"
                        ? "border-[#8b1a2f]/40 text-[#f08090] bg-[#8b1a2f]/10"
                        : exp.type === "freelance"
                          ? "border-[#c9a84c]/40 text-[#c9a84c] bg-[#c9a84c]/10"
                          : "border-white/10 text-[#8a8a9a] bg-white/5"
                        }`}>
                        {t.types[exp.type as keyof typeof t.types]}
                      </span>
                      <span className="text-[#5a5a6a]" style={{ fontSize: "0.8rem" }}>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-[#6a6a7a] mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#7a7a8a]" style={{ fontSize: "0.82rem" }}>
                        <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">▸</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact({ lang }: { lang: Lang }) {
  const t = T[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contacto" className="py-32 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t.title}{" "}<span style={{ color: "#c9a84c" }}>{t.highlight}</span>
            </h2>
            <p className="text-[#6a6a7a] mb-10" style={{ lineHeight: 1.8 }}>{t.subtitle}</p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <Mail size={18} />, label: t.infoLabels.email, value: "tomasleonelramon@gmail.com" },
                { icon: <Phone size={18} />, label: t.infoLabels.whatsapp, value: "+54 3764197883" },
                { icon: <MapPin size={18} />, label: t.infoLabels.location, value: t.locationValue },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c]">{item.icon}</div>
                  <div>
                    <div className="text-[#5a5a6a]" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>{item.label}</div>
                    <div className="text-white" style={{ fontSize: "0.9rem" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href={s.href} title={s.label}
                  className="w-12 h-12 rounded-xl bg-[#0d0d1a] border border-white/5 flex items-center justify-center text-[#6a6a7a] hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#0d0d1a] border border-white/5 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fields.name}</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.placeholders.name}
                    className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors"
                    style={{ fontSize: "0.9rem" }} />
                </div>
                <div>
                  <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fields.email}</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.placeholders.email}
                    className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors"
                    style={{ fontSize: "0.9rem" }} />
                </div>
              </div>
              <div>
                <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fields.subject}</label>
                <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.placeholders.subject}
                  className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors"
                  style={{ fontSize: "0.9rem" }} />
              </div>
              <div>
                <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fields.message}</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.placeholders.message}
                  className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors resize-none"
                  style={{ fontSize: "0.9rem" }} />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white hover:opacity-90 transition-all"
                style={{ fontWeight: 600 }}>
                {sent ? t.sent : <><Send size={18} />{t.send}</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── RATINGS ─────────────────────────────────────────────────────────────────

interface Review {
  name: string;
  comment: string;
  stars: number;
  date: string;
}

function StarRating({ value, onChange }: { value: number; onChange?: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange?.(n)}
          onMouseEnter={() => onChange && setHover(n)}
          onMouseLeave={() => onChange && setHover(0)}
          className={`transition-all text-2xl ${n <= (hover || value) ? "text-[#c9a84c]" : "text-[#3a3a4a]"
            } ${onChange ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function Ratings({ lang }: { lang: Lang }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (T[lang] as any).rating as {
    num: string; label: string; title: string; highlight: string; subtitle: string;
    noReviews: string; btnLeave: string; modalTitle: string; fieldName: string;
    fieldComment: string; fieldNamePh: string; fieldCommentPh: string;
    btnSubmit: string; btnClose: string; ratingLabel: string;
  };
  const [reviews, setReviews] = useState<Review[]>(() => {
    try { return JSON.parse(localStorage.getItem("portfolio_reviews") || "[]") as Review[]; }
    catch (_e) { return []; }
  });
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", comment: "", stars: 0 });
  const [formError, setFormError] = useState("");

  const avgRating = reviews.length
    ? reviews.reduce((acc, r) => acc + r.stars, 0) / reviews.length : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.stars === 0) { setFormError("Por favor seleccioná una puntuación."); return; }
    if (!form.name.trim() || !form.comment.trim()) { setFormError("Completá todos los campos."); return; }
    const newReview: Review = {
      name: form.name.trim(), comment: form.comment.trim(), stars: form.stars,
      date: new Date().toLocaleDateString("es-AR", { year: "numeric", month: "short", day: "numeric" }),
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("portfolio_reviews", JSON.stringify(updated));
    setForm({ name: "", comment: "", stars: 0 });
    setFormError("");
    setShowModal(false);
  };

  return (
    <section id="rating" className="py-32 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-4">
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.num}</span>
          <span className="text-[#c9a84c]" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>{t.label}</span>
          <div className="flex-1 h-px bg-[#c9a84c]/20 max-w-xs" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t.title} <span style={{ color: "#c9a84c" }}>{t.highlight}</span>
            </h2>
            <p className="text-[#6a6a7a] mt-3 max-w-xl" style={{ lineHeight: 1.8 }}>{t.subtitle}</p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex items-end gap-4">
              <span className="text-[#c9a84c]" style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}>
                {reviews.length ? avgRating.toFixed(1) : "0.0"}
              </span>
              <div className="pb-1">
                <StarRating value={Math.round(avgRating)} />
                <span className="text-[#5a5a6a]" style={{ fontSize: "0.8rem" }}>
                  {reviews.length} {reviews.length === 1 ? "reseña" : "reseñas"}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white hover:opacity-90 transition-all"
              style={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              <Star size={16} /> {t.btnLeave}
            </button>
          </div>
        </motion.div>

        {reviews.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="py-20 flex flex-col items-center justify-center text-center">
            <div className="text-7xl mb-4" style={{ opacity: 0.15 }}>★</div>
            <p className="text-[#4a4a5a]" style={{ fontSize: "1rem" }}>{t.noReviews}</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-[#c9a84c]/20 transition-colors">
                <StarRating value={review.stars} />
                <p className="text-[#9a9aaa] mt-3 mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{review.name}</span>
                  <span className="text-[#4a4a5a]" style={{ fontSize: "0.75rem" }}>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            onClick={(e) => { if (e.target === e.currentTarget) { setShowModal(false); setFormError(""); } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md p-8 rounded-2xl bg-[#0d0d1a] border border-[#c9a84c]/20"
            >
              <h3 className="text-white mb-6" style={{ fontSize: "1.3rem", fontWeight: 700 }}>{t.modalTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.ratingLabel}</label>
                  <StarRating value={form.stars} onChange={(n) => setForm({ ...form, stars: n })} />
                </div>
                <div>
                  <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fieldName}</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.fieldNamePh}
                    className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label className="block text-[#7a7a8a] mb-2" style={{ fontSize: "0.8rem" }}>{t.fieldComment}</label>
                  <textarea
                    rows={4}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    placeholder={t.fieldCommentPh}
                    className="w-full px-4 py-3 rounded-xl bg-[#050508] border border-white/8 text-white placeholder-[#4a4a5a] outline-none focus:border-[#c9a84c]/40 transition-colors resize-none"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>
                {formError && <p className="text-[#f08090]" style={{ fontSize: "0.82rem" }}>{formError}</p>}
                <div className="flex gap-3">
                  <button type="button"
                    onClick={() => { setShowModal(false); setFormError(""); }}
                    className="flex-1 py-3 rounded-xl border border-white/10 text-[#7a7a8a] hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all"
                    style={{ fontSize: "0.9rem" }}>
                    {t.btnClose}
                  </button>
                  <button type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#8b1a2f] to-[#c9a84c] text-white hover:opacity-90 transition-all"
                    style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                    {t.btnSubmit}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer({ lang }: { lang: Lang }) {
  const tf = T[lang].footer;
  const tn = T[lang].nav;

  return (
    <footer className="bg-[#050508] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="LR Logo" className="w-10 h-10 object-contain" />
            <div>
              <div className="text-[#c9a84c]" style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em" }}>LR SOLUTIONS</div>
              <div className="text-[#4a4a5a]" style={{ fontSize: "0.72rem" }}>{tf.role}</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {tn.links.map((link) => (
              <button key={link.href}
                onClick={() => document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })}
                className="text-[#5a5a6a] hover:text-[#c9a84c] transition-colors" style={{ fontSize: "0.82rem" }}>
                {link.label}
              </button>
            ))}
          </div>
          <p className="text-[#3a3a4a]" style={{ fontSize: "0.8rem" }}>{tf.rights}</p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050508", color: "#f0f0f0", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Ratings lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
