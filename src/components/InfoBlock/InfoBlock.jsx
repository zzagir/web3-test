import { useState } from "react";
import OpenInfoBlock from "./OpenInfoBlock";
import CloseInfoBlock from "./CloseInfoBlock";

const InfoBlock = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <div onClick={() => setIsOpen(!isOpen)}>
          <OpenInfoBlock />
        </div>
      ) : (
        <div onClick={() => setIsOpen(!isOpen)}>
          <CloseInfoBlock />
        </div>
      )}
    </>
  );
};

export default InfoBlock;
