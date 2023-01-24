// https://youtu.be/rlcDpO_iDBU

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Founded in 2014, Urban Cruise Ship presents environmental solutions" />
        <link rel="icon" href="/../images/ufavicon.ico" />
        <link href='https://fonts.cdnfonts.com/css/arial-rounded-mt-bold' rel='stylesheet' />
        <link href="https://fonts.cdnfonts.com/css/arial" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
