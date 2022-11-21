import s from "./Faq.module.scss";
import { Accordition, AccorditionItem, Title } from "../../ui";
import cn from "classnames";
import ChevronIcon from "./chevron.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const Faq = ({ data }) => { 
  return (
    <section className={s.faq}>
      <div className="container">
        <Title tag="h2" className={s.maintitle}>
          Questions and answers
        </Title>

        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          {data.map((item) => (
            <AccordionItem key={item.id} className={s.item}>
              <AccordionItemHeading className={s.title}>
                <AccordionItemButton className={s.top}>
                  <p>{item.title}</p>
                  <ChevronIcon className={s.icon} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.content}>
                <p>{item.content}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
