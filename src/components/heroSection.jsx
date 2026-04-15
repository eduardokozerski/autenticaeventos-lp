function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-[5vw] pb-20 pt-32 text-center max-[860px]:pb-16 max-[860px]:pt-28"
    >
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 75% 60% at 50% 42%, rgba(255, 255, 255, 0.1) 0%, transparent 65%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.012) 2px, rgba(255, 255, 255, 0.012) 4px)",
        }}
      />
      <p className="[animation:fadeUp_0.6s_ease_both] relative z-[1] mb-8 rounded-[2px] border border-white/30 px-4 py-[0.35rem] text-[0.72rem] font-bold uppercase tracking-[0.28em] text-white">
        Viçosa - MG &nbsp;·&nbsp; Festas Universitárias
      </p>
      <img
        className="[animation:fadeUp_0.6s_0.08s_ease_both] relative z-[1] mb-8 w-[min(260px,58vw)] drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] max-[860px]:w-[min(140px,52vw)]"
        src="/logo-autentica.png"
        alt="Autêntica Fazendinha"
      />
      <h1 className="[animation:fadeUp_0.6s_0.12s_ease_both] font-['Playfair_Display'] relative z-[1] text-[clamp(2.3rem,8.8vw,6.2rem)] leading-[0.95] tracking-[0.04em]">
        <em>As melhores</em>
        <span className="block text-white">
          <em>festas de Viçosa</em>
        </span>
      </h1>
      <p className="[animation:fadeUp_0.6s_0.18s_ease_both] relative z-[1] mt-6 max-w-[460px] text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.65] text-white/62">
        As noites mais esperadas de Viçosa em uma curadoria de festas com energia jovem e estética
        premium.
      </p>
      <div className="[animation:fadeUp_0.6s_0.24s_ease_both] relative z-[1] mb-9 mt-10 flex flex-wrap justify-center gap-4">
        <a
          className="inline-flex items-center justify-center rounded-[2px] border border-white/30 px-9 py-[0.85rem] text-[0.95rem] font-semibold uppercase tracking-[0.13em] text-white transition hover:border-white hover:bg-white hover:text-black"
          href="#eventos"
        >
          Ver próximas festas
        </a>
      </div>
      <div className="[animation:fadeUp_0.6s_0.3s_ease_both] relative z-[1] flex flex-col items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/55">
        <div className="relative h-[44px] w-px overflow-hidden bg-white/18">
          <span className="[animation:scrollLine_1.6s_ease-in-out_infinite] absolute top-[-26px] left-0 h-[26px] w-px bg-white" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default HeroSection;
