/**
 * Created by lgonzalez on 07/12/17.
 */
export default {
  id: 'C004',
  veterinario: {
    id: 'SC001',
    title: 'Veterinario',
    backgroundColor: '#0fa4ac',
    childBackgroundColor: '#5a4ea3',
    img: require('../images/icon_manicure.png'),
    description: 'Description',
    services: [
      {
        id: 'S001',
        title: 'Chequeo de rutina',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S002',
        title: 'Vacunas',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S003',
        title: 'Toma de muestras',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S004',
        title: 'Consulta (Diagnostico)',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S005',
        title: 'Deparasitacion',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S006',
        title: 'Cuidado de emergencia (no critico)',
        img: require('../images/icon_manicure.png')
      }
    ]
  },
  grooming: {
    id: 'SC002',
    title: 'Grooming',
    backgroundColor: '#0fa4ac',
    childBackgroundColor: '#5a4ea3',
    img: require('../images/icon_manicure.png'),
    description: 'Description',
    services: [
      {
        id: 'S001',
        title: 'Baño',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S002',
        title: 'Limpieza de orejas',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S003',
        title: 'Corte de uñas',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S004',
        title: 'Corte de pelo',
        img: require('../images/icon_manicure.png')
      },
      {
        id: 'S005',
        title: 'Baño medicado',
        img: require('../images/icon_manicure.png')
      },      {
        id: 'S006',
        title: 'Aplicacion de productos garrapacidas',
        img: require('../images/icon_manicure.png')
      }
    ]
  }
}