export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Gallery',
      url: '/gallery',
    },
    {
        title: 'Gallery',
        url: '/services',
        submenu: [
          {
            title: 'JANGRAD2023',
            url: 'jangrads',
          },
          {
            title: 'GradCeremony ',
            url: 'gradceremony',
          },
          {
            title: 'Lovely Students',
            url: 'StudentGallery',
          },

          {
            title: 'Feedback',
            url: '',
            submenu: [
              {
                title: 'Students Feedback',
                url: 'StudentFeedback',
              },
              {
                title: 'Parents Feedback',
                url: 'ParentsFeedback',
              },
            ],
          },
        ],
      },
  ];