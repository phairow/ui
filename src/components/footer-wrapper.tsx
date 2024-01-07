
const FooterWrapper = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <footer className="main-footer footer-four bgs-cover bg-lighter"
      style={{ backgroundImage: 'url(/assets/images/footer/footer-bg.png)' }}>
      {children}
    </footer>
  );
};

export default FooterWrapper;