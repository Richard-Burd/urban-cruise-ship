import Image from "next/image";
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

const ArticleImage = (props) => {
  return (
    <>
      <div className="flex justify-center px-8">
        <Image
          src={`${path}/${props.image}`}
          alt={`The image: "${props.image}" cannot be found!`}
          height={props.height}
          width={props.width}
        ></Image>
      </div>
    </>
  );
};

export default ArticleImage;
