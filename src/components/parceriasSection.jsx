const parcerias = [
  {
    id: "divulgador",
    label: "Parcerias",
    titulo: "Seja um divulgador",
    descricao:
      "Fale direto com nosso time comercial e participe da divulgação oficial dos eventos.",
    link: "https://wa.me/5573991696512",
    linkTexto: "WhatsApp - Ana Araújo",
    telefone: "(73) 99169-6512",
  },
  {
    id: "excursao",
    label: "Operação",
    titulo: "Cadastre sua excursão",
    descricao:
      "Organiza grupos para as festas? Faça seu cadastro e alinhe condições com nossa equipe.",
    link: "https://wa.me/5573981655624",
    linkTexto: "WhatsApp - Carol Cardoso",
    telefone: "(73) 98165-5624",
  },
];

function ParceriasSection() {
  return (
    <section id="parcerias" className="p-0">
      <div className="grid grid-cols-2 max-[860px]:grid-cols-1">
        {parcerias.map((parceria) => (
          <article
            key={parceria.id}
            id={parceria.id}
            className="reveal flex min-h-[520px] flex-col justify-center bg-black px-[5vw] py-28 text-white max-[860px]:items-center max-[860px]:text-center max-[860px]:py-20"
          >
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-white">{parceria.label}</p>
            <h2 className="font-['Playfair_Display'] text-[clamp(2.1rem,4.8vw,4rem)] leading-[1] tracking-[0.03em]">
              <em className="not-italic">{parceria.titulo}</em>
            </h2>
            <p className="my-5 text-[0.95rem] leading-[1.75] text-white/72">{parceria.descricao}</p>
            <a
              className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-[2px] bg-white px-6 py-[0.95rem] text-[0.78rem] font-black uppercase tracking-[0.12em] text-black shadow-[0_8px_28px_rgba(255,255,255,0.3)] transition hover:-translate-y-[2px] hover:bg-[#f2f2f2]"
              href={parceria.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] transition duration-300 group-hover:translate-x-full" />
              <span className="relative z-[1]">{parceria.linkTexto}</span>
            </a>
            <p className="mt-4 text-[0.85rem] tracking-[0.08em] text-white/88">{parceria.telefone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ParceriasSection;
