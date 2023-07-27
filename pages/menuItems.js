export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Contact',
      url: '/Contact',
    },
    {
      title: 'About',
      url: '/About',
    },
    {
      title: 'Gallery',
      url: '/Gallery',
    },
    {
        title: 'Gallery',
        url: '/services',
        submenu: [
          {
            title: 'JANGRAD2023',
            url: 'Jangrads',
          },
          {
            title: 'GradCeremony ',
            url: 'Gradceremony',
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