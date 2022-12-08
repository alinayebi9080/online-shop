import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import BaseModal from "../base/BaseModal";

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <>
      {isFetching || isMutating ? (
        <BaseModal>
          <div>LOADING</div>
        </BaseModal>
      ) : null}
    </>
  );
};

export default Loading;
