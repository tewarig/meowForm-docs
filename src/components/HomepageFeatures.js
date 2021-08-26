import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use and well documentated',
    Svg: 'https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629884425/kitekat-17_ipr2uy.png',
    description: (
      <>
      Meow Form is easy to use and well document if you get stuck at any place you can contract @oyeTewari
     
      </>
    ),
  },
  {
    title: 'Works perfect on all platforms and framework',
    Svg: 'https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629030255/kitekat-cat-19_fplqbr.png',
    description: (
      <>
      Meow Form supports all frameworks and platforms all you need to do is make a post request :)
      </>
    ),
  },
  {
    title: 'Free Forever',
    Svg: 'https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629017773/kitekat-19_1_nsknib.png',
    description: (
      <>
       We work on Donations , not subscriptions . If you want love meowForms or cat free to support us :)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        < img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
