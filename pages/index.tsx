import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';
import Card from '../components/card';

import coffeeStoresData from '../data/coffee-stores.json';

export async function getStaticProps(context: any) {
  console.log('getStaticProps');

  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
};

const Home: NextPage = (props: any) => {
  const handleOnBannerBtnClick = () => {
    console.log('hi banner button!');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Commoiseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        {
          props.coffeeStores.length > 0 && 
            <>
              <h2 className={styles.heading2}>
                Toronto stores
              </h2>
              <div className={styles.cardLayout}>
                {
                  props.coffeeStores.map((coffeeStore: { name: any; imgUrl: any; id: any; }) => {
                    return (
                      <Card 
                        key={coffeeStore.id}
                        name={coffeeStore.name}
                        imgUrl={coffeeStore.imgUrl}
                        href={`/coffee-store/${coffeeStore.id}`}
                      />
                    )
                  })
                }
              </div>
            </>
        }
      </main>
    </div>
  )
}

export default Home;
