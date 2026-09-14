import {
  ArrowDown,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  Flame,
  Lightbulb,
  LockKeyhole,
  MonitorSmartphone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
} from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";
import { MetaPixel } from "@/components/MetaPixel";
import { ProductMockup } from "@/components/ProductMockup";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.cakto.com.br/ckrkrt8_1105648";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1680729316724150";

const pains = [
  "Travo e não sei como começar.",
  "Tenho medo de fugir do tema.",
  "Falta repertório na hora de argumentar.",
  "Minha conclusão sempre parece fraca.",
];

const contents = [
  { icon: Target, title: "Estrutura passo a passo", text: "Entenda o papel da introdução, dos dois desenvolvimentos e da conclusão." },
  { icon: Lightbulb, title: "Repertórios para treinar", text: "Referências organizadas para você aprender a conectar repertório e argumento." },
  { icon: BookOpenCheck, title: "Exemplos comentados", text: "Veja como uma ideia sai do rascunho e vira um parágrafo mais forte." },
  { icon: FileText, title: "Temas + checklist", text: "Pratique com propostas e revise sua redação antes de passar a limpo." },
];

export default function Page() {
  return (
    <>
      <MetaPixel pixelId={PIXEL_ID} />
      <main>
        <section className="hero sectionShell">
          <div className="noise" />
          <div className="heroInner shell">
            <div className="brandPill"><span className="brandDot" /> RETA FINAL ENEM 2026</div>

            <div className="heroGrid">
              <div className="heroCopy">
                <div className="kicker"><Flame size={16} /> RETA FINAL</div>
                <h1>TRAVOU NA<br /><em>REDAÇÃO?</em></h1>
                <p className="heroLead">
                  Um guia direto para você parar de improvisar e entender <strong>o que fazer em cada parte da redação</strong> do ENEM.
                </p>

                <div className="heroBullets">
                  <span><CheckCircle2 size={18} /> Estrutura clara</span>
                  <span><CheckCircle2 size={18} /> Repertórios</span>
                  <span><CheckCircle2 size={18} /> Exemplos comentados</span>
                </div>

                <div className="priceBlock">
                  <div><small>ACESSO IMEDIATO</small><strong>R$ 17,90</strong></div>
                  <span>pagamento único</span>
                </div>

                <CheckoutButton checkoutUrl={CHECKOUT_URL} location="hero" />
                <div className="microTrust">
                  <span><LockKeyhole size={15} /> Compra segura</span>
                  <span><ShieldCheck size={15} /> 7 dias de garantia</span>
                </div>
              </div>

              <div className="heroVisual">
                <ProductMockup />
                <div className="floatingNote noteOne"><Sparkles size={17}/> revisão sem enrolação</div>
                <div className="floatingNote noteTwo"><TimerReset size={17}/> feito para a reta final</div>
              </div>
            </div>

            <a href="#conteudo" className="scrollCue">Veja o que tem dentro <ArrowDown size={17}/></a>
          </div>
        </section>

        <section className="section painSection">
          <div className="shell narrow">
            <div className="eyebrow">SE ISSO ACONTECE COM VOCÊ…</div>
            <h2>O problema talvez não seja “não saber escrever”.<br/><span>É não ter um método claro.</span></h2>
            <div className="painList">
              {pains.map((pain, i) => (
                <div className="painRow" key={pain}><span>0{i + 1}</span><p>“{pain}”</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="conteudo" className="section contentSection">
          <div className="shell">
            <div className="sectionHead center">
              <div className="eyebrow">POR DENTRO DO GUIA</div>
              <h2>Você abre o PDF e já sabe <span>por onde começar.</span></h2>
              <p>Sem apostila gigante. Sem linguagem complicada. Sem precisar caçar informação em dez lugares diferentes.</p>
            </div>

            <div className="contentGrid">
              {contents.map(({ icon: Icon, title, text }, i) => (
                <article className="contentCard" key={title}>
                  <div className="contentTop"><span>0{i + 1}</span><Icon size={24}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section previewSection">
          <div className="shell previewGrid">
            <div className="previewCopy">
              <div className="eyebrow">VISUAL. DIRETO. PRÁTICO.</div>
              <h2>Feito para estudar pelo <span>celular</span> sem cansar.</h2>
              <p>O conteúdo foi organizado para revisão rápida: títulos fortes, exemplos, listas, checklists e páginas que você consegue consultar em poucos minutos.</p>
              <div className="previewChecks">
                <span><Check /> Leitura rápida</span>
                <span><Check /> Aplicação prática</span>
                <span><Check /> Revisão antes da prova</span>
              </div>
            </div>
            <div className="phoneStage">
              <div className="phone">
                <div className="phoneBar" />
                <div className="phoneContent">
                  <small>REDAÇÃO +900</small>
                  <h4>INTRODUÇÃO<br/>SEM TRAVAR</h4>
                  <div className="yellowLine" />
                  <p><b>1.</b> Contextualize o tema</p>
                  <p><b>2.</b> Apresente sua tese</p>
                  <p><b>3.</b> Antecipe os argumentos</p>
                  <div className="miniCard">CHECKLIST DE INTRODUÇÃO ✓</div>
                </div>
              </div>
              <div className="sheet behindOne"><span>REPERTÓRIO</span><b>como usar sem forçar</b></div>
              <div className="sheet behindTwo"><span>CONCLUSÃO</span><b>agente · ação · meio · finalidade</b></div>
            </div>
          </div>
        </section>

        <section className="section transformSection">
          <div className="shell">
            <div className="sectionHead center">
              <div className="eyebrow">A TRANSFORMAÇÃO É SIMPLES</div>
              <h2>De “não sei o que escrever” para <span>“sei o que fazer agora”.</span></h2>
            </div>
            <div className="transformGrid">
              <div className="transformCard mutedCard">
                <small>ANTES</small>
                <p>Você olha para o tema, tenta lembrar um modelo e começa a escrever sem saber para onde o texto vai.</p>
              </div>
              <div className="arrowBridge">→</div>
              <div className="transformCard brightCard">
                <small>COM MÉTODO + TREINO</small>
                <p>Você identifica a tese, escolhe dois argumentos e entende o objetivo de cada parágrafo antes de começar.</p>
              </div>
            </div>
            <p className="disclaimer">O guia não garante nota específica. O resultado depende do estudo, prática e desempenho de cada aluno.</p>
          </div>
        </section>

        <section className="section offerSection">
          <div className="shell offerBox">
            <div className="offerVisual"><ProductMockup small /></div>
            <div className="offerCopy">
              <div className="eyebrow">OFERTA DE ACESSO</div>
              <h2>Comece sua revisão <span>hoje.</span></h2>
              <ul>
                <li><CheckCircle2 /> PDF completo</li>
                <li><CheckCircle2 /> Acesso imediato após o pagamento</li>
                <li><CheckCircle2 /> Leia no celular, tablet ou computador</li>
                <li><CheckCircle2 /> Garantia de 7 dias</li>
              </ul>
              <div className="offerPrice"><small>pagamento único</small><strong>R$ 17,90</strong></div>
              <CheckoutButton checkoutUrl={CHECKOUT_URL} location="oferta" label="QUERO ACESSAR AGORA" />
              <div className="paymentLine"><CircleDollarSign size={17}/> Checkout seguro pela Cakto</div>
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="shell faqGrid">
            <div>
              <div className="eyebrow">DÚVIDAS RÁPIDAS</div>
              <h2>Antes de comprar.</h2>
              <p className="faqIntro">Sem enrolação: o que normalmente alguém quer saber antes de acessar o material.</p>
            </div>
            <div className="faqList">
              {[
                ["É para quem está começando?", "Sim. O guia foi organizado para ser simples e progressivo, inclusive para quem sente dificuldade para estruturar a redação."],
                ["Como recebo o material?", "O acesso é liberado após a confirmação do pagamento no checkout."],
                ["Posso estudar pelo celular?", "Sim. O material é digital e foi pensado para leitura em celular, tablet e computador."],
                ["O guia garante nota 900?", "Não. Nenhum material pode garantir uma nota. O objetivo é entregar estrutura, repertório e estratégia para melhorar sua preparação."],
                ["Tem garantia?", "Sim. A compra possui 7 dias de garantia conforme as condições apresentadas no checkout."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>{q}<ChevronDown size={19}/></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section finalSection">
          <div className="shell finalBox">
            <div className="finalBadge"><Quote size={18}/> Reta Final ENEM 2026</div>
            <h2>O ENEM vai chegar de qualquer jeito.<br/><span>Sua preparação não precisa chegar atrasada.</span></h2>
            <p>Tenha um método para revisar e treinar sua redação com mais direção.</p>
            <div className="finalPrice">R$ 17,90</div>
            <CheckoutButton checkoutUrl={CHECKOUT_URL} location="final" label="QUERO MEU REDAÇÃO +900" />
            <div className="microTrust centered">
              <span><MonitorSmartphone size={15}/> Acesso digital</span>
              <span><ShieldCheck size={15}/> 7 dias de garantia</span>
            </div>
          </div>
        </section>
      </main>

      <div className="mobileSticky">
        <div><small>Redação +900</small><strong>R$ 17,90</strong></div>
        <CheckoutButton checkoutUrl={CHECKOUT_URL} location="sticky" compact label="QUERO AGORA" />
      </div>
    </>
  );
}
