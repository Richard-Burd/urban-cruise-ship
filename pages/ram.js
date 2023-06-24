import Head from "next/head";
import Image from "next/image";

// in order to render the image below, we need something like this in next.config.mjs:

// images: {
//   domains: ['web-cyber.jyeartstudio.com', 'res.cloudinary.com'],
//   loader: 'cloudinary',
//   path: 'https://res.cloudinary.com/dwd7agrj5/image/upload',
// },


const Ram = () => {
  return (
    <>
      <Head>
        <title>RAM</title>
        <meta
          name="keywords"
          content="Recycling Advocates of Middle Tennessee, RAM"
        />
      </Head>
      <div>
        <div className="first-column">This is the New RAM Website</div>
        <Image
          src="https://res.cloudinary.com/dwd7agrj5/image/upload/v1687545351/ram/RAM_Logo.1_n1vfcq.svg"
          alt="SVG Image"
          width={157.612}
          height={130.464}
        />
      </div>
    </>
  );
};

export default Ram;
