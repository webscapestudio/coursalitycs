import s from "./Modal.module.scss";
import Modal from "react-modal";
import { useState } from "react";
import CloseSvg from "./close-icon.svg";
import { Input, Succes } from "../../ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export const ModalWrapper = ({
  isModalOpen,
  setIsModalOpen,
  setServiceName,
  serviceName,
}) => {
  const [isSend, setIsSend] = useState(false);
  const schema = yup
    .object()
    .shape({
      email: yup.string().required().email(),
      name: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await axios
      .post("https://ca-production.coursalytics.com/api/request/info", data)
      .then(setIsSend(true));
    // .then(setIsModalOpen(false));
  };

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2 className={s.title}>Apply now</h2>
      <CloseSvg onClick={closeModal} className={s.close__icon} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={s.input}
          placeholder="Name"
          errorText={errors.name?.message}
          form={{ ...register("name") }}
        />
        <Input
          className={s.input}
          placeholder="Email"
          type="email"
          errorText={errors.email?.message}
          form={{ ...register("email") }}
        />
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
      {isSend && <Succes className={s.succes} />}
    </Modal>
  );
};
