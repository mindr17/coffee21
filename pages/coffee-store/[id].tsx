import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps: { params: any; }) {
  const params = staticProps.params;
  console.log('params: ', params);
  
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" }, },
      { params: { id: "1" }, },
      { params: { id: "300" }, },
    ],
    fallback: false,
  };
}

const CoffeeStore = (props: any) => {
  const router = useRouter();
  console.log('router: ', router);

  console.log('props: ', props);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  )
}

export default CoffeeStore;
