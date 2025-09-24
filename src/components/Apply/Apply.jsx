import { React, useEffect } from "react";
import Lottie from 'lottie-react'; //needed for applicationClosedGIF to run
import applicationClosedGIF from '../../images/assets/applicationClosedGIF.json'
import ApplyForm from "./applyForm";

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const applicationClosed = true;
  return (
    <div className="Apply">
      <section className="Apply-section">
        <div className="Apply-content">
          {applicationClosed ? (
            <div className="w-auto xl:w-width h-[85vh] mx-auto flex flex-col items-center justify-center ">
              <div className="md:w-[700px] px-4">
                <Lottie animationData={applicationClosedGIF} loop={true} autoplay={true} />
              </div>
              <p className="px-2 text-center text-lg md:text-2xl font-bold uppercase">
                Application for this year has been closed!<br />Stay tunned to get notified!!
              </p>
            </div>
          ) : (
            <div className="Apply-form p-2 flex flex-col">
              <ApplyForm apiKey={process.env.REACT_APP_SPREADSHEET_API_KEY} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}