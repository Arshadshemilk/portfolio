import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: '',
    href: '',
  },
  {
    social: 'email',
    link: 'arshadshemilk@gmail.com',
    href: 'mailto:arshadshemilk@gmail.com',
  },
  {
    social: 'github',
    link: 'arshadshemilk',
    href: 'https://github.com/arshadshemilk',
  },
  {
    social: 'linkedin',
    link: 'arshdshemilk',
    href: 'https://',
  },
  {
    social: 'twitter',
    link: 'arshadshemilk',
    href: 'https://www.twitter.com/',
  },
  {
    social: 'instagram',
    link: 'arshuu__u',
    href: 'https://www.instagram.com/arshuu__u',
  },
/*  {
    social: 'polywork',
    link: 'nitinranganath',
    href: 'https://www.polywork.com/nitinranganath',
  },*/
  {
    social: 'telegram',
    link: 'iamnitinr',
    href: 'https://t.me/weirdo',
  },
 /* {
    social: 'codepen',
    link: 'nitinranganath',
    href: 'https://codepen.io/itsnitinr',
  },
  {
    social: 'codesandbox',
    link: 'itsnitinr',
    href: 'https://codesandbox.io/u/itsnitinr',
  },*/
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
