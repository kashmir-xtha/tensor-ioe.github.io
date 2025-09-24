import React from "react";

const ContactUsMap = () => {
  return (
    <>
      <h1 className='text-4xl font-extrabold text-center md:mt-5'>FIND US</h1>
      <iframe
        title="IOE Thapathali Campus Map"
        className="sm:w-[500px] md:w-[600px] xl:w-[700px] aspect-video mx-auto mb-10 border-2 sm:border-[5px] border-blue-500 shadow-boxShadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7527841083115!2d85.31625117617291!3d27.694034676190054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ae08c068d9%3A0x475bed1f66d060c!2sIOE%2C%20Thapathali%20Campus!5e0!3m2!1sen!2snp!4v1720262496739!5m2!1sen!2snp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactUsMap;
