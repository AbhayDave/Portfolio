import { gridItems } from "@/data/resume";
import { BentoGrid, BentoGridItem } from "./magicui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-15">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
