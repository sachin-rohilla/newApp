import style from "../styles/Box.module.css";
import Data from "../Data.json";
import Image from "next/image";
import Footer from "../Components/Footer";
const Box = () => {
  console.log(Data);
  return (
    <>
      <div>
        <Image src="/p.jpg" width={1920} height={1000} alt="photo" />
      </div>
      <div className={style.main}>
        {Data.map((item) => {
          return (
            <>
              <div className={style.container}>
                <Image src="/s.jpg" width={300} height={200} alt="photo" />
                <h2 className={style.heading}>{item.title}</h2>
                <p className={style.paras}>{item.name}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={style.main2}>
        <p className={style.para}>
          {" "}
          Essays-Paragraphs-Speeches Paragraph on Photography For Students Leave
          a Comment Paragraph on Photography: Photography is the art, science,
          and practice of creating durable images by recording light or other
          electromagnetic radiation, either electronically by means of an image
          sensor, or chemically by means of a light-sensitive material such as
          photographic film. In today’s digital world, photographers use
          state-of-the-art cameras and sophisticated software to create stunning
          images. But photography is not just about high-tech tools. The heart
          of photography is the creative process, and the skill and artistry of
          the photographer. Paragraph on Study For Students Anyone with a camera
          can take a picture. But to create truly great images, you need to
          understand the principles of photography, and have a creative eye and
          a sense of composition. With practice, you can develop your own unique
          style, and become a better photographer. >>> Read Also: “Paragraph on
          Wonders of Science” The experience of photography is one that captures
          a moment in time and preserves it for the future. Whether you are
          taking pictures of people, places, or things, photography allows you
          to share your world with others. It is a way to express yourself, and
          to document your life and your travels. Photography can also be a form
          of self-expression, and a way to share your thoughts and feelings with
          others. When you look at a photograph, you can relive the moment that
          was captured in the image. You can feel the warmth of the sun, or the
          breeze blowing in your hair. You can see the expressions on the faces
          of the people in the picture, and hear the laughter or the silence.
          Photography can take you back to a time and place that you have never
          seen, and allow you to experience it firsthand. Photography is a way
          to capture the beauty of the world around us, and to share that beauty
          with others.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Box;
