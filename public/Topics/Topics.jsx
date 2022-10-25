import { useEffect, useState } from "react";
import { Api } from "../../src/configs/api";
import { Button, TopicItem } from "../../src/ui";
import s from "./Topics.module.scss";

export const Topics = ({ data }) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    setTopics(data);
  }, []);

  return (
    <div className={s.topics}>
      {topics.map((item) => (
        <TopicItem key={item.id} data={item} />
      ))}
      <div className={s.link}>
        <Button link="https://coursalytics.com/topics" style="accent">
          See All Topics
        </Button>
      </div>
    </div>
  );
};
