import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import Head from "next/head";
import {getCar, getCars, Params, Props} from "@/pages/cars/shared/shared";
import Car from "@/pages/cars/shared/Car";

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  return await getCar(context);
}

export const getStaticPaths = async () => {
  const {props} = await getCars();

  const paths = props?.cars?.map((id) => ({
    params: {id}
  }));

  return {paths, fallback: false};
};

const CarSsg = ({car}: Props) => {
  const router = useRouter();
  const {id} = router.query;

  return (
      <>
        <Head>
          <title>{id}</title>
        </Head>
        <Car car={car}/>
      </>
  );
};

export default CarSsg;
