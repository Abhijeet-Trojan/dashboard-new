import prImage from './image-32.png';
import sqImage from './sqImage.png';


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProjectImage}
      alt="order-item"
    />
  </div>
);


export const links = [
    {
      title: 'Projects',
      links: [
        {
          name: 'my-projects',
          img: <prImage />
        },
      ],
    },
  
    {
      title: 'Campaigns',
      links: [
        {
          name: 'my-campaigns',
          img: prImage,
        },
        {
          name: 'campaigns-reports',
          img: prImage,
        },
      ],
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'project-demo-videos',
                img: prImage,
            },
            {
                name: 'knowledge-base',
                img: prImage,
            },
            {
                name: 'support',
                img: prImage,
            },
        ]
    }
  ];

export const projectData = [
  {
    ProjectID: 1,
    ProjectTitle: 'Remarkable Template',
    LastEdited: '3 hours',
    CreatedTime: '21 January, 2023',
    ProjectImage: sqImage,
  },
  {
    ProjectID: 2,
    ProjectTitle: 'Onboarding Process Video',
    LastEdited: '2 days',
    CreatedTime: '22 January, 2023',
    ProjectImage: sqImage,
  },
  {
    ProjectID: 3,
    ProjectTitle: 'Interactive User Process',
    LastEdited: '30 days',
    CreatedTime: '25 December, 2022',
    ProjectImage: sqImage,
  },
  {
    ProjectID: 4,
    ProjectTitle: 'Support Onboarding Process',
    LastEdited: '7 hours',
    CreatedTime: '20 January, 2022',
    ProjectImage: sqImage,
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];