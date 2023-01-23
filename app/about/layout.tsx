interface Props {
  children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
  return <div className="flex-grow">{children}</div>;
};

export default AboutLayout;
