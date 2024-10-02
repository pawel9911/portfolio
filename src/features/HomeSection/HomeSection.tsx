import { motion } from "framer-motion";
import { PageTransition } from "../../components";
import { Socials } from "../../components/Socials";

const HomeSection = () => {
  return (
    <PageTransition>
      <section className="h-full">
        <div className="container h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:pt-8 lg:pb-24">
            <div className="grow mb-8 lg:mb-0 order-2 lg:order-none text-center lg:text-left">
              <span className="text-xl">React Frontend Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="text-red-500">Paweł Grzybek</span>
              </h1>
              <p className="max-w-lg mb-8">
                I am developing my career driven by a passion for technology and
                a continuous desire to improve my skills. Every project is a new
                opportunity for me to gain knowledge and face technical
                challenges. The flexibility and fast pace of the IT industry
                make my work not only inspiring but also satisfying.
              </p>
              <div>
                <Socials
                  listStyles="flex justify-center lg:justify-start gap-5"
                  listElementStyles="text-3xl lg:text-4xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <div className="w-full h-full relative mix-blend-lighten">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2,
                    duration: 0.4,
                    when: "beforeChildren",
                  }}
                  className="size-80 lg:size-112"
                >
                  <img
                    src="public/assets/me.png"
                    alt="me"
                    className="object-contain rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomeSection;
