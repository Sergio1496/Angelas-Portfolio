interface Props {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: Props) => {
  return <div className=" w-screen flex-grow">{children}</div>;
};

export default ContactLayout;
