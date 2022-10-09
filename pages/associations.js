import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";
import Image from "next/image";

const externalLinkIconStyles = "duration-300 ease-in-out hover:opacity-90 mx-2 opacity-40 active:translate-x-10 active:opacity-0 transition";

const Associations = () => {
  return (
    <>
      <Head>
        <title>UCS Associations</title>
        <meta
          name="keywords"
          content="associations, partnerships, fellowship, affiliation, alliance"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Associations"}
          subtitle={
            "Our connections with others are important parts of our history"
          }
        />
      </div>
      <div className="associations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
        Memberships
      </div>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg tracking-wide">
        <div>
          <b>Nashville Peace and Justice Center</b>, 2015-present.
        </div>
      </div>
      <center className="link-icon-set">
        <a
          href="https://www.nashvillepeacejustice.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={externalLinkIconStyles}
            src={`/images/external-link-icons/home.svg`}
            alt={"Home icon"}
            height={50}
            width={100}
          />
        </a>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="associations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
        Donors
      </div>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg tracking-wide">
        <div>
          <b>John van der Harst</b>, 2017-present.
        </div>
        <center>
          <a
            href="mailto:john@urbancruiseship.org"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={externalLinkIconStyles}
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
      </div>
      <br></br>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg tracking-wide">
        <div>
          <b>Nashville Peace and Justice Center</b>, 2015. Urban Cruise Ship was an NPJC project in 2015.
        </div>
        <center>
          <a
            href="https://www.nashvillepeacejustice.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={externalLinkIconStyles}
              src={`/images/external-link-icons/home.svg`}
              alt={"Home icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="associations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
        Clients
      </div>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg tracking-wide">
        <div>
          <b>Tennessee Environmental Council</b>, 2016. Full cost of solid waste disposal for Davidson County, TN.
        </div>
        <center>
          <a
            href="https://www.tectn.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={externalLinkIconStyles}
              src={`/images/external-link-icons/home.svg`}
              alt={"Home icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <style jsx>{`
        .associations-custom-text-size {
          font-size: 2.4rem;
        }
      `}</style>
    </>
  );
};

export default Associations;
