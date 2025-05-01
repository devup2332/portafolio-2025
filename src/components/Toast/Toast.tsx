import CheckIcon from "../Icons/CheckIcon";
import ErrorIcon from "../Icons/ErrorIcon";
import WarnIcon from "../Icons/WarnIcon";

type Props = {
  text: string;
  type: "success" | "error" | "info";
};
const Toast: React.FC<Props> = ({ text, type }) => {
  const icons = {
    success: <CheckIcon className="text-green-500 fill-current" />,
    error: <ErrorIcon className="text-red-500 fill-current" />,
    info: <WarnIcon className="text-yellow-500 fill-current" />,
  };
  const Icon = icons[type];
  return (
    <div className="flex gap-4 items-center py-4 px-6 w-full max-w-[380px] rounded-xl bg-bg-2 border-[1px] border-border-1">
      <div className="toast-header">{Icon}</div>
      <div className="text-sm lg:text-base">{text}</div>
    </div>
  );
};

export default Toast;
