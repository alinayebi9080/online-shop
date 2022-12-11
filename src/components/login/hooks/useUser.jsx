import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../util/axiosInstance";
import { userKeys } from "../../../util/reactQuery/constants";
import { clearStoredUser, getStoredUser } from "../../../util/storage";

const profileCall = async () => {
  const { data } = await axiosInstance.get("/user/profile");
  return data;
};

const useUser = () => {
  const { data: profile } = useQuery({
    queryKey: userKeys.profile,
    queryFn: profileCall,
    placeholderData: getStoredUser(),
    onError: (e) => {
      if (e.response.status === 403) {
        clearStoredUser();
      }
    },
  });

  return { profile };
};

export default useUser;
