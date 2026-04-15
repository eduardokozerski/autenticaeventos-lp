function VendedoresSection() {
  return (
    <section
      id="vendedores"
      className="relative overflow-hidden bg-[#080808] px-[5vw] py-28 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(255,255,255,0.04)_0%,transparent_65%)] max-[860px]:py-20"
    >
      <div className="reveal relative z-[1] mb-16 text-center">
        <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-white">
          Ingressos
        </p>
        <h2 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[0.03em]">
          <em className="not-italic">Compre com segurança</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[540px] text-[1rem] leading-[1.7] text-white/62">
          Adquira seu ingresso direto com nossos vendedores oficiais pelo
          WhatsApp - verificados e autorizados pela Fazendinha.
        </p>
      </div>
      <div className="relative z-[1] mt-4 text-center">
        <a
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[2px] bg-white px-12 py-[1.1rem] text-[1rem] font-black uppercase tracking-[0.15em] text-black transition hover:-translate-y-[2px] hover:bg-[#f2f2f2] hover:shadow-[0_8px_28px_rgba(255,255,255,0.3)] max-[860px]:w-full max-[860px]:justify-center max-[860px]:px-6"
          href="https://linktr.ee/vicosafazendinha?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQmndpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaco6Dk9IkDvWZqu0j_J13-li7Ym-Dbc_Yn9Ho_yUMh-ipd_6bUTy2d3NaoYLQ_aem_hOmhGlQ7mb53GCcwGWCoDw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] transition duration-300 group-hover:translate-x-full" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative z-[1]"
          >
            <path d="M13.665 11.16l4.59-4.48h-3.07V4h-2.5v2.68H9.615l4.05 4.48zm-3.33 1.68l-4.59 4.48h3.07V20h2.5v-2.68h3.07l-4.05-4.48zm3.33.42l4.59 4.48h-3.07V20h-2.5v-2.68H9.615l4.05-4.48z" />
          </svg>
          <span className="relative z-[1]">Ver vendedores oficiais</span>
        </a>
      </div>
      <p className="reveal reveal-delay-02 relative z-[1] mt-12 text-center text-[0.75rem] leading-[1.7] tracking-[0.06em] text-white/22">
        <strong className="text-white/50">
          ✦ Vendedores verificados e autorizados pela Fazendinha Viçosa
        </strong>
        <br />
        Todos os vendedores acima são parceiros oficiais. Desconfie de quem não
        estiver nesta lista.
      </p>
    </section>
  );
}

export default VendedoresSection;
