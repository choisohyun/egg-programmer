module.exports = {
  pathPrefix: '',
  siteUrl: 'https://egg-programmer.netlify.app/',
  siteTitle: 'Egg Programmer',
  siteDescription: 'Front end Developer',
  author: '@choisohyun',
  postsForArchivePage: 3,
  defaultLanguage: 'ko',
  disqusScript:
    'https://egg-programmer.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/choisohyun',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description:
        'JavaScript는 웹 페이지에 기능을 제공하기 위해 HTML 및 CSS와 함께 사용되는 프로그래밍 언어입니다.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description:
        'Node.js는 다양한 환경에서 JavaScript를 실행하기위한 도구입니다.',
      color: '#90c53f',
    },
    undefined: {
      name: 'undefined',
      description: '이전 블로그 포스팅에서 태그가 정해져 있지 않은 경우입니다.',
      color: '#00bbff',
    },
    typescript: {
      name: 'typescript',
      description:
        'TypeScript는 일반 JavaScript에 타입을 지정해 주기 위해 사용하는 라이브러리입니다.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description:
        'React는 UI 디자인에 사용되는 오픈 소스 JavaScript 라이브러리입니다.',
      color: '#61dbfa',
    },
    html: {
      name: 'HTML',
      description:
        '웹을 강화하는 마크 업 언어입니다. 모든 웹 사이트는 HTML을 사용하여 컨텐츠를 구성합니다.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description:
        'CSS는 HTML 요소의 스타일을 지정하고 웹 응용 프로그램을 매우 멋지게 보여줍니다.',
      color: '#43ace0',
    },
  },
};
