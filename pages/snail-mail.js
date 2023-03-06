import Image from "next/image";

const SnailMail = () => {
  return (
    <>
      <center className="link-icon-set py-20">
        <p className="tracking-wide font-semibold text-stone-600">John van der Harst</p>
        <Image
          className="duration-500 ease-in-out mx-2 sm:mx-8 opacity-40 transition"
          src={`/images/external-link-icons/email.svg`}
          alt={"Email icon"}
          height={50}
          width={100}
        />
      </center>
      <div>
        <div className="text-set pb-80">
          <h2 className="title-note-set text-center pb-8 text-3xl md:text-4xl">
            Letters to John can be sent to the following address:
          </h2>
          <div className="address-set text-2xl ml-4 sm:ml-20 tracking-wide">
            <div>1407 Roberts Ave.</div>
            <div>Nashville, TN</div>
            <div>37206-2524 </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnailMail;
