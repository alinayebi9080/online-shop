import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../util/axiosInstance";
import { userKeys } from "../../../util/reactQuery/constants";
import { getStoredUser } from "../../../util/storage";

const profileCall = async () => {
  const { data } = await axiosInstance.get("/user/profile");
  return data;
};

const useUser = () => {
  const { data: profile } = useQuery({
    queryKey: userKeys.profile,
    queryFn: profileCall,
    placeholderData: getStoredUser(),
  });

  return { profile };
};

export default useUser;
