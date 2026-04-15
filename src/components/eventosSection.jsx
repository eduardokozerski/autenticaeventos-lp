const eventos = [
  {
    id: "festa-das-fotos",
    logoSrc: "/festa-das-fotos.png",
    logoAlt: "Ícone Festa das fotos",
    data: "25/04",
    nome: "Festa das fotos",
    descricao:
      "Uma noite para registrar momentos, reencontros e toda a energia da pista em grande estilo.",
    revealDelayClass: "reveal-delay-005",
  },
  {
    id: "ultima-do-periodo",
    logoSrc: "/ultima-do-periodo.png",
    logoAlt: "Ícone Última do Período",
    data: "03/07",
    nome: "Última do período - Universo paralelo",
    descricao:
      "Encerramento do período com atmosfera imersiva, sonoridade intensa e produção de alto nível.",
    revealDelayClass: "reveal-delay-01",
  },
  {
    id: "mais-louco-que-o-batman",
    logoSrc: "/mais-louco-que-o-batman.png",
    logoAlt: "Ícone Mais louco que o Batman",
    data: "21/11",
    nome: "Mais louco que o Batman",
    descricao:
      "Uma experiência intensa para fechar o ano com personalidade, música forte e público vibrante.",
    revealDelayClass: "reveal-delay-015",
  },
];

function EventosSection() {
  return (
    <section id="eventos" className="relative overflow-hidden bg-[#080808] px-[5vw] py-28 max-[860px]:py-20">
      <p className="reveal mb-4 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-white max-[860px]:text-center">
        Agenda
      </p>
      <h2 className="reveal font-['Playfair_Display'] text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1] tracking-[0.03em] max-[860px]:text-center">
        <em className="not-italic">Próximos Eventos</em>
      </h2>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className={`reveal ${evento.revealDelayClass} relative overflow-hidden rounded-[3px] border border-white/10 bg-[#101010] px-10 py-11 transition duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:h-[2px] before:bg-[linear-gradient(90deg,transparent,#fff,transparent)] before:opacity-0 before:transition hover:-translate-y-[5px] hover:border-white/35 hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)] hover:before:opacity-100`}
          >
            <div className="mb-7 flex h-20 items-center">
              <img className="max-h-20 max-w-[180px] object-contain object-left" src={evento.logoSrc} alt={evento.logoAlt} />
            </div>
            <div className="mb-5 inline-flex items-center gap-[0.4rem] rounded-[2px] border border-white/18 bg-white/7 px-3 py-[0.28rem] text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white">
              {evento.data}
            </div>
            <div className="mb-2 font-['Playfair_Display'] text-[2rem] tracking-[0.04em]">{evento.nome}</div>
            <p className="mb-7 text-[0.88rem] leading-[1.6] text-white/62">{evento.descricao}</p>
            <span className="inline-flex items-center gap-[0.6rem] rounded-[2px] border border-white/15 px-6 py-[0.7rem] text-[0.82rem] font-black uppercase tracking-[0.15em] text-white/45">
              Em breve
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventosSection;
