import { PageTransition, Socials, TypingText } from "@components";
import { Photo } from "./components";

const Home = () => {
  return (
    <PageTransition>
      <section className="h-full">
        <div className="container h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:pt-8 lg:pb-24">
            <div className="grow mb-8 lg:mb-0 order-2 lg:order-none text-center lg:text-left">
              <TypingText
                texts={["React Frontend Developer", "Frontend Developer"]}
              />
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="text-red-500">Paweł Grzybek</span>
              </h1>
              <p className="max-w-lg mb-8">
                {/* Jako programista tworzę wydajne i skalowalne aplikacje, które
                odpowiadają na rzeczywiste potrzeby użytkowników. W swoich
                projektach kładę nacisk na czystość kodu, intuicyjność
                interfejsów i efektywność działania. Programowanie to dla mnie
                pasja, która pozwala mi nieustannie się rozwijać i realizować
                ambitne projekty. */}
                As a programmer, I create efficient and scalable applications
                that address real user needs. In my projects, I prioritize clean
                code, intuitive interfaces, and operational efficiency.
                Programming is my passion, enabling me to continuously grow and
                take on ambitious projects.
              </p>
              <div>
                <Socials
                  listStyles="flex justify-center lg:justify-start gap-5"
                  listElementStyles="text-3xl lg:text-4xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
