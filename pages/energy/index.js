import Head from "next/head";
const data = require("../../data/multi_solutions.json")


const Energy = () => {
    // Talk to Chris bloom before you try any of this below
    console.log(data[0].topics)
    // iterate over the data's array & find the object whith the key of name with the value of "energy"
    // display the intro on the page (console.log(data[0].intro))

    // once in the energy object, iterate over the topics array & 
    // display the topics on the page {console.log(data[0].topics)}
    // create buttons for those topics
    return (
        <>
          <Head>
            <title>UCS | Energy Site</title>
            <meta name="keywords" content="energy, energy research, carbon pricing, solar, wind, biomass, nuclear, coal" />
          </Head>
          <div className="m-12 p-12 text-8xl">
            this is the &quot;Energy&quot; specialized site
          </div>
        </>
      );
}
 
export default Energy;