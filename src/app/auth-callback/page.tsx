/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  const serachParams = useSearchParams();
  const origin = serachParams.get("origin");
};

export default page;
