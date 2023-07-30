import { useState } from "react";
import ApplicationModal from "../Modal/ApplicationModal";

const ApplicationCard = (props: {
  img: string;
  title: string;
  body: string;
  application: string[] | string;
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[280px] xl:w-[300px]">
      <img
        className="h-[230px] max-w-full rounded-lg object-cover hover:cursor-pointer hover:scale-105 active:scale-95 transition duration-200"
        src={props.img}
        alt=""
        onClick={() => setShowModal(!showModal)} 
      />
    {
      showModal ? (
        <ApplicationModal {...props} setShowModal={setShowModal} showModal={showModal} />
      ) : null
    }
    </div>   
  );
};

export default ApplicationCard;
