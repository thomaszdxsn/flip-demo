"use client";
import Card from "@/components/Card";
import clsx from "clsx";
import { useEffect, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function Page() {
  const [view, setView] = useState<"list" | "article">("list");
  const [imgName, setImgName] = useState<string>("");

  const onClick = (imgName: string, view: string = "article") => {
    // remove alll other target class
    const targetElements = document.querySelectorAll(".target");
    targetElements.forEach((element) => {
      element.classList.remove("target");
    });
    const element = document.querySelector(`img[data-src="${imgName}"]`);
    if (element) {
      element.classList.add("target");
    }
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setImgName(imgName);
        setView(view);
      });
    });
    transition.finished.finally(() => {
      if (element) {
        element.classList.remove("target");
      }
    });
  };

  if (view === "list") {
    return (
      <ul>
        <li>
          <Card img="/image1.jpg" onClick={onClick} targetImg={imgName} />
        </li>
        <li>
          <Card img="/image2.jpg" onClick={onClick} targetImg={imgName} />
        </li>
        <li>
          <Card img="/image3.jpg" onClick={onClick} targetImg={imgName} />
        </li>
      </ul>
    );
  } else {
    return (
      <div>
        <Card
          img={imgName}
          onClick={() => {
            onClick(imgName, "list");
          }}
          direction={"vertical"}
          targetImg={imgName}
        />
      </div>
    );
  }
}
