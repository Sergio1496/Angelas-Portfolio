import Image from "next/image";
import Link from "next/link";
import bg1 from "../../public/bg1.webp";
import bg2 from "../../public/bg2.webp";
const ContactPage = () => {
  return (
    <div className="flex  flex-col bg-white text-black md:w-screen  lg:w-screen">
      <div className="flex flex-col md:mb-10 md:flex-row md:gap-56  md:px-48 lg:gap-[400px]">
        <div className="flex flex-col md:flex-col md:gap-5">
          <div>
            <h3 className="font-titulo text-5xl font-medium text-black md:text-8xl">
              ¿Trabajamos juntos?
            </h3>
          </div>
        </div>
        <div className="my-10 flex flex-col items-start justify-center md:m-10 md:items-end ">
          <div className="font-texto text-xl font-medium text-black md:text-2xl">
            Enviame un email a
          </div>
          <Link
            className="font-titulo text-2xl font-semibold text-black md:text-5xl md:font-medium"
            href="mailto:test@email.com"
          >
            hello@angelasroom.com
          </Link>
          {/* <div className="md:w-66 relative h-56 w-96 md:h-96">
            <Image
              className=" overflow-hidden rounded-full"
              layout="fill"
              objectFit="cover"
              src=""
              placeholder="blur"
              alt="logo"
            />
          </div> */}
        </div>
      </div>

      <div className="relative bottom-0 z-10 flex flex-col  justify-center overflow-hidden md:flex-row">
        <Image src={bg1} alt="bg1" objectFit="contain" placeholder="blur" />

        <Image src={bg2} alt="bg2" objectFit="contain" placeholder="blur" />
      </div>
    </div>
  );
};

export default ContactPage;
