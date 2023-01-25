import Image from "next/image";
import jimin from "../../public/jimin.webp";
const About = () => {
  return (
    <div className="flex w-screen flex-col bg-white px-10 text-black md:flex-col ">
      <div className="flex flex-col md:mb-10 md:flex-row md:gap-56 md:py-10 md:px-48 lg:gap-[400px]">
        <div className="flex flex-col md:flex-col md:gap-5">
          <div>
            <h3 className="font-titulo text-5xl font-medium text-textos md:text-8xl">
              ¡Hola!
            </h3>
          </div>
          <div>
            <p className="text-lg font-texto md:text-xl">
              Soy Ángela Castro, diseñadora gráfica y publicista de Madrid. Mis
              intereses están enfocados en el mundo del branding y todo lo
              relacionado con la impresión. También cuento con experiencia en
              ilustración y en publicidad digital.
            </p>
          </div>
          <div>
            <button className="mt-4 rounded-full bg-textos p-4 font-texto text-white md:px-8 md:py-4">
              ¿Trabajamos juntos?
            </button>
          </div>
        </div>
        <div className="m-10 flex items-center justify-center ">
          <div className="md:w-66 relative h-56 w-96 md:h-96">
            <Image
              className=" overflow-hidden rounded-full"
              layout="fill"
              objectFit="cover"
              src={jimin}
              placeholder="blur"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <span className="w-full  bg-black p-[1px] md:flex md:w-11/12 md:self-center"></span>

      <div className="flex flex-col md:flex-row  ">
        <div className="flex flex-col md:flex-col md:px-48 md:py-10">
          <div>
            <h3 className="my-7 font-titulo text-5xl font-medium text-textos md:text-8xl">
              Experiencia
            </h3>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-lg font-texto font-medium text-textos">
                Sincrolab
              </p>
              <p className="text-lg font-texto">Diseñadora Gráfica</p>
            </div>
            <div className="flex items-end">
              <p className="text-lg font-texto">2022 - Actualidad</p>
            </div>
          </div>
          <div className="my-10">
            <p className="text-lg font-texto font-medium text-textos">
              Influencer Marketing Lab
            </p>
            <p className="text-lg font-texto">Diseñadora Gráfica</p>
          </div>
        </div>
        <span className="w-full bg-black p-[1px] md:hidden lg:w-1/3"></span>
        <div className="flex flex-col md:flex-col md:px-48 md:py-10">
          <div>
            <h3 className="my-7 font-titulo text-5xl font-medium text-textos  md:text-8xl">
              Educación
            </h3>
          </div>
          <div className="mb-10 flex flex-row gap-1">
            <div className="flex flex-row justify-between md:gap-6">
              <div>
                <div className="text-lg font-texto font-medium text-textos">
                  Universidad Rey Juan Carlos
                </div>
                <div className="text-lg font-texto">
                  Grado en Publicidad y Relaciones Públicas
                </div>
                <div className="text-lg   font-texto font-light">
                  Mención de honor en Dirección de arte y Diseño Gráfico
                </div>
              </div>
              {/* <div className="flex items-end">
              <p className="text-lg font-texto">2022 - Actualidad</p>
            </div> */}
            </div>
            <div className=" flex w-2/4 flex-row items-center justify-end md:mb-11">
              <p className="text-lg mb-6 font-texto">2017-2021</p>
            </div>
          </div>
        </div>
      </div>
      <span className="w-full bg-black p-[1px] md:hidden lg:w-1/3"></span>
    </div>
  );
};

export default About;
