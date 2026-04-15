function FooterSection() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/6 px-[5vw] py-9 max-[860px]:flex-col max-[860px]:justify-center max-[860px]:text-center">
      <div>
        <img src="/logo-autentica.png" alt="Autêntica Fazendinha" className="h-[72px] opacity-70" />
      </div>
      <span className="text-[0.7rem] tracking-[0.06em] text-white/20">© 2025 Fazendinha Viçosa · Todos os direitos reservados.</span>
      <a
        className="text-[0.7rem] font-bold tracking-[0.14em] text-white/50 transition hover:text-white"
        href="https://www.instagram.com/fazendinhavicosa"
        target="_blank"
        rel="noopener noreferrer"
      >
        @fazendinhavicosa
      </a>
    </footer>
  );
}

export default FooterSection;
