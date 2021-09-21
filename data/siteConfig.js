module.exports = {
    siteTitle: 'Hello friend, I\'m Serverket.',
    siteDescription: `This is my personal website to showcase a few things about me`,
    keyWords: ['persosnal', 'website', 'cvs', 'contact'],
    authorName: 'Manuel "Serverket" Hernandez',
    twitterUsername: 'Serverket',
    githubUsername: 'serverket',
    authorAvatar: '/images/avatar.png',
    authorDescription: `Developer, DevOps, Designer, Post Producer and Editor. I don't need to know everything, I just need to know where to find it, when I need it, with the help of God who guides me on every step.
    <br>Foreign Bird at <b>The Parrot Project<b/>`,
  skills: [
  {
    name: 'HTML',
    level: 70
  },
  {
    name: 'CSS',
    level: 70
  },
  {
    name: 'Javascript',
    level: 50
  },
  {
    name: 'React',
    level: 40
  },
  {
    name: 'TailwindCSS',
    level: 70
  },
  {
    name: 'Git',
    level: 80
  }
  ],
  jobs: [
  {
    company: "Rootsystem",
    begin: {
      month: 'sep',
      year: '2015'
    },
    duration: null,
    occupation: "UX/UI Designer",
    description: "Making of easy and comprehensive User Interface and User Experience elements for web systems."
  }, {
    company: "TAV LANGUAGE GROUP",
    begin: {
      month: 'apr',
      year: '2017'
    },
    duration: null,
    occupation: "Technical Translator",
    description: "Translation and review of technical documents and manuals from English to Spanish and viceversa."
  }, {
    company: "Rivero Visual Group",
    begin: {
      month: 'aug',
      year: 'Present'
    },
    duration: null,
    occupation: "CIO",
    description: "I lead teams to make impossible things look easy as Developer, DevOps, Designer, CMO, Translator and Editor."
  }, {
    company: "The Parrot Project",
    begin: {
      month: 'dec',
      year: 'Present'
    },
    duration: null,
    occupation: "Designer",
    description: "I help a little here and there, small changes to serve great purposes as Lead Designer (former), Moderator, Translator, Editor, Community Manager, Part-time Youtuber at Parrot School and Dm Knght's midnight coding companion."
  },
  ],
  portfolio: [
  {
    image: "/images/anonsurf.png",
    description: "Iconset for Anonsurf",
    url: "https://nest.parrotsec.org/packages/tools/anonsurf"
  },
  {
    image: "/images/rgc.png",
    description: "Corporate Landing Page",
    url: "https://riverosglobalcompany.com/"
  },
  ],
    social: {
    twitter: "https://twitter.com/Serverket",
    linkedin: "https://www.linkedin.com/in/serverket",
    github: "https://github.com/serverket",
    email: "serverket@protonmail.com"
  },
    siteUrl: 'https://serverket.vercel.app',
    pathPrefix: '/home', // Note: it must *not* have a trailing slash.
    siteCover: '/images/cover.png',
    googleAnalyticsId: 'UA-000000000-1',
    background_color: '#ffffff',
    theme_color: '#448bb7',
    fontColor: "#448bb7",
    enableDarkmode: true, // If true, enables dark mode switch
    display: 'minimal-ui',
    icon: 'src/assets/serverket_logo.png',
    headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}