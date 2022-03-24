import type { NextPage } from "next";
import Header from "../components/header/index";
import Contents from "../components/contents/index";
import Footer from "components/footer/index";

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["allProduct"], ({) => fetchAllProduct());

//   console.log(queryClient);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default Home;
