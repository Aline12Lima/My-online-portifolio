const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aline Lima. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
