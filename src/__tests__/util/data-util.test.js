import { extractTitle, wpJsonToProps } from '../../util/data-util';

describe('Data Utilities', () => {
  describe('extractTitle', () => {
    it('returns title string correctly', () => {
      const title = {
        rendered:
          'Building the Right Tools For Super-Effective Remote Collaboration',
      };

      const result = extractTitle(title);

      expect(result).toStrictEqual(title.rendered);
    });

    it('returns empty string if incorrect WP title is given', () => {
      const title =
        'Building the Right Tools For Super-Effective Remote Collaboration';

      const result = extractTitle(title);

      expect(result).toStrictEqual('');
    });
  });

  describe('wpJsonToProps', () => {
    it('works correctly', () => {
      const result = wpJsonToProps(mockCwp);

      // Should have relevant props
      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('content');
      expect(result).toHaveProperty('image_preview');
      expect(result).toHaveProperty('video_preview');
      expect(result).toHaveProperty('preview_position');
      expect(result).toHaveProperty('cta');

      // Should NOT have irrelevant props
      expect(result).not.toHaveProperty('date');
      expect(result).not.toHaveProperty('guid');
      expect(result).not.toHaveProperty('slug');
    });

    it('returns empty object if incorrect WP data object is given', () => {
      const result = wpJsonToProps();

      expect(result).toMatchObject({});
    });
  });
});

const mockCwp = {
  id: 43,
  date: '2020-07-19T16:32:59',
  date_gmt: '2020-07-19T16:32:59',
  guid: {
    rendered: 'http://localhost:8080/?post_type=contentwithpreview&#038;p=43',
  },
  modified: '2020-07-20T02:59:08',
  modified_gmt: '2020-07-20T02:59:08',
  slug: 'now-weve-opened-up-these-tools-to-data-teams-everywhere',
  status: 'publish',
  type: 'contentwithpreview',
  link:
    'http://localhost:8080/contentwithpreview/now-weve-opened-up-these-tools-to-data-teams-everywhere/',
  title: {
    rendered:
      'Building the Right Tools For Super-Effective Remote Collaboration',
  },
  template: '',
  acf: {
    content:
      "It's a new home for data teams — where diverse data sources, from satellite images to your neat CSVs, co-exist with all the tech and tools you love, including your data lakes and Jupyter notebooks. All working seamlessly with you and your team.",
    image_preview: {
      ID: 52,
      id: 52,
      title: '34a6cc6b41df287b9f79d4bd4dc3ba4a',
      filename: '34a6cc6b41df287b9f79d4bd4dc3ba4a.png',
      filesize: 610063,
      url:
        'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a.png',
      link:
        'http://localhost:8080/contentwithpreview/now-weve-opened-up-these-tools-to-data-teams-everywhere/34a6cc6b41df287b9f79d4bd4dc3ba4a/',
      alt: '',
      author: '1',
      description: '',
      caption: '',
      name: '34a6cc6b41df287b9f79d4bd4dc3ba4a',
      status: 'inherit',
      uploaded_to: 43,
      date: '2020-07-20 02:58:30',
      modified: '2020-07-20 02:58:30',
      menu_order: 0,
      mime_type: 'image/png',
      type: 'image',
      subtype: 'png',
      icon: 'http://localhost:8080/wp-includes/images/media/default.png',
      width: 1600,
      height: 1200,
      sizes: {
        thumbnail:
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a-150x150.png',
        'thumbnail-width': 150,
        'thumbnail-height': 150,
        medium:
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a-300x225.png',
        'medium-width': 300,
        'medium-height': 225,
        medium_large:
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a-768x576.png',
        'medium_large-width': 768,
        'medium_large-height': 576,
        large:
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a-1024x768.png',
        'large-width': 1024,
        'large-height': 768,
        '1536x1536':
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a-1536x1152.png',
        '1536x1536-width': 1536,
        '1536x1536-height': 1152,
        '2048x2048':
          'http://localhost:8080/wp-content/uploads/2020/07/34a6cc6b41df287b9f79d4bd4dc3ba4a.png',
        '2048x2048-width': 1600,
        '2048x2048-height': 1200,
      },
    },
    video_preview: '',
    preview_position: 'right',
    cta: {
      title: 'Get Started',
      url: '#',
      target: '',
    },
  },
  _links: {
    self: [
      {
        href: 'http://localhost:8080/wp-json/wp/v2/contentwithpreview/43',
      },
    ],
    collection: [
      {
        href: 'http://localhost:8080/wp-json/wp/v2/contentwithpreview',
      },
    ],
    about: [
      {
        href: 'http://localhost:8080/wp-json/wp/v2/types/contentwithpreview',
      },
    ],
    'wp:attachment': [
      {
        href: 'http://localhost:8080/wp-json/wp/v2/media?parent=43',
      },
    ],
    curies: [
      {
        name: 'wp',
        href: 'https://api.w.org/{rel}',
        templated: true,
      },
    ],
  },
};
