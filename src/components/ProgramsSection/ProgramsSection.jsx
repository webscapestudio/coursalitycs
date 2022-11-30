import { useState } from "react";
import { Button, Title } from "../../ui";
import { ModalWrapper } from "../Modals/Modal";
import { ProgramItem } from "./ProgramItem";
import s from "./ProgramsSection.module.scss";

export const ProgramsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  return (
    <section className={s.section}>
      <div className="container-xl">
        <Title tag="h2" className={s.title}>
          Choose only what you <span>need</span>
        </Title>
        <div className={s.wrap}>
          <ProgramItem
            toptext="Assistance in determining educational needs"
            price="750$"
            list={[
              "Detailed analysis of your professional experience",
              "Passing the Strengths test",
              "Conducting coaching sessions based on the results of the test",
              "Identifying specific areas in which you need to develop",
              "Duration 1 week",
            ]}
            description="This service does not require any initial competencies"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

          <ProgramItem
            active
            toptext="Selection of programs"
            price="500$"
            list={[
              "Creating an individual development plan",
              "A specific list of recommended educational programs",
              "Recommendations of mentors, coaches, books and other development tools",
              "Duration 1 week",
            ]}
            description="For this service, you must already have an understanding of your strengths and areas in which education will provide value"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

          <ProgramItem
            toptext="Organization of admission "
            price="10–15%"
            subprice="of the program cost"
            list={[
              "Preparation of the necessary documents",
              "Coaching sessions to help organize participation in the program ",
              "Consultations and video calls with your personal manager ",
              "Conducting research to produce outstanding resumes and motivation letters ",
            ]}
            description="Assistance in determining educational needs and Selection of programs are included"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>

      <ModalWrapper
        isModalOpen={isModalOpen}
        serviceName={serviceName}
        setServiceName={setServiceName}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};
