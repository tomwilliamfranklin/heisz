import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      repo: "hello world",
    },
  };
};

function Contact(props: any) {
  console.log("ew", props.repo);

  return (
    <div className="min-h-[100vh] pt-[150px] lg:pt-[0px] pb-[150px]">
      {" "}
      <div className="wood-texture" />
      <section className="flex flex-col w-screen text-center max-w-[2000px] gap-y-10 p-5 lg:p-20 items-center ml-auto mr-auto">
        <h2>Get ready to embark on a musical adventure with us!</h2>
        <h5 className=" text-secondary"></h5>
        <div className="flex flex-1 w-full justify-center cutout-back basis-[800px] max-w-full flex-wrap gap-x-20 gap-y-20">
          <div className="text-box flex-[2] basis-[700px] cutout-3 lg:max-w-[800px] bg-whiteColor text-blackColor">
            <h2 className=" font-bold">How to make an enquiry</h2>
            <h5 className=" text-blackColorSecondary">
              We appreciate your interest in our services!{" "}
              <span className=" font-bold">
                To order your dream instrument,{" "}
              </span>{" "}
              simply give us a call or send us an email. <br /> <br />
              Our dedicated team will guide you personally, ensuring a tailored
              and seamless journey from inquiry to delivery.
              <br /> <br />
              For scheduled appointments or order collection, visit our workshop
              in scenic Northamptonshire, conveniently located near Kettering,
              just off the A14.
            </h5>
            <ul>
              <h5>
                Phone Number: <span className=" font-bold">118 118 72525</span>
              </h5>
              <h5>
                Email:{" "}
                <span className=" font-bold">
                  farmiloeinstruments@gmail.com
                </span>
              </h5>
            </ul>
            <h5>
              Full Address:{" "}
              <span className=" font-bold">
                Unit 2a, Manor House Farm, Woodford, Kettering, NN14 4ES
              </span>
            </h5>
            <h5 className=" text-blackColorSecondary">
              We can't wait to hear from you!
            </h5>
            <h6 className=" text-blackColorSecondary">
              Please do not visit the workshop without a scheduled appointment*
            </h6>
          </div>
          <div className="flex-1 basis-[450px] flex items-center">
            <iframe
              title="Location of Farmiloe Instruments"
              className=" w-full cutout-2"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=52.380756,%20-0.581918+(Farmiloe%20Instruments)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure acres/hectares on map
              </a>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
