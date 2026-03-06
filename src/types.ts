export interface QuizOption {
  id: string;
  label: string;
}

export interface Question {
  id: string;
  variable: string;
  text: string;
  options: QuizOption[];
}

export interface QuizAnswers {
  objetivo_foto: string;
  estilo_visual: string;
  emocao: string;
  enquadramento: string;
  pose: string;
  roupa: string;
  acessorios: string;
  ambiente: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: '1',
    variable: 'objetivo_foto',
    text: 'Para que você pretende usar essa foto?',
    options: [
      { id: '1', label: 'Perfil profissional (LinkedIn / trabalho)' },
      { id: '2', label: 'Redes sociais' },
      { id: '3', label: 'Marca pessoal' },
      { id: '4', label: 'Portfólio / modelo' },
      { id: '5', label: 'Criador de conteúdo' },
    ],
  },
  {
    id: '2',
    variable: 'estilo_visual',
    text: 'Qual estilo de foto você prefere?',
    options: [
      { id: '1', label: 'Corporativo elegante' },
      { id: '2', label: 'Moderno minimalista' },
      { id: '3', label: 'Casual natural' },
      { id: '4', label: 'Luxo sofisticado' },
      { id: '5', label: 'Cinematográfico' },
      { id: '6', label: 'Editorial de revista' },
    ],
  },
  {
    id: '3',
    variable: 'emocao',
    text: 'Qual sensação sua foto deve transmitir?',
    options: [
      { id: '1', label: 'Confiança' },
      { id: '2', label: 'Autoridade' },
      { id: '3', label: 'Simpatia' },
      { id: '4', label: 'Sofisticação' },
      { id: '5', label: 'Criatividade' },
    ],
  },
  {
    id: '4',
    variable: 'enquadramento',
    text: 'Como você prefere aparecer?',
    options: [
      { id: '1', label: 'Close no rosto' },
      { id: '2', label: 'Meio corpo' },
      { id: '3', label: 'Corpo inteiro' },
      { id: '4', label: 'Sentado estilo executivo' },
      { id: '5', label: 'Pose editorial' },
    ],
  },
  {
    id: '5',
    variable: 'pose',
    text: 'Qual pose você prefere?',
    options: [
      { id: '1', label: 'Sentado confiante' },
      { id: '2', label: 'Em pé profissional' },
      { id: '3', label: 'Inclinado casual' },
      { id: '4', label: 'Mãos cruzadas' },
      { id: '5', label: 'Pose moderna' },
    ],
  },
  {
    id: '6',
    variable: 'roupa',
    text: 'Qual estilo de roupa?',
    options: [
      { id: '1', label: 'Terno / social' },
      { id: '2', label: 'Casual elegante' },
      { id: '3', label: 'Fashion moderno' },
      { id: '4', label: 'Luxo / alta costura' },
      { id: '5', label: 'Minimalista' },
    ],
  },
  {
    id: '7',
    variable: 'acessorios',
    text: 'Você quer acessórios?',
    options: [
      { id: '1', label: 'Relógio de luxo' },
      { id: '2', label: 'Óculos' },
      { id: '3', label: 'Brincos' },
      { id: '4', label: 'Colar' },
      { id: '5', label: 'Pulseira' },
      { id: '6', label: 'Sem acessórios' },
    ],
  },
  {
    id: '8',
    variable: 'ambiente',
    text: 'Onde a foto deve parecer ter sido tirada?',
    options: [
      { id: '1', label: 'Escritório moderno' },
      { id: '2', label: 'Estúdio fotográfico' },
      { id: '3', label: 'Fundo minimalista' },
      { id: '4', label: 'Cidade urbana' },
      { id: '5', label: 'Ambiente luxuoso' },
    ],
  },
];
