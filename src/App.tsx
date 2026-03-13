import { Eye, Glasses, MapPin, MessageCircle, Sparkles, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '5591981305395';

const services = [
  {
    title: 'Consulta Optométrica Completa',
    description:
      'Avaliação funcional da visão com foco em conforto visual para estudo, trabalho e rotina digital.',
  },
  {
    title: 'Adaptação de Lentes de Contato',
    description:
      'Acompanhamento personalizado para você ganhar segurança, praticidade e nitidez no dia a dia.',
  },
  {
    title: 'Óculos para Rotina Digital',
    description:
      'Soluções para reduzir fadiga visual em quem passa muitas horas em telas e ambientes com luz artificial.',
  },
];

const testimonials = [
  {
    name: 'Renata M.',
    text: 'Voltei a trabalhar sem dor de cabeça no fim do expediente. Atendimento humano e muito cuidadoso.',
  },
  {
    name: 'Carlos A.',
    text: 'A adaptação das lentes foi muito mais tranquila do que eu imaginava. Recomendo demais.',
  },
  {
    name: 'Aline P.',
    text: 'Ambiente confortável e explicações claras. Saí com tudo resolvido no mesmo dia.',
  },
];

function sendToWhatsApp() {
  const message = encodeURIComponent(
    'Olá! Quero agendar uma avaliação visual e receber orientações sobre lentes e óculos.',
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-wide">
            <Eye className="text-cyan-300" size={22} />
            Óptica Viva
          </div>
          <button
            onClick={sendToWhatsApp}
            className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Agendar no WhatsApp
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} /> Atendimento para conforto visual
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Cuide da sua visão com uma experiência moderna e acolhedora.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Clínica visual inspirada em bem-estar: avaliação completa, orientação clara e soluções
              personalizadas para sua rotina.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={sendToWhatsApp}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <MessageCircle size={18} /> Falar com especialista
              </button>
              <a
                href="#servicos"
                className="rounded-xl border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/15 p-8 shadow-2xl shadow-cyan-950/40">
            <h2 className="mb-6 text-2xl font-semibold">Por que escolher a Óptica Viva?</h2>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <Glasses className="mt-1 text-cyan-300" size={18} />
                Soluções sob medida para óculos e lentes, com foco no seu estilo de vida.
              </li>
              <li className="flex items-start gap-3">
                <Star className="mt-1 text-cyan-300" size={18} />
                Equipe experiente em desconforto visual de quem usa telas por longos períodos.
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-300" size={18} />
                Localização central com atendimento por horário agendado para mais comodidade.
              </li>
            </ul>
          </div>
        </section>

        <section id="servicos" className="mx-auto w-full max-w-6xl px-6 pb-12">
          <h2 className="mb-8 text-3xl font-bold">Nossos serviços</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <h3 className="mb-3 text-xl font-semibold text-cyan-200">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h2 className="mb-8 text-3xl font-bold">Quem já passou por aqui</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <p className="mb-4 text-slate-200">“{item.text}”</p>
                <cite className="text-sm font-semibold text-cyan-200 not-italic">{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
