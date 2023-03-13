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
        
          <div className="address-set text-2xl ml-4 sm:ml-20 tracking-wide">
            <div>To minimize resource consumption, including time, please send only respectful, personal communication to:</div> <br></br>
            
            <div><b>Mailing Address</b>: </div>
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">

              <div>John van der Harst</div>
              <div>1407 Roberts Ave.</div>
              <div>Nashville, TN 37206</div>
              <div>U.S.A.</div>
            </div>
            <div className="mt-20"><b>Telephone</b>, preferably as close as possible to 9:00-11:00 pm Central U.S. time (CST):</div>
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">
              <div>615-227-3499</div> </div>
              <div className="mt-20"><b>Email</b>, note that John often does not read his email for extended periods, in order to think more thoroughly:</div> 
            <div className="ml-6 mt-4 p-4 bg-slate-200 inline-block max-w-max">
              <div><a href="mailto:johnvanderharst@gmail.com">johnvanderharst@gmail.com</a></div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnailMail;
