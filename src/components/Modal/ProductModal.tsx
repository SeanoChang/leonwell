const ProductModal = (props: {
  img: string;
  title: string;
  body: string;
  specs: string[] | string;
  features: string[];
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
}) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-[100vw] h-[100vh] bg-gray-400/50 flex flex-col justify-center items-center"
            onClick={() => props.setShowModal(!props.showModal)}
        >
          <div className="bg-white flex flex-col justify-around items-start drop-shadow-xl rounded-lg p-8 w-[90vw] md:w-[70vw] xl:w-[50vw] max-h-[90vh]">
        <div className="rounded-t-lg flex justify-center items-center">
          <img
            className="rounded-t-lg h-[200px] sm:h-[220px] object-contain"
            src={props.img}
            alt=""
          />
        </div>
        <div className="sm:p-4">
          <h5 className="mb-2 sm:mb-4 text-xl sm:text-3xl font-bold tracking-tight text-gray-800">
            {props.title}
          </h5>
          <p className="ml-1 mb-1 sm:mb-3 font-normal text-gray-600 text-sm sm:text-lg">{props.body}</p>
          {typeof props.specs === "string" ? (
            <p className="mb-2 font-normal text-gray-600 text-sm sm:text-lg">
              {props.specs}
            </p>
          ) : (
            props.specs.map((spec, index) => (
              <p key={index} className="ml-1 mb-1 sm:mb-3 font-normal text-gray-600 text-sm sm:text-lg">
                {spec}
              </p>
            ))
          )}
        </div>
        <h5 className="sm:ml-4 mb-2 text-xl sm:text-3xl font-bold tracking-tight text-gray-800">
          特性
        </h5>
        <ul className="sm:p-4 ml-6 sm:ml-8 list-disc">
          {props.features.map((feature, index) => (
            <li key={index} className="mb-3 font-normal text-gray-600 text-sm sm:text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductModal;
