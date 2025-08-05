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
  ".datacon",
  `Atuei como desenvolvedor Frontend na Datacon, empresa especializada em soluções de gestão de dados e análise de informações. Fui responsável pelo desenvolvimento de dashboards interativos, sistemas de coleta e processamento de dados, além de criação de APIs robustas para integração entre diferentes plataformas.`,
  "Desenvolvedor Fullstack",
  "Datacon",
  "Janeiro 2025 - Junho 2025"
);

hoverChangeExperience(
  ".e-commerce",
  `Atuei como desenvolvedor Web em um site de E-commerce, onde fui responsável pela criação do site e pela implementação de funcionalidades que melhoraram a experiência do usuário.`,
  "Desenvolvedor Web",
  "E-commerce",
  "Janeiro 2025 - Junho 2025"
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
