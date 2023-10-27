import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-resume';
  resumeInfo!: any;
  headerInfo: any;
  messages!: any[];
  constructor() {
    this.headerInfo = {
      firstName: 'Carlos Emanuel',
      lastName: 'Marcolongo',
      job: 'Desenvolvedor Web',
      socials: {
        linkedin: 'https://www.linkedin.com/in/emanuelmarcolongo/',
        github: 'https://www.github.com/emanuelmarcolongo/',
      },
      about: `Desenvolvedor web full stack e apaixonado por programação. Desde que conheci essa área no começo de 2022,
       me senti muito motivado em pensar
       e resolver problemas através dos códigos. Desde então busco aprender e refinar meus conhecimentos a cada dia!`,
      location: 'Cabo Frio - RJ',
      phone: '(22) 99863-8785',
      email: 'emanuelmarcolongo@gmail.com',
      education: [
        {
          id: 0,
          institution: 'Descomplica',
          type: 'Superior',
          currentOn: true,
          course: 'Bacharelado - Ciência da Computação',
          startDate: '2023-07-27T14:30:00.000Z',
          conclusionDate: '2027-07-27T14:30:00.000Z',
          about: `Curso superior em Ciência da Computação, meu objetivo é aprender mais sobre a base da programação, melhorar minha lógica,
          poder me familiarizar com outras linguagens e adquirir todo conhecimento possível para me desenvolver na área. Assim como estar apto
          a oportunidades de estágio na área`,
          additionalInfo:
            'O curso de Ciência da Computação voltado para o desenvolvimento full stack é projetado para proporcionar aos estudantes uma compreensão abrangente dos aspectos teóricos e práticos da construção de aplicativos web e sistemas de software completos. Essa formação busca capacitar os alunos a se tornarem profissionais versáteis, capazes de lidar com todas as camadas de um projeto de desenvolvimento de software.',
        },
        {
          id: 1,
          institution: 'Driven Education',
          type: 'Bootcamp',
          currentOn: false,
          course: 'Desenvolvimento Web Full Stack',
          startDate: '2022-07-27T14:30:00.000Z',
          conclusionDate: '2023-05-27T14:30:00.000Z',
          about: `Bootcamp de desenvolvimento web full stack de 10 meses, onde eu puder dar meus primeiros passos no mundo do desenvolvimento,
          aprender JavaScript/TypeScript e criar minhas primeiras aplicações web. Acima de tudo, nesse bootcamp eu aprendi a aprender, a
          ter capacidade e saber utilizar ferramentas para buscar conhecimento por conta própria!`,
          additionalInfo: `Formação intensiva de 1200h com projetos práticos, desenvolvimento de aplicações front-end, back-end e full stack com banco
          de dados como MongoDb / PostgreSQL`,
        },
        {
          id: 2,
          institution: 'Ada Tech',
          type: 'Bootcamp',
          currentOn: true,
          course: 'Desenvolvimento Web FrontEnd - Angular',
          startDate: '2023-07-27T14:30:00.000Z',
          conclusionDate: '2023-11-27T14:30:00.000Z',
          about: `Bootcamp de desenvolvimento web front-end voltado para o framework Angular, fui um dos 300 selecionados em mais de 50 mil bolsas iniciais,
          pertencendo a iniciativa Santander Coders 2023 e tendo a Ada Tech como instituição de ensino. \n
          Busco aqui aprender esse novo framework assim como o paradigma da programação orientada a objetos e fortalecer o TypeScript. `,
          additionalInfo:
            '*Curiosidade: esse site é inclusive um dos projetos desenvolvido durante esse bootcamp em Angular!',
        },
        {
          id: 3,
          institution: 'Cubos Academy',
          type: 'Bootcamp',
          currentOn: true,
          course: 'Desenvolvimento Web BackEnd - Node',
          startDate: '2023-07-27T14:30:00.000Z',
          conclusionDate: '2023-11-27T14:30:00.000Z',
          about: `Bootcamp de desenvolvimento web back-end utilizando tecnologias como Express/PostgreSQL/Knex. Estou tendo a oportunidade de reforçar
          meus conhecimentos em back-end com NodeJs e principalmente desenvolver trabalhos em grupos, utilizando
          metodologia ágil SCRUM além de poder também estar aprendendo mais e mais sobre versionamento de código e utilização de branches no Github`,
          additionalInfo: '',
        },
      ],
    };
  }

  ngOnInit() {
    this.messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  }

  handleContactForm(contactData: any) {
    this.messages.push(contactData);
    const stringfiedMessages = JSON.stringify(this.messages);
    localStorage.setItem('contactMessages', stringfiedMessages);

    if (contactData.email === 'showmessage@email.com') {
      console.log(this.messages);
    }
  }
}
