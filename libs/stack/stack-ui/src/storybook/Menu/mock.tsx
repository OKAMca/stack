import type { TMenuItemProps } from '../../components/Menu/interface'

export const items: TMenuItemProps[] = [
  {
    'id': '1',
    'target': null,
    'path': '#shows',
    'label': 'Open 2nd Level Menu Label',
    'children': <div>Open 2nd Level Menu</div>,
    'aria-label': 'Open 2nd Level Menu Aria',
    'childItems': [
      {
        id: 'abc',
        target: null,
        path: '/',
        label: '2nd level link',
      },
      {
        id: '7',
        target: null,
        path: '#subPanel1',
        label: 'Open 3rd Level Menu',
        childItems: [
          {
            id: '8',
            target: null,
            path: '/',
            label: '3rd level link',
          },
          {
            id: '9',
            target: null,
            path: '#subPanel2',
            label: 'Open 4th Level Menu',
            childItems: [
              {
                id: '10',
                target: null,
                path: '/',
                label: '4th level link',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '8',
    target: null,
    path: '#brands',
    label: 'Brands',
  },
  {
    id: '2',
    target: null,
    path: '/',
    label: 'Today’s Lede Stories',
  },
  {
    id: '3',
    target: null,
    path: '/',
    label: 'News',
  },
  {
    id: '4',
    target: null,
    path: '/',
    label: 'Trailers and screeners',
  },
  {
    id: '5',
    target: null,
    path: '/',
    label: 'Team',
  },
  {
    id: '6',
    target: null,
    path: '#search',
    label: 'Search the lede',
  },
]
