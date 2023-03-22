import Head from "next/head";
import Image from "next/image";


const SnailMail = () => {
  return (
    <>
      <Head>
        <title>John van der Harst</title>
        <meta
          name="keywords"
          content="contact, address, email, outreach"
        />
      </Head>
      <div className="johns-custom-masthead">
      <div id="mobile-version" className="mt-2 px-4 lg:px-0">
        <div className="lg:hidden pb-4">
          <div className="standard-font-1 standard-font-color-1 text-3xl">
            {"John van der Harst"}
          </div>
          <div className="standard-font-2 standard-font-color-1 text-xl">
            {""}
          </div>
        </div>

        <div className="lg:hidden">
          <Image
            className="opacity-80"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={173}
            width={449}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
      </div>

      <div
        id="desktop-version"

        // the "gap" in this line below controls the space between the logo
        // and the "Accomplishments" title.
        className="lg:pt-16 lg:pb-11 lg:grid grid-cols-2 items-center"
      >
        <div className="hidden lg:inline">
          <Image
            className="opacity-80"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={173}
            width={449}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
        <div className="hidden lg:inline">
          <div className="standard-font-1 standard-font-color-1 john-contact-title-block">
            {"John van der Harst"}
          </div>
          <div className="mail-logo-under-johns-name">
            <center className="link-icon-set pb-8 pt-4">
              <Image
                className="duration-500 ease-in-out mx-2 sm:mx-8 opacity-40 transition"
                src={`/images/external-link-icons/email.svg`}
                alt={"Email icon"}
                height={50}
                width={100}
              />
            </center>
          </div>
          <div className="standard-font-2 standard-font-color-1 text-2xl">
            {""}
          </div>
        </div>
      </div>
      <style jsx>{`
        .john-contact-title-block {
          font-size: 2.4rem;
          transform: translateX(5.0rem)
        }
      `}</style>
    </div>
      <div className="pt-6 border-b-2 border-zinc-700"></div>
      <div>
        <div className="text-set pb-80 md:ml-0 mx-4 md:mr-80">
          <div className="address-set text-2xl tracking-wide">
            <div>
              To minimize resource consumption, including time, please send only
              respectful, personal communication to:
            </div>{" "}
            <br></br>
            <div>
              <b>Mailing Address</b>:{" "}
            </div>
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">
              <div>John van der Harst</div>
              <div>1407 Roberts Ave.</div>
              <div>Nashville, TN 37206</div>
              <div>U.S.A.</div>
            </div>
            <div className="mt-20">
              <b>Telephone</b>, preferably as close as possible to 9:00-11:00 pm
              Central U.S. time (CST):
            </div>
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">
              <div>615-227-3499</div>{" "}
            </div>
            <div className="mt-20">
              <b>Email</b>, note that John often does not read his email for
              extended periods, in order to think more thoroughly:
            </div>
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">
              <div>
                <a href="mailto:johnvanderharst@gmail.com">
                  johnvanderharst@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnailMail;
