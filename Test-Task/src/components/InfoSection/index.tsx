import { Sight } from "@/types/Sight";

interface Props {
  info: Sight;
}

const index = ({ info }: Props) => {
  return <div>{info.address}</div>;
};

export default index;
