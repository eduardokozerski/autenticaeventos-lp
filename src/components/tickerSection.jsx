const tickerItems = [
  "Mega calourada",
  "Baile da atlética",
  "Mais louco que o Batman",
  "Última do período",
  "Fazendinha Viçosa",
  "Mega calourada",
  "Baile da atlética",
  "Mais louco que o Batman",
  "Última do período",
  "Fazendinha Viçosa",
];

function TickerSection() {
  return (
    <div className="overflow-hidden border-y border-white/12 bg-[#050505] py-[0.95rem]">
      <div className="[animation:ticker_22s_linear_infinite] flex w-max gap-12 whitespace-nowrap will-change-transform max-[860px]:[animation-duration:14s]">
        {tickerItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-white/85"
          >
            {item}
            <span className="text-white"> ✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TickerSection;
