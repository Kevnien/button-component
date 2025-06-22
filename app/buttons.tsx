import Button from "./button";

const vercelSrc = "/button-component/globe.svg";
const textContent = "Button CTA";

export default function Buttons() {
  return (
    <>
      <div className="blue-buttons flex flex-wrap m-4 g-4 items-center font-[Noto_Sans]">
        <Button textContent={textContent} size="medium" />
        <Button textContent={textContent} size="large" iconSrc={vercelSrc} />
        <Button
          textContent={textContent}
          size="x-large"
          iconSrc={vercelSrc}
          iconPlacement="right"
        />
        <Button textContent={textContent} size="2x-large" />
        <Button size="icon-only" />
      </div>
      <div className="white-buttons flex flex-wrap m-4 g-4 items-center font-[Noto_Sans]">
        <Button color="white" textContent={textContent} size="medium" />
        <Button color="white" textContent={textContent} size="large" iconSrc={vercelSrc} />
        <Button color="white"
          textContent={textContent}
          size="x-large"
          iconSrc={vercelSrc}
          iconPlacement="right"
        />
        <Button color="white" textContent={textContent} size="2x-large" />
        <Button color="white" size="icon-only" />
      </div>
      <div className="blue-clear-buttons flex flex-wrap m-4 g-4 items-center font-[Noto_Sans]">
        <Button color="blue-clear" textContent={textContent} size="medium" />
        <Button color="blue-clear" textContent={textContent} size="large" iconSrc={vercelSrc} />
        <Button color="blue-clear"
          textContent={textContent}
          size="x-large"
          iconSrc={vercelSrc}
          iconPlacement="right"
        />
        <Button color="blue-clear" textContent={textContent} size="2x-large" />
        <Button color="blue-clear" size="icon-only" />
      </div>
      <div className="black-buttons flex flex-wrap m-4 g-4 items-center font-[Noto_Sans]">
        <Button color="black" textContent={textContent} size="medium" />
        <Button color="black" textContent={textContent} size="large" iconSrc={vercelSrc} />
        <Button color="black"
          textContent={textContent}
          size="x-large"
          iconSrc={vercelSrc}
          iconPlacement="right"
        />
        <Button color="black" textContent={textContent} size="2x-large" />
        <Button color="black" size="icon-only" />
      </div>
      <div className="red-buttons flex flex-wrap m-4 g-4 items-center font-[Noto_Sans]">
        <Button color="red" textContent={textContent} size="medium" />
        <Button color="red" textContent={textContent} size="large" iconSrc={vercelSrc} />
        <Button color="red"
          textContent={textContent}
          size="x-large"
          iconSrc={vercelSrc}
          iconPlacement="right"
        />
        <Button color="red" textContent={textContent} size="2x-large" />
        <Button color="red" size="icon-only" />
      </div>
    </>
  );
}
