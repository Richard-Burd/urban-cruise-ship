import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Accomplishments = () => {
    return (
        <>
          <Head>
            <title>UCS Accomplishments</title>
            <meta name="keywords" content="accomplishments, credentials, production, realization" />
          </Head>
          <div>
        <NavbarTitleBlock
          title={"Accomplishments"}
          subtitle={
            "John will think of a good subtitle for this accomplishments page."
          }
        />
      </div>
        </>
      );
}
 
export default Accomplishments;