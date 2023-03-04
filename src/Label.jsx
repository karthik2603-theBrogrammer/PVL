import React from "react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";
const Label = ({ text }) => {
  return (
    <div className="m-[10px] rounded-full bg-slate-400	w-[200px] flex items-center justify-center" >
      {text}
    </div>
  );
};

export default Label;
