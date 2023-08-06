"use client";

import { useEffect, useState } from "react";
import parseMD from "parse-md";
import { Product } from "@/data/DataTypes";
import Image from "next/image";
import classNames from "classnames";
import arrow from "../../public/arrow.svg";
import matter from "gray-matter";

export default function ProductViewer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [endLeftAnimate, setEndLeftAnimate] = useState(false);
  const [endRightAnimate, setEndRightAnimate] = useState(false);

  useEffect(() => {
    const newProducts: Product[] = [];

    const markdownFiles = require.context(
      "../content/products",
      false,
      /\.\/.*md/i
    );

    const dataPromises: Promise<boolean>[] = [];
    markdownFiles.keys().forEach((markdownFile) => {
      const name = markdownFile.split(".", 2)[1] + ".md";

      const markdown = require("../content/products/2023-08-06-the-shrek.md");

      // push each "fetch" of an article to a array of promises. We then listen for when all these promises are finished later, to set them to state.
      dataPromises.push(
        fetch(markdown)
          .then((response) => {
            // fetch markdown delivers the text of the markdown
            console.log("E: ", response);
            return response.text();
          })
          .then((text) => {
            // using parse-md library to split the text from the "metadata" at top of markdown.
            const { metadata, content } = parseMD(text);
            console.log(text);

            // push each metadata / content as a single BlogPost object to an array of BlogPosts.
            newProducts.push({
              ...(metadata as Product),
              id: "markdownFile",
            });
            return true;
          })
          .catch((e) => {
            // this should never happen... but you know
            // console.log(e);
            return false;
          })
      );

      Promise.all(dataPromises).then(() => {
        newProducts.sort((a, b) => {
          return b.date.getTime() - a.date.getTime();
        });

        setProducts(newProducts);
      });
    });
  }, []);

  const onAnimateEnd = (e: any) => {
    if (e.propertyName === "transform") {
      if (e.currentTarget.className.includes("leftAnimate")) {
        setLeftAnimate(false);
        setEndRightAnimate(true);
        setCurrentProduct(
          currentProduct === 0 ? products.length - 1 : currentProduct - 1
        );
      } else if (e.currentTarget.className.includes("rightAnimate")) {
        setRightAnimate(false);
        setEndLeftAnimate(true);
        setCurrentProduct(
          currentProduct === products.length - 1 ? 0 : currentProduct + 1
        );
      } else if (
        e.currentTarget.className.includes("endRightAnimate") ||
        e.currentTarget.className.includes("endLeftAnimate")
      ) {
        setEndLeftAnimate(false);
        setEndRightAnimate(false);
      }
    }
  };

  const prevProduct = () => {
    setLeftAnimate(true);

    // setCurrentProduct(
    //   currentProduct === 0 ? products.length - 1 : currentProduct - 1
    // );
  };

  const nextProduct = () => {
    setRightAnimate(true);
    // setCurrentProduct(
    //   currentProduct === products.length - 1 ? 0 : currentProduct + 1
    // );
  };

  useEffect(() => {
    // scrollToNext();
  }, []);

  const scrollToNext = () => {
    setTimeout(() => {
      nextProduct();
      scrollToNext();
    }, 10000);
  };

  const currentProductData = products[currentProduct];

  return (
    <div className="relative w-full min-h-full flex flex-col">
      <div className="w-full flex flex-col max-w-[1500px] m-auto relative flex-1">
        <div className="relative flex flex-1 items-center justify-center mt-0 mb-20">
          {/* <h1 className="font-Gazzetta instrument-header">Gatekeeper</h1> */}
          <div className="flex flex-col h-fit relative">
            <Image
              className={classNames("instrument", {
                leftAnimate,
                rightAnimate,
                endLeftAnimate,
                endRightAnimate,
              })}
              onTransitionEnd={onAnimateEnd}
              alt="guitar placeholder"
              width={1536}
              height={726}
              src={`/product-heros/${currentProductData?.cover}`}
            />
            {/* {currentProductData.tags?.map((t) => {
              return (
                <h2
                  key={Math.random()}
                  className={classNames(
                    `highlighter-outline absolute opacity-0`,
                    {
                      draw:
                        !endLeftAnimate &&
                        !endRightAnimate &&
                        !rightAnimate &&
                        !leftAnimate,
                    }
                  )}
                  style={{
                    top: t.posY + "%",
                    right: t.posX + "%",
                    rotate: t.rotate + "deg",
                  }}
                >
                  {t.label}
                </h2>
              );
            })} */}
          </div>
          <button className="button-alt button left-0" onClick={prevProduct}>
            <Image
              className=" rotate-[-90deg] w-[50px] mr-[5px] fill-whiteColor invert"
              src={arrow}
              alt="arrowleft"
            />
          </button>
          <button className="button-alt right-0" onClick={nextProduct}>
            <Image
              className=" rotate-[90deg] w-[50px] mr-[-5px] invert"
              src={arrow}
              alt="arrowleft"
            />
          </button>
        </div>
        <div className="flex justify-between gap-10 flex-wrap">
          <div className="instrument-primary-tooltip flex flex-col max-w-lg flex-[3]">
            <h3>{currentProductData?.name}</h3>
            <h5 className="mt-5 text-secondary">
              {currentProductData?.shortDesc}
            </h5>
            <div className="flex items-center mt-10 gap-10">
              <button className="">ORDER NOW</button>
              <h3 className="">£3,500</h3>
            </div>
          </div>

          <div className="images flex justify-end gap-[40px] flex-[3] flex-wrap">
            <div className="flex flex-col gap-5 flex-1 uppercase font-bold cutout-back">
              <Image
                alt="guitar placeholder"
                width={800}
                height={400}
                src="http://davefarmiloe.com/wp-content/uploads/2022/08/T42-6.jpg"
                className="h-[250px] min-w-[250px] object-cover cutout-1"
              />
              <h5>
                Hardware fitted - Charlie Christian design neck and bridge
                pickups
              </h5>
            </div>
            <div className="flex flex-col gap-5 flex-1 uppercase font-bold cutout-back">
              <Image
                alt="guitar placeholder"
                width={800}
                height={400}
                src="http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0007.jpg"
                className="h-[250px] min-w-[250px] object-cover cutout-2"
              />
              <h5>A bespoke design from Farmiloe</h5>
            </div>
            <div className="flex flex-col gap-5 flex-1 uppercase font-bold cutout-back">
              <Image
                alt="guitar placeholder"
                width={800}
                height={400}
                src="http://davefarmiloe.com/wp-content/uploads/2022/09/T42-Front.jpg"
                className="h-[250px] min-w-[250px] object-cover cutout-3"
              />
              <h5>Constructed with backset single action truss rod</h5>
            </div>
          </div>
        </div>

        <button className="ml-auto mr-auto mt-10 items-center flex ">
          How it's made
          <div className="inline-block ml-5 rounded-full animate-bounce">
            <Image
              className="rotate-[180deg] w-[30px] mr-[-5px] invert"
              src={arrow}
              alt="arrowleft"
            />
          </div>
        </button>
      </div>
      <div className="flex flex-col max-w-[1500px] ml-auto mr-auto gap-10 mt-10 lg:flex-row">
        <div className="flex flex-col gap-y-10 xl:flex-[2]">
          {/* <div className="flex flex-col">
            <label className=" text-secondary">Designed</label>
            <label>Charles Farmiloe</label>
          </div>
          <div className="flex flex-col">
            <label className=" text-secondary">Frets</label>
            <label>24</label>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   // extracting the slug from the context
//   const { slug } = context.params;

//   // retrieving the Markdown file associated to the slug
//   // and reading its data
//   const content = await import(`../../posts/${slug}.md`);
//   const data = matter(content.default);

//   return {
//     props: {
//       frontmatter: data.data,
//       markdownBody: data.content,
//     },
//   };
// }
