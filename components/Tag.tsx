import Link from "next/link";
import { slug } from "github-slugger";
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <span className="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-xs">
      {text.split(" ").join("-")}
    </span>
  );
};

export default Tag;
