import { useEffect, useRef } from "react";

function HeaderSection({ isMenuOpen, setIsMenuOpen }) {
  const navToggleRef = useRef(null);
  const navMobileMenuRef = useRef(null);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (!isMenuOpen) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (navToggleRef.current?.contains(target)) {
        return;
      }
      if (navMobileMenuRef.current?.contains(target)) {
        return;
      }
      setIsMenuOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const menuAriaLabel = isMenuOpen ? "Fechar menu" : "Abrir menu";

  return (
    <>
      <nav className="fixed top-0 z-[100] flex w-full items-center justify-center bg-gradient-to-b from-[rgba(8,8,8,0.96)] to-transparent px-[5vw] py-[1.2rem] backdrop-blur-[8px] max-[860px]:justify-between max-[860px]:px-4 max-[860px]:py-[1rem]">
        <a href="#hero" className="hidden text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-white/90 max-[860px]:block">
          Autêntica
        </a>
        <button
          ref={navToggleRef}
          className="relative hidden h-[42px] w-[42px] items-center justify-center rounded-[2px] bg-[rgba(8,8,8,0.88)] text-white max-[860px]:inline-flex"
          type="button"
          aria-label={menuAriaLabel}
          aria-expanded={isMenuOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span
            className={`absolute h-[2px] w-[18px] bg-current transition-all duration-200 ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-[18px] bg-current transition-all duration-200 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-[18px] bg-current transition-all duration-200 ${
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
            }`}
          />
        </button>
        <ul className="flex list-none gap-8 max-[860px]:hidden">
          <li>
            <a
              href="#eventos"
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white hover:opacity-100"
            >
              Eventos
            </a>
          </li>
          <li>
            <a
              href="#vendedores"
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white hover:opacity-100"
            >
              Ingressos
            </a>
          </li>
          <li>
            <a
              href="#divulgador"
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white hover:opacity-100"
            >
              Divulgador
            </a>
          </li>
          <li>
            <a
              href="#excursao"
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white hover:opacity-100"
            >
              Excursão
            </a>
          </li>
        </ul>
      </nav>
      <div
        id="nav-mobile-menu"
        className={`fixed left-4 right-4 top-[4.5rem] z-[99] rounded-[2px] border border-white/15 bg-[rgba(8,8,8,0.96)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-[10px] transition-all duration-200 max-[860px]:block ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        ref={navMobileMenuRef}
      >
        <a
          href="#eventos"
          className="block border-b border-white/10 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Eventos
        </a>
        <a
          href="#vendedores"
          className="block border-b border-white/10 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Ingressos
        </a>
        <a
          href="#divulgador"
          className="block border-b border-white/10 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Divulgador
        </a>
        <a
          href="#excursao"
          className="block pt-3 text-[0.76rem] font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Excursão
        </a>
      </div>
    </>
  );
}

export default HeaderSection;
