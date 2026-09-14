export function ProductMockup({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? "mockup mockupSmall" : "mockup"} aria-label="Mockup do guia Redação +900">
      <div className="mockupGlow" />
      <div className="bookShadow" />
      <div className="book">
        <div className="bookTop">
          <span>RETA FINAL</span>
          <span>ENEM 2026</span>
        </div>
        <div className="bookMark">GUIA DIGITAL</div>
        <div className="bookTitle">REDAÇÃO <b>+900</b></div>
        <div className="bookSub">Estrutura, repertório e estratégia para a reta final.</div>
        <div className="bookRule" />
        <div className="bookItems">ESTRUTURA · REPERTÓRIOS · EXEMPLOS · TEMAS</div>
      </div>
      <div className="page pageOne"><span>INTRODUÇÃO</span><i /></div>
      <div className="page pageTwo"><span>REPERTÓRIOS</span><i /></div>
    </div>
  );
}
