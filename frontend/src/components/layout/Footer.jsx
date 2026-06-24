import { footer } from '../../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-content mx-auto px-6">
        <p className="text-center text-slate-text-muted text-[13px]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
