import React, { useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';

const content = {
  en: {
    title: 'Emanuelle Coelho',
    subtitle: 'Backend Developer • End-to-end Enthusiast • AI Explorer',
    intro: 'New ideas with the reliability of a classic. Brazilian backend developer with a passion for clean code and stable systems.',
    aboutTitle: 'Get to know me a little better',
    aboutText: 'Biologist turned into a backend developer who delivers with purpose and precision. Experienced in Java, Python, Go, and web technologies. I enjoy transforming complex problems into stable systems and building reliable code.\nMy background blends biophysics research (where I used Java and statistical thermodynamics to predict protein structures) with real-world tech leadership at healthtech and HR SaaS companies. At Tabia Health, I deliver full-stack solutions using Java, Spring, TypeScript, and PostgreSQL, while bridging product, operations, and client needs. Before that, as a Product Manager at Levee, I led AI-driven HR product development, backlog prioritization, and crisis resolution for enterprise clients. I’ve also served as President of AIESEC in Brasília, paying off external debts, growing sales by 91%, and increasing volunteer retention to 88%. Fluent in English (C2) and comfortable across AWS, Python, Java, React, and agile methodologies, I love building things that work — and making sure they solve real people’s problems.',
    skillsTitle: 'Learn about my skills',
    skills: [
      'Stack: Python (Flask, Django, FastAPI), Java (Spring, Maven), React, Typescript (Node.js, Express, Next.js)',
      'PostgreSQL, MySQL, MongoDB',
      'AWS Infrastructure, CI/CD pipelines',
      "DevOps fundamentals: Docker, Kubernetes, monitoring tools",
      "AI integration (ChatGPT, Anthropic Claude, custom models)",
      'Project management: Agile methodologies, team leadership',
      "Backlog grooming, sprint planning, cross-functional collaboration",
      "IT Support: troubleshooting, user support, system maintenance",
      "Fluent in English (EF Certificate - C2) and Portuguese (Native), with experience in bilingual communication and documentation",
    ],
    projectsTitle: 'Featured projects',
    projects: [
      {
        title: 'My Portfolio',
        description: "Precisely what you look at; If you want, see source code on GitHub.",
        url: 'https://example.com/windows95-portfolio',
      },
      {
        title: 'Mutant Boi Genius',
        description: 'just a blog',
        url: 'https://mutantboigenius.com',
      },
      {
        title: 'mini-BOMBERMAN',
        description: 'A simple implementation of the classic game.',
        url: 'https://github.com/evicacoelho/mini-bomberman',
      },
      {
        title: 'Ecomestivel',
        description: "A simple community driven project to map every plant around your block and know if they're edible or not.",
        url: 'https://github.com/evicacoelho/ecomestivel'
      },
      {
        title: 'CDI - Clinical Documentation Integrity',
        description: 'A project focused on ensuring the accuracy and completeness of encounter notes and their billability. Privately used in a healthtech company, but I can share more details about the architecture and implementation if you are interested.',
        url: 'https://i.kym-cdn.com/entries/icons/facebook/000/043/596/vem-ai-o-meme-de-adelia-que-invadiu-as-redes-sociais-1597786283600_v2_615x300.jpg'
      }
    ],
    resumeTitle: 'Resume downloads',
    resumeText: 'Choose the best version for your review.',
    englishCV: 'English CV',
    portugueseCV: 'Currículo em Português',
    contactTitle: 'Contact',
    contactText: 'You can reach out to me through the form below or through the links below.',
    email: 'evicacoelho@proton.me',
    linkedin: 'https://www.linkedin.com/in/evicacoelho',
    github: 'https://github.com/evicacoelho',
    languageLabel: 'Language',
  },
  pt: {
    title: 'Emanuelle Coelho',
    subtitle: 'Desenvolvedora Backend • Entusiasta End-to-end • Exploradora de IA',
    intro: 'Ideias novas com a confiabilidade de um clássico. Desenvolvedora backend brasileira com paixão por código limpo e sistemas estáveis.',
    aboutTitle: 'Conheça um pouco mais sobre mim',
    aboutText: 'Bióloga transformada em desenvolvedora backend que entrega com propósito e precisão. Experiente em Java, Python, Go e tecnologias web. Gosto de transformar problemas complexos em sistemas estáveis e construir código confiável.\nMinha formação combina pesquisa em biofísica (onde usei Java e termodinâmica estatística para prever estruturas de proteínas) com liderança tecnológica no mundo real em empresas de healthtech e HR SaaS. Na Tabia Health, entrego soluções full-stack usando Java, Spring, TypeScript e PostgreSQL, enquanto faço a ponte entre produto, operações e necessidades dos clientes. Antes disso, como Gerente de Produto na Levee, liderei o desenvolvimento de produtos de RH com IA, priorização de backlog e resolução de crises para clientes empresariais. Também atuei como Presidente da AIESEC em Brasília, quitando dívidas externas, aumentando as vendas em 91% e elevando a retenção de voluntários para 88%. Fluente em inglês (C2) e confortável com AWS, Python, Java, React e metodologias ágeis, adoro construir coisas que funcionam — e garantir que resolvam problemas reais das pessoas.',
    skillsTitle: 'Conheça minhas habilidades',
    skills: [
      'Stack: Python (Flask, Django, FastAPI), Java (Spring, Maven), React, Typescript (Node.js, Express, Next.js)',
      'PostgreSQL, MySQL, MongoDB',
      'Infraestrutura AWS, pipelines CI/CD',
      "Fundamentos de DevOps: Docker, Kubernetes, ferramentas de monitoramento",
      "Integração com IA (ChatGPT, Anthropic Claude, modelos customizados)",
      'Gerenciamento de projetos: Metodologias ágeis, liderança de equipe',
      "Refinamento de backlog, planejamento de sprints, colaboração multifuncional",
      "Suporte de TI: resolução de problemas, suporte ao usuário, manutenção de sistemas",
      "Fluente em inglês (Certificado EF - C2) e português (nativo), com experiência em comunicação e documentação bilíngue",
    ],
    projectsTitle: 'Projetos em destaque',
    projects: [
      {
        title: 'Meu Portfólio',
        description: "Exatamente o que você está vendo; Se quiser, veja o código-fonte no GitHub.",
        url: 'https://example.com/windows95-portfolio',
      },
      {
        title: 'Mutant Boi Genius',
        description: 'apenas um blog',
        url: 'https://mutantboigenius.com',
      },
      {
        title: 'mini-BOMBERMAN',
        description: 'Uma implementação simples do jogo clássico.',
        url: 'https://github.com/evicacoelho/mini-bomberman',
      },
      {
        title: 'Ecomestivel',
        description: "Um projeto comunitário simples para mapear todas as plantas ao redor do seu quarteirão e saber se são comestíveis ou não.",
        url: 'https://github.com/evicacoelho/ecomestivel'
      },
      {
        title: 'CDI - Integridade da Documentação Clínica',
        description: 'Um projeto focado em garantir a precisão e completude dos registros de atendimento e sua facturabilidade. Usado internamente em uma empresa de healthtech, mas posso compartilhar mais detalhes sobre a arquitetura e implementação se você tiver interesse.',
        url: 'https://i.kym-cdn.com/entries/icons/facebook/000/043/596/vem-ai-o-meme-de-adelia-que-invadiu-as-redes-sociais-1597786283600_v2_615x300.jpg'
      }
    ],
    resumeTitle: 'Downloads do currículo',
    resumeText: 'Escolha a melhor versão para sua análise.',
    englishCV: 'Currículo em Inglês',
    portugueseCV: 'Currículo em Português',
    contactTitle: 'Contato',
    contactText: 'Você pode entrar em contato comigo através do formulário abaixo ou pelos links a baixo.',
    email: 'evicacoelho@proton.me',
    linkedin: 'https://www.linkedin.com/in/evicacoelho',
    github: 'https://github.com/evicacoelho',
    languageLabel: 'Idioma',
  },
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const t = content[language];
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <div className="app-shell">
      <div className="top-bar">
        <div className="top-bar__left">🪟 Emanuelle's Portifolio</div>
        <div className="top-bar__right">
          <span>{t.languageLabel}:</span>
          <button
            type="button"
            className={`language-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`language-button ${language === 'pt' ? 'active' : ''}`}
            onClick={() => setLanguage('pt')}
          >
            PT
          </button>
        </div>
      </div>

      <main className="window-grid">
        <section className="window window--large">
          <div className="title-bar">
            <div className="title-bar__text">Hero.exe</div>
          </div>
          <div className="window-body">
            <div className="hero-main">
              <div className="hero-content">
                <h1>{t.title}</h1>
                <h2>{t.subtitle}</h2>
                <p>{t.intro}</p>
                <div className="button-row">
                  <a className="button" href={t.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="button" href={t.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="hero-image-container">
                <img src={`${publicUrl}/hero.png`} alt="Hero" />
              </div>
            </div>
          </div>
        </section>

        <div className="window-column">
          <section className="window window--medium">
            <div className="title-bar title-bar--inactive">
              <div className="title-bar__text">AboutMe.txt</div>
            </div>
            <div className="window-body">
              <h3>{t.aboutTitle}</h3>
              <p>{t.aboutText}</p>
            </div>
          </section>

          <section className="window window--medium">
            <div className="title-bar title-bar--inactive">
              <div className="title-bar__text">Documents.zip</div>
            </div>
            <div className="window-body">
              <h3>{t.resumeTitle}</h3>
              <p>{t.resumeText}</p>
              <div className="button-row button-row--stacked">
                <a className="button" href={`${publicUrl}/cv-en.pdf`} download>{t.englishCV}</a>
                <a className="button" href={`${publicUrl}/cv-pt.pdf`} download>{t.portugueseCV}</a>
              </div>
            </div>
          </section>
        </div>

        <section className="window window--medium">
          <div className="title-bar title-bar--inactive">
            <div className="title-bar__text">SummaryOfSomeThingsIKnow.doc</div>
          </div>
          <div className="window-body">
            <h3>{t.skillsTitle}</h3>
            <ul className="skill-list">
              {t.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="window window--medium">
          <div className="title-bar title-bar--inactive">
            <div className="title-bar__text">CheckTheseProjects.inf</div>
          </div>
          <div className="window-body">
            <h3>{t.projectsTitle}</h3>
            <div className="project-list">
              {t.projects.map(project => (
                <article className="project-card" key={project.title}>
                  <div>
                    <h3><strong>{project.title}</strong></h3>
                    <p>{project.description}</p>
                  </div>
                  <a
                    className="project-button"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact content={{
          contactTitle: t.contactTitle,
          contactText: t.contactText,
          email: t.email,
          linkedin: t.linkedin,
          github: t.github,
        }} />
      </main>

      <footer className="taskbar">
        <div className="taskbar__right">{language.toUpperCase()} | GitHub Pages</div>
      </footer>
    </div>
  );
};

export default App;
