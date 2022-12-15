import BaseModal from "./BaseModal";

const UpdateDialog = () => {
  return (
    <BaseModal id="update-service-worker-dialog" className="hidden">
      <div className="bg-white p-5 rounded">
        <p>نسخه جدیدی آماده است</p>
        <button id="update-service-worker-btn">بروزرسانی</button>
      </div>
    </BaseModal>
  );
};

export default UpdateDialog;
