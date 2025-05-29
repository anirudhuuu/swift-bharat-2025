const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-light text-sm md:text-body text-black/60">
      {children}
    </h1>
  );
};

export default SubHeading;
