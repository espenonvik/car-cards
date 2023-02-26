import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import Head from "next/head";
import {getCar, Params, Props} from "@/pages/cars/shared/shared";
import Car from "@/pages/cars/shared/Car";

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  return await getCar(context);
}

const CarSsr = ({car}: Props) => {

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

export default CarSsr;
