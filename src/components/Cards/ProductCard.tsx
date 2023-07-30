import { useState } from "react";
import ProductModal from "../Modal/ProductModal";

const ProductCard = (props: {
  img: string;
  title: string;
  body: string;
  specs: string[] | string;
  features: string[];
}) => {
  // state for read more modal popup
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="max-w-sm min-h-[395px] border rounded-lg shadow-md bg-slate-100 border-slate-400/50 my-2 md:m-0 hover:cursor-pointer hover:shadow-xl transition duration-150"
      onClick={() => setShowModal(!showModal)}
    >
      <div className="bg-white rounded-t-lg flex justify-center items-center">
        <img
          className="rounded-t-lg h-[220px] object-contain"
          src={props.img}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-600 line-clamp-3">
          {props.body}
        </p>
      </div>
      {showModal ? (
        <ProductModal
          {...props}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      ) : null}
    </div>
  );
};

export default ProductCard;
