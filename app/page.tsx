'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calculator,
  Users,
  CheckCircle,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  BarChart,
  BookOpen,
  Building,
  FileCheck,
  X,
  Menu,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/556294342088"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40   bg-slate-900 text-white shadow-md">
        <div className="container flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex md:gap-6">
            <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-amber-500">
              Sobre
            </Link>
            <Link href="#regimes" className="text-sm font-medium transition-colors hover:text-amber-500">
              Regimes
            </Link>
            <Link href="#servicos" className="text-sm font-medium transition-colors hover:text-amber-500">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium transition-colors hover:text-amber-500">
              Depoimentos
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium transition-colors hover:text-amber-500">
              Diferenciais
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-amber-500">
              Contato
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-amber-700 hover:bg-amber-800">
            <a href="https://wa.me/556294342088" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-amber-700 text-white transition-all hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-4 px-6 shadow-lg">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#sobre"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="#regimes"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Regimes
                </Link>
                <Link
                  href="#servicos"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>

                <Link
                  href="#depoimentos"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Depoimentos
                </Link>
                <Link
                  href="#diferenciais"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Diferenciais
                </Link>
                <Link
                  href="#contato"
                  className="flex items-center py-2 text-white hover:text-amber-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <div className="pt-2">
                  <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                    <a href="https://wa.me/556294342088" target="_blank" rel="noopener noreferrer">
                      Fale via WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/wallpaper.jpg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 to-transparent"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge className="mb-4 bg-amber-700 hover:bg-amber-800">CRC-GO 029418/O</Badge>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Atuação especializada nas áreas contábil, tributária e societária
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
              Soluções personalizadas para empresas dos setores comercial, industrial e prestador de serviços.
            </p>
            <Button asChild size="lg" className="animate-pulse bg-amber-700 hover:bg-amber-800">
              <a href="https://wa.me/556294342088" target="_blank" rel="noopener noreferrer">
                Fale agora via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="bg-gradient-to-br from-amber-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-amber-700/20 to-slate-900/20 blur-lg"></div>
                <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-8 border-white shadow-xl">
                  <Image src="/matheus.jpeg?height=500&width=500" alt="Matheus Amancio" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-amber-700 p-4 text-white md:bottom-12 md:right-0">
                  <p className="text-lg font-bold">CRC-GO</p>
                  <p className="text-sm">029418/O</p>
                </div>
              </div>
              <div>
                <Badge className="mb-2 bg-amber-700 text-white">Sobre o Contador</Badge>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl text-slate-900">Matheus Amancio</h2>
                <p className="mb-6 text-lg text-slate-700">
                  Com ampla experiência no mercado contábil, Matheus Amancio se destaca pela atuação especializada nas
                  áreas contábil, tributária e societária, oferecendo soluções personalizadas para cada tipo de negócio.
                </p>
                <p className="mb-8 text-lg text-slate-700">
                  Atendemos empresas dos setores comercial, industrial e prestador de serviços, com foco em conformidade
                  legal e eficiência fiscal para todos os regimes tributários: Simples Nacional, Lucro Presumido e Lucro
                  Real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regimes Tributários */}
        <section id="regimes" className="py-16 md:py-24 bg-slate-800 text-white">
          <div className="container">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-amber-700">Regimes Tributários</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Especialista em Todos os Regimes</h2>
              <p className="mx-auto max-w-2xl text-slate-300">
                Oferecemos soluções específicas para cada regime tributário, garantindo a melhor estratégia para o seu
                negócio.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Simples Nacional',
                  description: 'Ideal para micro e pequenas empresas, com tributação simplificada e reduzida.',
                  features: [
                    'Declaração mensal simplificada',
                    'Redução da carga tributária',
                    'Menos obrigações acessórias',
                  ],
                },
                {
                  title: 'Lucro Presumido',
                  description: 'Adequado para empresas de médio porte com apuração trimestral de impostos.',
                  features: [
                    'Presunção de lucro por atividade',
                    'Planejamento tributário eficiente',
                    'Menor complexidade contábil',
                  ],
                },
                {
                  title: 'Lucro Real',
                  description: 'Para empresas de maior porte, com apuração baseada no lucro efetivo.',
                  features: [
                    'Apuração precisa de impostos',
                    'Aproveitamento integral de créditos',
                    'Gestão fiscal estratégica',
                  ],
                },
              ].map((regime, index) => (
                <Card key={index} className="bg-slate-700 border-none text-white">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-amber-500">{regime.title}</h3>
                    <p className="mb-6 text-slate-300">{regime.description}</p>
                    <ul className="space-y-2">
                      {regime.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 mt-0.5 text-amber-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="md:py-24 bg-gradient-to-br from-amber-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-amber-700 text-white">Nossos Serviços</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">Soluções Contábeis Completas</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Oferecemos serviços contábeis personalizados para atender às necessidades específicas do seu negócio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Calculator className="h-10 w-10 text-amber-700" />,
                  title: 'Apuração de Impostos',
                  description:
                    'Cálculo preciso e pontual de todos os tributos aplicáveis ao seu negócio, garantindo conformidade fiscal.',
                },
                {
                  icon: <BarChart className="h-10 w-10 text-amber-700" />,
                  title: 'Planejamento Tributário',
                  description:
                    'Estratégias legais para otimização da carga tributária e maior eficiência fiscal para sua empresa.',
                },
                {
                  icon: <Building className="h-10 w-10 text-amber-700" />,
                  title: 'Legalização de Empresas',
                  description: 'Abertura, alteração e encerramento de empresas com agilidade e segurança jurídica.',
                },
                {
                  icon: <FileCheck className="h-10 w-10 text-amber-700" />,
                  title: 'Gestão Fiscal',
                  description:
                    'Acompanhamento contínuo das obrigações fiscais para evitar multas e garantir a saúde financeira.',
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-amber-700" />,
                  title: 'Obrigações Acessórias',
                  description:
                    'Cumprimento de todas as obrigações acessórias nos regimes Simples Nacional, Lucro Presumido e Lucro Real.',
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-amber-700" />,
                  title: 'Regularização Empresarial',
                  description:
                    'Soluções para regularizar sua empresa e mantê-la em conformidade com a legislação vigente.',
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden transition-all hover:shadow-lg border-none bg-white shadow"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-amber-50 p-3 w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-100">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 md:py-24 bg-slate-800 text-white">
          <div className="container">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-amber-700 text-white">Depoimentos</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">O que nossos clientes dizem</h2>
              <p className="mx-auto max-w-2xl text-slate-300">
                A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Maria Oliveira',
                  business: 'Loja de Roupas',
                  testimonial:
                    'O Matheus transformou a contabilidade da minha loja. Agora tenho mais tempo para focar no meu negócio e menos preocupações com a burocracia fiscal.',
                },
                {
                  name: 'Carlos Santos',
                  business: 'Desenvolvedor Autônomo',
                  testimonial:
                    'Como MEI, eu estava perdido com as obrigações fiscais. O atendimento personalizado do Matheus me ajudou a organizar tudo e ainda economizar nos impostos.',
                },
                {
                  name: 'Ana Pereira',
                  business: 'Consultório Odontológico',
                  testimonial:
                    'Profissionalismo e atenção aos detalhes. Recomendo os serviços do Matheus para todos os profissionais liberais que precisam de suporte contábil confiável.',
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden bg-white shadow border-none">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#B45309"
                          stroke="#B45309"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-6 italic text-muted-foreground">"{testimonial.testimonial}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-amber-100">
                        <div className="flex h-full w-full items-center justify-center text-xl font-bold text-amber-700">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="md:py-24 bg-gradient-to-br from-amber-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-amber-700 hover:bg-amber-800">Nossos Diferenciais</Badge>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">Por que escolher nossos serviços</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Oferecemos mais do que contabilidade. Somos parceiros do seu negócio.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <CheckCircle className="h-12 w-12 text-amber-500" />,
                  title: 'Conformidade Legal',
                  description:
                    'Garantimos que sua empresa esteja sempre em dia com todas as obrigações legais e fiscais.',
                },
                {
                  icon: <DollarSign className="h-12 w-12 text-amber-500" />,
                  title: 'Eficiência Fiscal',
                  description:
                    'Estratégias para redução legal da carga tributária e otimização dos recursos financeiros.',
                },
                {
                  icon: <Users className="h-12 w-12 text-amber-500" />,
                  title: 'Atendimento Personalizado',
                  description: 'Soluções sob medida para as necessidades específicas do seu setor e regime tributário.',
                },
              ].map((differential, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-gradient-to-br from-amber-700/20 to-slate-700/20 p-4 transition-transform duration-300 hover:scale-110">
                    {differential.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{differential.title}</h3>
                  <p className="text-slate-700">{differential.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                <a href="https://wa.me/556294342088" target="_blank" rel="noopener noreferrer">
                  Solicite um orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-amber-500"
                  style={{
                    width: `${Math.random() * 300 + 50}px`,
                    height: `${Math.random() * 300 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 text-white">
                <Badge className="mb-4 bg-amber-700 hover:bg-amber-800">Contabilidade Especializada</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforme sua gestão contábil e fiscal hoje mesmo
                </h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Agende uma consulta gratuita e descubra como podemos ajudar seu negócio a crescer com segurança fiscal
                  e eficiência tributária.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                    <a
                      href="https://wa.me/556294342088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      Fale via WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="sm:hidden border-white text-slate-700 hover:bg-slate-300 hover:text-slate-900"
                  >
                    <a href="tel:+556294342088" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Ligue Agora
                    </a>
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                  <span className="inline-block rounded-full bg-amber-100 p-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-amber-700" />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Atendimento Prioritário</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    'Resposta em até 2 horas',
                    'Análise fiscal preliminar gratuita',
                    'Orçamento personalizado',
                    'Consultoria inicial sem compromisso',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-amber-700 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-4 mt-4 text-center">
                  <p className="text-sm text-slate-500 mb-4">CRC-GO 029418/O</p>
                  <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                    <a href="https://wa.me/556294342088" target="_blank" rel="noopener noreferrer">
                      Solicitar Contato
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 py-12 text-slate-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Logo className="mb-4 text-white" />
              <p className="mb-4 max-w-xs">
                Soluções contábeis, tributárias e societárias personalizadas para empresas de diversos setores e regimes
                tributários.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/matheus_amanncio/"
                  target="_blank"
                  className="text-slate-300 transition-colors hover:text-amber-500"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 transition-colors hover:text-amber-500" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-300 transition-colors hover:text-amber-500" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <a>contato@matheusamancio.com.br</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <a>(62) 9434-2088</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-500" />
                  <span>
                    Rua. Contabilidade, 123
                    <br />
                    Centro, São Francisco - GO
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Horário de Atendimento</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>09:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} Matheus Amancio Contador <br /> Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
