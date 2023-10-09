const data = {
  about: {
    name: 'Eric Cheung',
    description: "I'm ",
    descriptionTypingText: ['Developer', 'Freelancer'],
    introduction:
      'Innovative, talented and hard-working as a specialist that can perform software development including the development cycle as analyzing system requirements, designing, developing, testing software, and application of software development. Ability to think outside the box to find solutions to difficult software problems. Supportive and enthusiastic team player dedicated to delivering cost-effective solutions to problems or challenges.',
    city: 'Toronto, Canada',
    email: 'ericcheung0415@gmail.com',
    github: 'https://github.com/hong970415',
    linkedin: 'https://www.linkedin.com/in/eric-cheung415',
    skills: [
      'ReactJS',
      'NextJS',
      'HTML',
      'CSS',
      'Git',
      'AWS',
      'Agile',
      'Jira',
      'Figma',
      'Cypress',
      'JavaScript/ Typescript/ Nodejs',
      'Go',
      'Java',
      'MongoDB',
      'SQL',
      'Terraform',
      'Github action',
      'Docker',
      'RESTful',
    ],
    copyrightTexts: ['© Copyright ', 'Cheung Wai Hong, Eric', '. All Rights Reserved'],
  },
  resume: {
    educationExp: [
      {
        subTitle: 'Bachelor of Engineering in Computer Science',
        year: '2017 - 2020',
        organization: 'The Hong Kong University of Science and Technology',
      },
      {
        subTitle: 'Associate degree in Information Technology',
        year: '2015 - 2017',
        organization: 'Hong Kong Community College',
      },
    ],
    professionalExp: [
      {
        subTitle: 'Software Engineer',
        year: 'Mar - Aug 2022',
        organization: 'EY Mtel',
        duties: [
          'Collaborated with project managers, UX designers, backend developers and quality assurance to deliver projects for clients in various industries.',
          "Designed and implemented UI interface to meet client's change requests.",
          'Established an interactive and responsive static web applications using React and assisted to deploy to AWS S3 using Cyberduck.',
          'Participated in code review to provide constructive feedback and ensure adherence to best practices.',
          'Discussed options with clients to make sure websites meet their needs as well as the needs of their customers.',
        ],
      },
      {
        subTitle: 'Software Engineer',
        year: 'Apr 2021 - Mar 2022',
        organization: 'alfred24 Global',
        duties: [
          'Collaborated team members to revamp a role-based CMS system in an Agile development environment.',
          "Created company own reusable UI components library based on clients' requirements, with Storybook to provide an extensive visual environment.",
          'Fully applied Typescript to improve code scalability, predictability and maintainability.',
          'Enhanced website loading speed by adopting Tailwind CSS to purge unused CSS, which reduced 90% of CSS file size.',
          'Assisted in building CI/CD pipeline for GCP k8s cluster for deployment, introduced husky to promote consistent coding standards, increased operational efficiency by 12%.',
          'Managed global state by using Redux saga to deal with asynchronous tasks.',
        ],
      },
      {
        subTitle: 'Web Developer',
        year: 'Jul 2020 - Apr 2021',
        organization: 'Initial Innovation Limited (SHOPAGE, ChatBird)',

        duties: [
          'Designed and developed web version of POS feature with API integration based on Ant Design library, which lead to a 10% revenue increase.',
          'Assisted in building UI components in different categories for clients to modify their website, such as banner displays, product carousels, boosted customer satisfaction rating by 23%.',
          'Collaborated with team to built a Cloud Communication Platform as a Service which allows multiple logins via multiple devices simultaneously using React and websocket.',
        ],
      },
    ],
  },
  projects: [
    {
      title: 'alfred24',
      text: 'alfref24 is a dynamic cloud-based delivery platform that allows manage orders and shipments directly from an e-commerce. Their automated systems enable couriers to make more deliveries with fewer vehicles. alfred24 provides hardware and software solutions that allow anyone to collect their deliveries any time from a smart locker or retail shop conveniently located near you. ',
      images: [
        'imgs/company/alfred24/alfred24_01.svg',
        'imgs/company/alfred24/alfred24_02.jpg',
        'imgs/company/alfred24/alfred24_03.jpg',
        'imgs/company/alfred24/alfred24_04.jpg',
        'imgs/company/alfred24/alfred24_05.jpg',
      ],
    },
    {
      title: 'Shopage',
      text: 'SHOPAGE assists customers to build website professionally. Through using clean and simple interface, everyone can build their personalized online store without any programming knowledge.',
      images: [
        'imgs/company/shopage/shopage_01.jpg',
        'imgs/company/shopage/shopage_02.jpg',
        'imgs/company/shopage/shopage_03.jpg',
        'imgs/company/shopage/shopage_04.jpg',
        'imgs/company/shopage/shopage_05.jpg',
        'imgs/company/shopage/shopage_06.jpg',
      ],
    },
    {
      title: 'Chatbird',
      text: 'Chatbird is a application which allows teams can login to the same WhatsApp account via multiple devices simultaneously for customer support using React.',
      images: [
        'imgs/company/chatbird/chatbird_01.jpg',
        'imgs/company/chatbird/chatbird_02.jpg',
        'imgs/company/chatbird/chatbird_03.jpg',
        'imgs/company/chatbird/chatbird_04.jpg',
        'imgs/company/chatbird/chatbird_05.jpg',
        'imgs/company/chatbird/chatbird_06.jpg',
      ],
    },
  ],
} as const
export default data
