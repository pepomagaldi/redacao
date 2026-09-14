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
  {
    icon: Target,
    title: "Estrutura passo a passo",
    text: "Saiba o que fazer na introdução, nos dois desenvolvimentos e na conclusão.",
  },
  {
    icon: Lightbulb,
    title: "Repertórios para treinar",
    text: "Referências organizadas para você aprender a conectar repertório e argumento.",
  },
  {
    icon: BookOpenCheck,
    title: "Exemplos comentados",
    text: "Veja na prática como transformar uma ideia solta em um parágrafo mais forte.",
  },
  {
    icon: FileText,
    title: "Temas + checklist",
    text: "Treine com propostas e use um checklist antes de passar sua redação a limpo.",
  },
];

export default function Page() {
  return (
    <>
      <MetaPixel pixelId={PIXEL_ID} />

      <main>
        {/* HERO */}
        <section className="hero sectionShell">
          <div className="noise" />
          <div className="heroInner shell">
            <div className="brandPill">
              <span className="brandDot" /> RETA FINAL ENEM 2026
            </div>

            <div className="heroGrid">
              <div className="heroCopy">
                <div className="kicker">
                  <Flame size={16} /> GUIA DE RETA FINAL
                </div>

                <h1>
                  SAIBA O QUE FAZER
                  <br />
                  EM CADA PARTE DA
                  <br />
                  <em>REDAÇÃO.</em>
                </h1>

                <p className="heroLead">
                  Pare de improvisar. O <strong>Redação +900</strong> reúne estrutura,
                  repertórios, exemplos e temas para você treinar com mais direção
                  antes do ENEM 2026.
                </p>

                <div className="heroBullets">
                  <span>
                    <CheckCircle2 size={18} /> Estrutura clara
                  </span>
                  <span>
                    <CheckCircle2 size={18} /> Repertórios
                  </span>
                  <span>
                    <CheckCircle2 size={18} /> Exemplos comentados
                  </span>
                </div>

                <div className="priceBlock">
                  <div>
                    <small>ACESSO IMEDIATO</small>
                    <strong>R$ 17,90</strong>
                  </div>
                  <span>pagamento único</span>
                </div>

                <CheckoutButton
                  checkoutUrl={CHECKOUT_URL}
                  location="hero"
                  label="QUERO RECEBER O GUIA AGORA"
                />

                <div className="microTrust">
                  <span>
                    <LockKeyhole size={15} /> Compra segura
                  </span>
                  <span>
                    <ShieldCheck size={15} /> 7 dias de garantia
                  </span>
                </div>
              </div>

              <div className="heroVisual">
                <ProductMockup />
                <div className="floatingNote noteOne">
                  <Sparkles size={17} /> revisão sem enrolação
                </div>
                <div className="floatingNote noteTwo">
                  <TimerReset size={17} /> feito para a reta final
                </div>
              </div>
            </div>

            <a href="#conteudo" className="scrollCue">
              Veja o que você recebe <ArrowDown size={17} />
            </a>
          </div>
        </section>

        {/* TANGIBILIDADE / PRODUTO REAL */}
        <section className="section previewSection">
          <div className="shell previewGrid">
            <div className="previewCopy">
              <div className="eyebrow">VOCÊ NÃO COMPRA “MAIS UM PDF”</div>
              <h2>
                Você recebe um material para <span>abrir e usar.</span>
              </h2>
              <p>
                Nada de apostila gigante e conteúdo jogado. O guia foi organizado
                para você revisar rápido, entender a lógica da redação e voltar
                direto para a prática.
              </p>

              <div className="previewChecks">
                <span>
                  <Check /> Leitura rápida
                </span>
                <span>
                  <Check /> Aplicação prática
                </span>
                <span>
                  <Check /> Feito para celular
                </span>
              </div>
            </div>

            <div className="phoneStage">
              <div className="phone">
                <div className="phoneBar" />
                <div className="phoneContent">
                  <small>REDAÇÃO +900</small>
                  <h4>
                    INTRODUÇÃO
                    <br />
                    SEM TRAVAR
                  </h4>
                  <div className="yellowLine" />
                  <p>
                    <b>1.</b> Contextualize o tema
                  </p>
                  <p>
                    <b>2.</b> Apresente sua tese
                  </p>
                  <p>
                    <b>3.</b> Antecipe os argumentos
                  </p>
                  <div className="miniCard">CHECKLIST DE INTRODUÇÃO ✓</div>
                </div>
              </div>

              <div className="sheet behindOne">
                <span>REPERTÓRIO</span>
                <b>como usar sem forçar</b>
              </div>
              <div className="sheet behindTwo">
                <span>CONCLUSÃO</span>
                <b>agente · ação · meio · finalidade</b>
              </div>
            </div>
          </div>
        </section>

        {/* DOR */}
        <section className="section painSection">
          <div className="shell narrow">
            <div className="eyebrow">SE ISSO ACONTECE COM VOCÊ…</div>
            <h2>
              Talvez o problema não seja “não saber escrever”.
              <br />
              <span>É não saber o próximo passo.</span>
            </h2>

            <div className="painList">
              {pains.map((pain, i) => (
                <div className="painRow" key={pain}>
                  <span>0{i + 1}</span>
                  <p>“{pain}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section id="conteudo" className="section contentSection">
          <div className="shell">
            <div className="sectionHead center">
              <div className="eyebrow">O QUE VEM NO REDAÇÃO +900</div>
              <h2>
                Um único guia para você parar de <span>caçar conteúdo</span> em todo lugar.
              </h2>
              <p>
                Estrutura, repertório, exemplos e treino reunidos em uma revisão
                pensada para a reta final.
              </p>
            </div>

            <div className="contentGrid">
              {contents.map(({ icon: Icon, title, text }, i) => (
                <article className="contentCard" key={title}>
                  <div className="contentTop">
                    <span>0{i + 1}</span>
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="section transformSection">
          <div className="shell">
            <div className="sectionHead center">
              <div className="eyebrow">O OBJETIVO É SIMPLES</div>
              <h2>
                Sair de “não sei o que escrever” para{" "}
                <span>“sei o que fazer agora”.</span>
              </h2>
            </div>

            <div className="transformGrid">
              <div className="transformCard mutedCard">
                <small>ANTES</small>
                <p>
                  Você olha para o tema, tenta lembrar alguma fórmula pronta e
                  começa a escrever sem saber onde o texto vai terminar.
                </p>
              </div>

              <div className="arrowBridge">→</div>

              <div className="transformCard brightCard">
                <small>COM MÉTODO + TREINO</small>
                <p>
                  Você identifica a tese, escolhe dois argumentos e entende o
                  papel de cada parágrafo antes de começar a escrever.
                </p>
              </div>
            </div>

            <p className="disclaimer">
              O guia não garante nota específica. O resultado depende do estudo,
              prática e desempenho de cada aluno.
            </p>
          </div>
        </section>

        {/* URGÊNCIA REAL */}
        <section className="section painSection">
          <div className="shell narrow">
            <div className="eyebrow">A RETA FINAL JÁ COMEÇOU</div>
            <h2>
              Você não precisa “estudar tudo”.
              <br />
              <span>Precisa parar de perder tempo.</span>
            </h2>

            <div className="painList">
              <div className="painRow">
                <span>01</span>
                <p>Revise o que você realmente precisa usar na redação.</p>
              </div>
              <div className="painRow">
                <span>02</span>
                <p>Treine com uma estrutura clara em vez de improvisar.</p>
              </div>
              <div className="painRow">
                <span>03</span>
                <p>Use o tempo até a prova para praticar, revisar e corrigir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section className="section offerSection">
          <div className="shell offerBox">
            <div className="offerVisual">
              <ProductMockup small />
            </div>

            <div className="offerCopy">
              <div className="eyebrow">VOCÊ RECEBE TUDO ISSO</div>
              <h2>
                Comece sua revisão <span>hoje.</span>
              </h2>

              <ul>
                <li>
                  <CheckCircle2 /> Estrutura completa da redação
                </li>
                <li>
                  <CheckCircle2 /> Repertórios para treinar
                </li>
                <li>
                  <CheckCircle2 /> Exemplos comentados
                </li>
                <li>
                  <CheckCircle2 /> Temas para prática
                </li>
                <li>
                  <CheckCircle2 /> Checklist final de revisão
                </li>
                <li>
                  <CheckCircle2 /> Acesso imediato ao PDF
                </li>
              </ul>

              <div className="offerPrice">
                <small>tudo por um pagamento único de</small>
                <strong>R$ 17,90</strong>
              </div>

              <CheckoutButton
                checkoutUrl={CHECKOUT_URL}
                location="oferta"
                label="QUERO RECEBER O REDAÇÃO +900"
              />

              <div className="paymentLine">
                <CircleDollarSign size={17} /> Checkout seguro pela Cakto
              </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL HONESTA / SEM INVENTAR */}
        <section className="section contentSection">
          <div className="shell">
            <div className="sectionHead center">
              <div className="eyebrow">SEM PROMESSA MÁGICA</div>
              <h2>
                O material não escreve por você.
                <br />
                <span>Ele mostra o caminho.</span>
              </h2>
              <p>
                A proposta do Redação +900 é reduzir a confusão e dar uma estrutura
                prática para você estudar, treinar e revisar melhor. Assim que você
                tiver depoimentos reais de compradores, coloque-os aqui — nunca use
                avaliações inventadas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faqSection">
          <div className="shell faqGrid">
            <div>
              <div className="eyebrow">DÚVIDAS RÁPIDAS</div>
              <h2>Antes de comprar.</h2>
              <p className="faqIntro">
                O que você precisa saber antes de acessar o material.
              </p>
            </div>

            <div className="faqList">
              {[
                [
                  "É para quem está começando?",
                  "Sim. O guia foi organizado para ser simples e progressivo, inclusive para quem ainda sente dificuldade em estruturar a redação.",
                ],
                [
                  "Como recebo o material?",
                  "O acesso é liberado após a confirmação do pagamento no checkout.",
                ],
                [
                  "Posso estudar pelo celular?",
                  "Sim. O material é digital e foi pensado para leitura em celular, tablet e computador.",
                ],
                [
                  "O guia garante nota 900?",
                  "Não. Nenhum material pode garantir uma nota. O objetivo é entregar estrutura, repertório, exemplos e estratégia para melhorar sua preparação.",
                ],
                [
                  "Tem garantia?",
                  "Sim. A compra possui 7 dias de garantia conforme as condições apresentadas no checkout.",
                ],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={19} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section finalSection">
          <div className="shell finalBox">
            <div className="finalBadge">
              <Quote size={18} /> Reta Final ENEM 2026
            </div>

            <h2>
              O ENEM vai chegar de qualquer jeito.
              <br />
              <span>Você pode chegar mais preparado.</span>
            </h2>

            <p>
              Tenha um método para revisar e treinar sua redação com mais direção.
            </p>

            <div className="finalPrice">R$ 17,90</div>

            <CheckoutButton
              checkoutUrl={CHECKOUT_URL}
              location="final"
              label="QUERO COMEÇAR MINHA REVISÃO"
            />

            <div className="microTrust centered">
              <span>
                <MonitorSmartphone size={15} /> Acesso digital
              </span>
              <span>
                <ShieldCheck size={15} /> 7 dias de garantia
              </span>
            </div>
          </div>
        </section>
      </main>

      <div className="mobileSticky">
        <div>
          <small>Redação +900</small>
          <strong>R$ 17,90</strong>
        </div>
        <CheckoutButton
          checkoutUrl={CHECKOUT_URL}
          location="sticky"
          compact
          label="QUERO AGORA"
        />
      </div>
    </>
  );
}
