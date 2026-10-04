import { FaqItem } from '@/types';

export const faqList: FaqItem[] = [
  {
    question: 'What technologies do you specialise in?',
    answer: (
      <>
        My core stack is <strong>React, Next.js, TypeScript, and Node.js</strong>. On the data side,
        I work with <strong>MongoDB</strong> and REST APIs. For real—time features, I use{' '}
        <strong>WebSockets</strong> and <strong>WebRTC</strong>. I am comfortable with{' '}
        <strong>Docker</strong> and <strong>CI/CD</strong>. I also have a strong background in
        accessibility (a11y), internationalization (i18n), and design systems.
      </>
    ),
  },
  {
    question: 'Do you do both front-end and back-end work?',
    answer:
      'Yes. My primary focus is front-end — React, Next.js, TypeScript, UI architecture — but I am fully comfortable on the back end with Node.js, Express, MongoDB, and REST APIs. I have designed and implemented end-to-end systems, including CI/CD pipelines for reliable delivery.',
  },
  {
    question: 'Do you work remotely or on-site?',
    answer:
      'I’m open to remote, hybrid, and on-site opportunities, depending on the team, project, and location.',
  },
  {
    question: 'Are you open to freelance or contract work?',
    answer:
      'Yes. I am open to discussing freelance and contract opportunities depending on the project, scope, and timeline.',
  },
  {
    question: 'Can you work on projects from scratch?',
    answer:
      'Yes. I enjoy working from the early stages of a project, from structuring the UI and building reusable components to integrating APIs and deploying the application.',
  },
  {
    question: 'How can I get in touch with you?',
    answer:
      'The easiest way is by email. You can also find me on GitHub and LinkedIn using the links provided on this site.',
  },
];
