import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Heart, 
  Calendar, 
  ShieldCheck, 
  Star,
  PlayCircle,
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';

type Step = 
  | 'capa' 
  | 'condicao' 
  | 'situacao' 
  | 'dor' 
  | 'desejo' 
  | 'identificacao' 
  | 'disposicao' 
  | 'video' 
  | 'depoimentos' 
  | 'bio' 
  | 'regras' 
  | 'final';

export default function App() {
  const [step, setStep] = useState<Step>('capa');
  const [progress, setProgress] = useState(0);

  const steps: Step[] = [
    'capa', 'condicao', 'situacao', 'dor', 'desejo', 
    'identificacao', 'disposicao', 'video', 'depoimentos', 
    'bio', 'regras', 'final'
  ];

  useEffect(() => {
    const currentIndex = steps.indexOf(step);
    const totalSteps = steps.length - 1;
    setProgress((currentIndex / totalSteps) * 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const nextStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const renderProgress = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
      <motion.div 
        className="h-full bg-violet-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  const Header = ({ dark = false }: { dark?: boolean }) => (
    <header className="py-4 text-center">
      <h2 className={`text-xl font-serif tracking-widest uppercase ${dark ? 'text-white' : 'text-slate-dark'}`}>Karinne Bruno</h2>
      <p className={`text-[8px] uppercase tracking-[0.3em] mt-1 ${dark ? 'text-slate-gray' : 'text-slate-medium'}`}>Psicóloga & Terapeuta de Casais</p>
    </header>
  );

  const isDarkStep = ['capa', 'dor', 'disposicao'].includes(step);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkStep ? 'bg-bg-dark' : 'bg-bg-light'}`}>
      {renderProgress()}
      
      <div className="max-w-md mx-auto px-5 pb-8">
        <Header dark={isDarkStep} />

        <AnimatePresence mode="wait">
          {step === 'capa' && (
            <motion.div
              key="capa"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5 text-center pt-2"
            >
              <div className="relative inline-block">
                <div className="absolute -inset-6 bg-violet-primary/20 rounded-full blur-2xl" />
                <div className="relative w-32 h-32 mx-auto mb-2">
                  <img 
                    src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                    alt="Dra. Karinne Bruno" 
                    className="w-full h-full object-cover rounded-full border-2 border-violet-primary shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-serif leading-tight text-white px-2">
                Seu relacionamento ainda <span className="font-serif-italic text-violet-soft">pode ser restaurado</span>, e o primeiro passo pode começar hoje.
              </h1>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-left space-y-3 shadow-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-violet-primary shrink-0 mt-0.5" />
                  <p className="text-[12px] text-slate-gray leading-relaxed">
                    <span className="font-semibold text-white uppercase tracking-wider text-[10px]">IMPORTANTE:</span> Eventualmente ofereço algumas vagas em valor social, mas para selecionar as pessoas eu aplico esse breve formulário. <span className="text-violet-soft italic">Seja sincero.</span>
                  </p>
                </div>
              </div>

              <button
                onClick={nextStep}
                className="w-full py-4 bg-violet-primary text-white rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-violet-intense transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-violet-primary/20 group"
              >
                Quero salvar meu relacionamento
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'condicao' && (
            <motion.div
              key="condicao"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-serif text-slate-dark leading-snug">
                  Atualmente o CFP nos orienta a cobrar entre <span className="font-serif-italic">R$ 275 a R$ 515</span> por sessão. Você declara que não tem condições de arcar com esse investimento?
                </h2>
              </div>

              <div className="grid gap-3">
                <button
                  onClick={nextStep}
                  className="p-5 bg-bg-soft border border-slate-200 rounded-2xl text-left hover:border-violet-primary transition-all group flex justify-between items-center shadow-sm"
                >
                  <span className="text-base text-slate-dark font-medium">Sim, não disponho desse valor</span>
                  <CheckCircle2 className="w-5 h-5 text-violet-primary shrink-0" />
                </button>
                <button
                  onClick={() => alert('Este formulário é destinado apenas para quem busca vagas sociais.')}
                  className="p-5 bg-white border border-slate-200 rounded-2xl text-left hover:border-red-200 transition-all group flex justify-between items-center"
                >
                  <span className="text-base text-slate-medium">Eu posso pagar o valor integral</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 'situacao' && (
            <motion.div
              key="situacao"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-serif text-slate-dark leading-snug">
                  Qual das situações mais se parece com o que você está <span className="font-serif-italic">vivendo hoje?</span>
                </h2>
              </div>

              <div className="grid gap-3">
                {['Nos afastamos recentemente', 'Já estamos separados há um tempo', 'Ainda não nos separamos mas o amor esfriou'].map((option) => (
                  <button
                    key={option}
                    onClick={nextStep}
                    className="p-5 bg-white border border-slate-100 rounded-2xl text-left hover:border-violet-primary transition-all group flex justify-between items-center shadow-sm"
                  >
                    <span className="text-base text-slate-dark">{option}</span>
                    <ChevronRight className="w-5 h-5 text-violet-primary shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'dor' && (
            <motion.div
              key="dor"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-serif text-white leading-snug">
                  O que fez você <span className="font-serif-italic text-violet-primary">buscar por terapia?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {['Mágoas antigas', 'Traição', 'Brigas', 'Pedido de divórcio', 'Desconexão emocional', 'Falta de sexo'].map((option) => (
                  <button
                    key={option}
                    onClick={nextStep}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-left hover:border-violet-primary transition-all group"
                  >
                    <span className="text-white font-medium text-base">{option}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'desejo' && (
            <motion.div
              key="desejo"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-serif text-slate-dark leading-snug">
                  O que fez você dar o <span className="font-serif-italic">primeiro passo?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  'Superar mágoas', 
                  'Superar traição', 
                  'Aprender a dialogar', 
                  'Tentar reverter um pedido de divórcio', 
                  'Voltar a se conectar emocionalmente', 
                  'Voltar a ter uma relação íntima saudável'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={nextStep}
                    className="p-5 bg-bg-soft border border-slate-100 rounded-2xl text-left hover:border-violet-primary transition-all group flex justify-between items-center"
                  >
                    <span className="text-base text-slate-dark">{option}</span>
                    <CheckCircle2 className="w-5 h-5 text-violet-primary shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'identificacao' && (
            <motion.div
              key="identificacao"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-serif text-slate-dark leading-snug">
                  Qual dessas frases mais parece com o que você <span className="font-serif-italic">sente agora?</span>
                </h2>
              </div>

              <div className="grid gap-3">
                {[
                  'Sinto que fiz de tudo, mas mesmo assim ele/ela se afastou', 
                  'Meu coração quer restaurar, mas minha cabeça está cansada', 
                  'Quero lutar, mas não sei por onde começar'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={nextStep}
                    className="p-5 bg-white border border-slate-200 rounded-2xl text-left hover:border-violet-primary transition-all group"
                  >
                    <span className="text-base text-slate-dark font-serif-italic leading-relaxed">"{option}"</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'disposicao' && (
            <motion.div
              key="disposicao"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-4 text-center">
                <h2 className="text-lg font-serif text-white leading-tight">
                  Você está disposto(a) a tratar do seu relacionamento mesmo que seu parceiro(a) <span className="font-serif-italic text-violet-primary">não esteja pronto agora?</span>
                </h2>
                <div className="bg-violet-primary/10 p-4 rounded-xl border border-violet-primary/20">
                  <p className="text-[11px] text-slate-gray italic">
                    (Clique no botão APENAS se estiver disposto a realizar a terapia individual).
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <button
                  onClick={nextStep}
                  className="p-5 bg-violet-primary text-white rounded-2xl text-center hover:bg-violet-intense transition-all active:scale-95 shadow-xl shadow-violet-primary/20"
                >
                  <span className="text-base font-bold uppercase tracking-widest">Sim, quero salvar</span>
                </button>
                <button
                  onClick={() => alert('A restauração exige o primeiro passo. Sinta-se à vontade para retornar quando estiver pronto(a).')}
                  className="p-5 bg-transparent border border-white/10 text-slate-gray rounded-2xl text-center transition-all"
                >
                  <span className="text-sm">Não, prefiro continuar como estou</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6 pt-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-serif text-slate-dark">Assista este breve recado</h2>
                <p className="text-xs text-slate-medium">É fundamental que você veja isso antes de prosseguirmos.</p>
              </div>

              <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl relative group cursor-pointer border-4 border-white">
                <img 
                  src="https://picsum.photos/seed/therapy-session/1280/720" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-70"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-violet-primary rounded-full flex items-center justify-center shadow-lg">
                    <PlayCircle className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>

              <button
                onClick={nextStep}
                className="w-full py-4 bg-slate-dark text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-violet-primary transition-all shadow-lg"
              >
                Preciso fazer a sessão de Orientação
              </button>
            </motion.div>
          )}

          {step === 'depoimentos' && (
            <motion.div
              key="depoimentos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="text-center space-y-2">
                <h2 className="text-xl font-serif text-slate-dark">
                  Pessoas que decidiram <span className="font-serif-italic">dar o primeiro passo</span>
                </h2>
              </div>

              <div className="relative">
                <div className="flex overflow-x-scroll snap-x snap-mandatory gap-3 pb-4 no-scrollbar touch-pan-x">
                  {[
                    "https://i.ibb.co/wrPQqSQK/p1.jpg",
                    "https://i.ibb.co/fY1FTqrD/p2.jpg",
                    "https://i.ibb.co/xSt1Jx3Z/p3.jpg",
                    "https://i.ibb.co/qL6rpyXT/p4.jpg",
                    "https://i.ibb.co/xtPPdk0w/p5.jpg"
                  ].map((src, i) => (
                    <div key={i} className="min-w-[80%] snap-center flex-shrink-0">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[9/16] max-h-[380px] mx-auto">
                        <img 
                          src={src} 
                          alt={`Depoimento ${i + 1}`} 
                          className="w-full h-full object-contain bg-slate-50 pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-1.5 mt-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  ))}
                </div>
                <p className="text-[10px] text-slate-medium text-center mt-2 italic">Arraste para o lado para ver mais</p>
              </div>

              <div className="text-center pt-4 space-y-4">
                <p className="text-lg font-serif text-slate-dark">Você se sente preparado(a)?</p>
                <button
                  onClick={nextStep}
                  className="w-full py-4 bg-violet-primary text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-violet-intense transition-all"
                >
                  Sim, estou preparado(a)
                </button>
              </div>
            </motion.div>
          )}

          {step === 'bio' && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6 pt-4"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                    alt="Dra. Karinne Bruno" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-serif text-slate-dark">Dra. Karinne Bruno</h2>
                  <p className="text-violet-primary font-bold uppercase tracking-[0.2em] text-[9px]">Psicóloga, Psicanalista & Sexóloga</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl space-y-5">
                <p className="text-slate-medium text-sm leading-relaxed text-center">
                  Já ajudei mais de <span className="font-bold text-slate-dark">2000 casais</span>. Se você chegou aqui, é porque busca uma transformação real.
                </p>
                
                <div className="bg-violet-primary/5 p-4 rounded-xl border border-violet-primary/10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-violet-primary shrink-0" />
                  <p className="text-slate-dark font-medium text-[13px]">
                    Você está <span className="text-violet-intense font-bold">apto(a)</span> a concorrer a uma das minhas vagas sociais.
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  className="w-full py-4 bg-slate-dark text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-violet-primary transition-all"
                >
                  Quero agendar com valor social
                </button>
              </div>
            </motion.div>
          )}

          {step === 'regras' && (
            <motion.div
              key="regras"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 pt-4"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-serif text-slate-dark">Regras da <span className="font-serif-italic text-violet-primary">Vaga Social</span></h2>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-xl">
                <div className="p-6 space-y-3">
                  {[
                    "Horário comercial (08h às 17h);",
                    "Reserva imediata via pagamento;",
                    "Duração focada de 30 minutos;",
                    "Atendimento 100% Online;",
                    "Vagas extremamente limitadas (1/mês)."
                  ].map((regra, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-violet-primary rounded-full shrink-0" />
                      <p className="text-slate-medium font-medium text-[13px]">{regra}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-dark p-6 text-center">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-gray font-bold mb-2">Investimento Exclusivo</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-lg font-serif text-slate-gray line-through opacity-50">R$ 250</span>
                    <span className="text-4xl font-serif text-white font-bold">R$ 150</span>
                  </div>
                </div>
              </div>

              <button
                onClick={nextStep}
                className="w-full py-4 bg-violet-primary text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-violet-intense transition-all shadow-lg"
              >
                Quero garantir minha vaga
              </button>
            </motion.div>
          )}

          {step === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 pt-4 text-center"
            >
              <div className="relative inline-block">
                <div className="absolute -inset-8 bg-violet-primary/20 rounded-full blur-3xl" />
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img 
                    src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                    alt="Dra. Karinne Bruno" 
                    className="w-full h-full object-cover rounded-full border-2 border-violet-primary shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-violet-primary" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-serif text-slate-dark">Pré-Aprovação <span className="font-serif-italic">Concluída</span></h2>
                <p className="text-slate-medium text-base max-w-xs mx-auto leading-relaxed">
                  Finalize o pagamento agora para <span className="text-slate-dark font-bold">desbloquear minha agenda.</span>
                </p>
              </div>

              <div className="grid gap-3 pt-4">
                <a
                  href="#"
                  className="w-full py-6 bg-violet-intense text-white rounded-2xl font-bold text-xl hover:bg-slate-dark transition-all shadow-xl flex items-center justify-center gap-3 group"
                >
                  Pagar e Agendar
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[9px] text-slate-gray uppercase tracking-widest font-bold">
                  Vaga expira em 15 minutos
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-10 text-center">
          <div className="w-8 h-0.5 bg-slate-200 mx-auto mb-4 rounded-full" />
          <p className="text-[8px] text-slate-gray uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} Karinne Bruno
          </p>
        </footer>
      </div>
    </div>
  );
}
