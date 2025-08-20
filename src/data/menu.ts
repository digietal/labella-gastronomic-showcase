import filesCategory from '@/assets/files-category.jpg';
import camaraoCategory from '@/assets/camarao-category.jpg';
import peixesCategory from '@/assets/peixes-category.jpg';
import massasCategory from '@/assets/massas-category.jpg';
import risotosCategory from '@/assets/risotos-category.jpg';
import familiaCategory from '@/assets/familia-category.jpg';
import especialsCategory from '@/assets/especiais-category.jpg';
import fileLaBellaImage from '@/assets/file-la-bella.jpg';
import camaraoInternacionalImage from '@/assets/camarao-internacional.jpg';
import risotoParmesaoSalmaoImage from '@/assets/risoto-parmesao-salmao.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  servings?: string;
  image?: string;
  video?: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
}

export const categories: MenuCategory[] = [
  {
    id: 'files',
    name: 'Filés',
    icon: '🥩',
    image: filesCategory,
    description: 'Cortes nobres preparados com perfeição'
  },
  {
    id: 'camaroes',
    name: 'Camarões',
    icon: '🍤',
    image: camaraoCategory,
    description: 'Camarões frescos em preparos especiais'
  },
  {
    id: 'peixes',
    name: 'Peixes',
    icon: '🐟',
    image: peixesCategory,
    description: 'Peixes frescos grelhados e assados'
  },
  {
    id: 'massas',
    name: 'Massas',
    icon: '🍝',
    image: massasCategory,
    description: 'Massas artesanais com molhos especiais'
  },
  {
    id: 'risotos',
    name: 'Risotos',
    icon: '🍚',
    image: risotosCategory,
    description: 'Risotos cremosos e saborosos'
  },
  {
    id: 'familia',
    name: 'Pratos Família',
    icon: '🍽',
    image: familiaCategory,
    description: 'Pratos generosos para compartilhar'
  },
  {
    id: 'especiais',
    name: 'Especiais do Chef',
    icon: '⭐',
    image: especialsCategory,
    description: 'Criações exclusivas do nosso chef'
  }
];

export const menuItems: MenuItem[] = [
  // Pratos Família - Filé Mignon
  {
    id: 'file-la-bella-familia',
    name: 'Filé La Bella Família',
    description: 'Medalhões de filé ao molho do chef, champignon, arroz piamontese, farofa de ovo e batata frita.',
    price: 330,
    servings: '5 pessoas',
    category: 'familia'
  },
  {
    id: 'file-recheado-familia',
    name: 'Filé Recheado Família',
    description: 'Peça inteira de filé mignon recheada com queijo e presunto, arroz à grega e batata frita.',
    price: 300,
    servings: '6 pessoas',
    category: 'familia'
  },
  {
    id: 'file-do-chef-familia',
    name: 'Filé do Chef Família',
    description: 'Peça inteira de filé coberta com tiras de bacon e muçarela, arroz parisiense e batata frita.',
    price: 320,
    servings: '6 pessoas',
    category: 'familia'
  },
  {
    id: 'file-3-queijos-familia',
    name: 'Filé ao Molho 3 Queijos Família',
    description: 'Peça de filé mignon ao molho de provolone, parmesão e muçarela, com arroz parisiense e batata frita.',
    price: 320,
    servings: '6 pessoas',
    category: 'familia'
  },
  {
    id: 'medalhao-chef-familia',
    name: 'Medalhão do Chef Família',
    description: 'Medalhões de filé na chapa temperados com azeite, alho e tomilho, cobertos com muçarela. Servido com arroz biro biro e batata palha artesanal.',
    price: 320,
    servings: '6 pessoas',
    category: 'familia'
  },

  // Pratos Família - Camarão
  {
    id: 'camarao-internacional-empanado-familia',
    name: 'Camarão Internacional com Camarão Empanado',
    description: 'Arroz cremoso com ervilhas, presunto, camarão rosa, camarão empanado (10 unidades), muçarela e parmesão. Acompanha batata palha artesanal.',
    price: 330,
    servings: '5 pessoas',
    category: 'familia'
  },
  {
    id: 'camarao-internacional-familia',
    name: 'Camarão Internacional',
    description: 'Arroz cremoso com ervilhas, presunto, camarão rosa, muçarela e parmesão. Acompanha batata palha artesanal.',
    price: 300,
    servings: '5 pessoas',
    category: 'familia'
  },

  // Pratos Família - Peixes
  {
    id: 'salmao-assado-familia',
    name: 'Salmão Assado Família',
    description: 'Peça inteira de salmão marinado em limão e ervas, servido com arroz branco ou à grega, salada de legumes e batata frita.',
    price: 320,
    servings: '5 pessoas',
    category: 'familia'
  },
  {
    id: 'salmao-molho-camarao-familia',
    name: 'Salmão Assado com Molho de Camarão Rosa',
    description: 'Salmão assado com molho de camarão rosa, acompanhado de arroz piamontese ou à grega e batata frita.',
    price: 370,
    servings: '5 pessoas',
    category: 'familia'
  },
  {
    id: 'pescada-filhote-familia',
    name: 'Pescada Amarela ou Filhote Assado',
    description: 'Filé assado com arroz de chicória, farofa e salada de legumes.',
    price: 300,
    servings: '5 pessoas',
    category: 'familia'
  },
  {
    id: 'pescada-molho-camarao-familia',
    name: 'Filhote ou Pescada Amarela com Molho de Camarão',
    description: 'Peixe coberto com molho de camarão, servido com arroz de chicória, salada de legumes e farofa.',
    price: 350,
    servings: '4 pessoas',
    category: 'familia'
  },

  // Pratos Individuais - Filé Mignon
  {
    id: 'file-la-bella',
    name: 'Filé La Bella',
    description: 'Medalhões ao molho do chef ou madeira suave, com arroz piamontese, farofa de ovo e batata frita.',
    price: 68,
    category: 'files',
    image: fileLaBellaImage
  },
  {
    id: 'file-chateaubriand',
    name: 'Filé à Chateaubriand',
    description: 'Filé ao molho madeira suave, com arroz branco e purê de batata.',
    price: 65,
    category: 'files'
  },
  {
    id: 'file-do-chef',
    name: 'Filé do Chef',
    description: 'Medalhões de filé com bacon, arroz parisiense e batata frita.',
    price: 68,
    category: 'files'
  },
  {
    id: 'file-recheado',
    name: 'Filé Recheado',
    description: 'Medalhão de filé com queijo e presunto de peru, arroz à grega e batata frita.',
    price: 65,
    category: 'files'
  },
  {
    id: 'medalhao-do-chef',
    name: 'Medalhão do Chef',
    description: 'Medalhões grelhados com azeite, alho e tomilho, finalizados com muçarela. Servido com arroz biro biro e batata palha artesanal.',
    price: 68,
    category: 'files'
  },
  {
    id: 'file-parmegiana',
    name: 'Filé à Parmegiana',
    description: 'Filé empanado com panko, finalizado com molho de tomate, muçarela e parmesão. Acompanha arroz branco e batata frita.',
    price: 65,
    category: 'files'
  },
  {
    id: 'file-francesa',
    name: 'Filé à Francesa',
    description: 'Filé coberto com ervilha, presunto, palmito e batata palha artesanal. Servido com arroz branco.',
    price: 65,
    category: 'files'
  },

  // Risotos
  {
    id: 'risoto-parmesao-file',
    name: 'Risoto de Parmesão com Filé Mignon',
    description: 'Risoto de parmesão com medalhão de filé.',
    price: 70,
    category: 'risotos'
  },
  {
    id: 'risoto-camarao',
    name: 'Risoto de Camarão',
    description: 'Risoto com caldo bisque e camarão rosa.',
    price: 70,
    category: 'risotos'
  },
  {
    id: 'risoto-parmesao-salmao',
    name: 'Risoto de Parmesão com Salmão Empanado',
    description: 'Salmão empanado com risoto de parmesão.',
    price: 70,
    category: 'risotos',
    image: risotoParmesaoSalmaoImage
  },

  // Massas
  {
    id: 'fettuccine-3-queijos',
    name: 'Fettuccine ao Molho 3 Queijos',
    description: 'Com tiras de filé ou camarão rosa.',
    price: 65,
    category: 'massas'
  },
  {
    id: 'fettuccine-alfredo-file',
    name: 'Fettuccine Alfredo com Filé Mignon',
    description: 'Massa com molho Alfredo e filé mignon, finalizado com parmesão.',
    price: 65,
    category: 'massas'
  },
  {
    id: 'fettuccine-alfredo-file-bacon',
    name: 'Fettuccine Alfredo com Filé e Bacon',
    description: 'Massa ao molho Alfredo com filé mignon e bacon.',
    price: 70,
    category: 'massas'
  },
  {
    id: 'fettuccine-alfredo-camarao',
    name: 'Fettuccine Alfredo com Camarão',
    description: 'Massa ao molho Alfredo com camarões, finalizado com parmesão.',
    price: 65,
    category: 'massas'
  },

  // Camarão - Individuais
  {
    id: 'camarao-internacional-empanado',
    name: 'Camarão Internacional com Empanado',
    description: 'Arroz cremoso, ervilhas, presunto, camarão rosa, empanado (2 uni), muçarela e parmesão. Batata palha artesanal.',
    price: 65,
    category: 'camaroes',
    image: camaraoInternacionalImage
  },
  {
    id: 'camarao-internacional',
    name: 'Camarão Internacional',
    description: 'Arroz cremoso com camarão rosa, ervilhas, presunto, muçarela e parmesão.',
    price: 60,
    category: 'camaroes',
    image: camaraoInternacionalImage
  },
  {
    id: 'camarao-du-chef',
    name: 'Camarão Du Chef',
    description: 'Camarões empanados com cream cheese (6 uni), arroz à grega cremoso e batata palha artesanal.',
    price: 65,
    category: 'camaroes'
  },
  {
    id: 'camarao-grega',
    name: 'Camarão à Grega',
    description: 'Camarão rosa salteado no azeite com arroz à grega e batata palha artesanal.',
    price: 60,
    category: 'camaroes'
  },

  // Salmão
  {
    id: 'salmao-grelhado',
    name: 'Salmão Grelhado',
    description: 'Filé de salmão com ervas e limão siciliano, arroz branco e legumes.',
    price: 65,
    category: 'peixes'
  },
  {
    id: 'salmao-risoto-parmesao',
    name: 'Salmão Grelhado com Risoto de Parmesão',
    description: 'Salmão servido com risoto de parmesão.',
    price: 70,
    category: 'peixes'
  },
  {
    id: 'salmao-portuguesa',
    name: 'Salmão à Portuguesa',
    description: 'Salmão com azeite, especiarias, azeitonas, pimentão e legumes cozidos. Arroz branco.',
    price: 65,
    category: 'peixes'
  },

  // Peixes Regionais
  {
    id: 'filhote-risoto-parmesao',
    name: 'Filhote com Risoto de Parmesão',
    description: 'Filé grelhado com risoto de parmesão.',
    price: 70,
    category: 'peixes'
  },
  {
    id: 'pescada-molho-camarao',
    name: 'Pescada ou Filhote ao Molho de Camarão',
    description: 'Filé coberto com molho de camarão, arroz e farofa.',
    price: 70,
    category: 'peixes'
  },
  {
    id: 'pescada-na-chapa',
    name: 'Pescada Amarela ou Filhote na Chapa',
    description: 'Peixe grelhado com arroz de chicória, legumes e farofa.',
    price: 65,
    category: 'peixes'
  },
  {
    id: 'pescada-frito',
    name: 'Pescada ou Filhote Frito',
    description: 'Com arroz branco, legumes e farofa.',
    price: 65,
    category: 'peixes'
  },

  // Outros Especiais
  {
    id: 'chapa-la-bella',
    name: 'Chapa La Bella',
    description: 'Filé em tiras, salmão e camarão empanado (4 uni). Arroz, farofa, legumes e batata frita.',
    price: 150,
    servings: '2 pessoas',
    category: 'especiais'
  },
  {
    id: 'combinado-especial',
    name: 'Combinado Especial',
    description: 'Filé em tiras, camarão rosa e filé de pescada amarela. Arroz branco, farofa e batata frita.',
    price: 140,
    servings: '2 pessoas',
    category: 'especiais'
  }
];

export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getCategoryById = (categoryId: string): MenuCategory | undefined => {
  return categories.find(cat => cat.id === categoryId);
};