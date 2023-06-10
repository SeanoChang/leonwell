const ApplicationModal = (props: {
  img: string;
  title: string;
  body: string;
  application: string[] | string;
  model: string;
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
}) => {
  return (
        <div className="fixed top-0 left-0 z-50 w-[100vw] h-[100vh] bg-gray-400/50 flex flex-col justify-center items-center"
            onClick={() => props.setShowModal(!props.showModal)}
        >
          <div className="bg-slate-50 flex flex-col justify-around items-start drop-shadow-xl rounded-lg p-4 sm:p-8 w-[90vw] md:w-[70vw] xl:w-[50vw] max-h-[70vh]">
            <h5 className="mb-2 text-xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {props.title}
            </h5>
            <p className="mb-1 sm:mb-3 font-normal text-gray-900 text-sm sm:text-lg">{props.body}</p>
            {typeof props.application === "string" ? (
              <p className="mb-3 font-normal text-gray-500 text-lg">
                {props.application}
              </p>
            ) : (
              props.application.map((app, index) => (
                <p key={index} className="mb-1 sm:mb-3 font-normal text-gray-500 text-sm sm:text-lg">
                  {app}
                </p>
              ))
            )}
            <p className="font-semibold text-gray-900 text-sm sm:text-lg">{props.model}</p>
          </div>
        </div>
      );
    
};

export default ApplicationModal;
