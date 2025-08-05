import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".escrita360",
  `Trabalhei como freelancer na escrita360, onde tive a oportunidade de participar
                da criação do app de leitura e escrita de livros digitais, além de atuar no desenvolvimento de
                interfaces web e mobile. A escrita360 é uma plataforma inovadora que visa transformar a forma
                como as pessoas corrigem redações, oferecendo uma experiência única e intuitiva para os usuários.`,
  "UX Designer & Desenvolvedor fullstack",
  "Escrita360",
  "Julho 2025 - No momento"
);

hoverChangeExperience(
  ".codelab",
  `Na CodeLab Studio, lidero a criação e implementação de soluções tecnológicas voltadas para o design de produto e desenvolvimento de sistemas web. Nosso foco é entregar produtos inovadores, intuitivos e de alta performance para empresas de diversos segmentos.`,
  "UX Designer & Desenvolvedor Frontend",
  "CodeLab Studio",
  "Jan 2023 - No momento (2 anos)"
);

hoverChangeExperience(
  ".digitalhouse",
  `Trabalhei como instrutor conteudista em frontend na
  Digital House, o trabalho consistia em criar conteúdos para as
  aulas de especialização frontend. Alguns temas dos conteúdos
  realizados foram: React, Redux, TypeScript, Testes,
  GraphQL, Next.js, MUI, React Hook Form e styled-components.`,
  "Professor conteudista em Frontend",
  "Digital House",
  "Nov 2021 - Nov 2022 (1 ano)"
);

hoverChangeExperience(
  ".zuplae",
  `Trabalhei como Social Media e Designer na Zuplae que é um escola
  de programação, onde teve como foco as criações de conteúdos sobre
  programação para a comunidade dev através das redes sociais.`,
  "Social Media e UX Designer",
  "Zuplae",
  "Jan 2022 - Abril 2022 (4 meses)"
);

hoverChangeExperience(
  ".codigofontetv",
  `Trabalhei como Social Media e Designer no Código Fonte TV, 
  onde teve como foco as criações de conteúdos sobre programação 
  para a comunidade dev através das redes sociais.`,
  "Social Media e UX Designer",
  "Código Fonte TV",
  "Jun 2021 - Jan 2022 (8 meses)"
);

hoverChangeExperience(
  ".contweb",
  `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
  Onde pela primeira vez tive experiência com o React. Além do
  desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
  "Developer frontend e UX Designer",
  "ContWeb",
  "Set 2021 - Nov 2021 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML",
  "Linguagem de marcação para estruturar e organizar o conteúdo de páginas web."
);
hoverChangeDescription(
  ".css",
  "CSS",
  "Linguagem de estilo para definir a aparência e layout de páginas web."
);
hoverChangeDescription(
  ".js",
  "JavaScript",
  "Linguagem de programação para criar interatividade e dinamismo em páginas web."
);
hoverChangeDescription(
  ".python",
  "Python",
  "Linguagem de programação versátil para desenvolvimento web, automação e ciência de dados."
);
hoverChangeDescription(
  ".flutter",
  "Flutter",
  "Framework do Google para desenvolvimento de aplicativos nativos multiplataforma."
);
hoverChangeDescription(
  ".dart",
  "Dart",
  "Linguagem de programação criada pelo Google, usada principalmente com Flutter."
);
hoverChangeDescription(
  ".nodejs",
  "Node.js",
  "Runtime JavaScript para desenvolvimento de aplicações server-side e APIs."
);
