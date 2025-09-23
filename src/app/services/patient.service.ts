import { Injectable } from '@angular/core';
import { Patient, MedicalStudy, MaculopathyData, Protocol, Consent, MedicalImage, RefractionData, PatientAntecedentes } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  // Mock data based on the images provided
  private mockPatient: Patient = {
    hc: '201 - GATTO, Marta Elena',
    name: 'GATTO, Marta Elena',
    dni: '10656247',
    phone: '223 4219899',
    cellphone: '223 4219899',
    email: 'marta.gatto@email.com',
    birthDate: '29-12-1952',
    age: 72,
    gender: 'F',
    address: 'J.B.JUSTO 150',
    city: 'Tandil',
    province: 'Buenos Aires',
    postalCode: '7000',
    cuit: '1',
    iva: 'NN',
    coverage: 'PAMI',
    plan: 'ALEM',
    affiliate: '150679326901-00',
    company: 'CUIT',
    firstVisit: '17-05-1996',
    lastVisit: '02-01-2098',
    totalVisits: 26,
    notes: 'Paciente regular con seguimiento de maculopatía',
    antecedentes: {
      personales: [
        'HTA medicado',
        'Toma pirex y eucidron'
      ],
      familiares: [
        'Padre celíaco',
        'Madre diabética'
      ],
      alergias: [
        'Alérgico Usa corrección desde los 40 años',
        'Alérgico alérgico a amoxicilina'
      ],
      medicacion: [
        'HTA medicado',
        'Pirex y eucidron'
      ],
      lastUpdate: '03-11-2021'
    }
  };

  // Real medical histories data from the provided images
  private mockStudies: MedicalStudy[] = [
    {
      id: '1',
      date: '01-02-2098',
      time: '17:47:04',
      doctor: 'Dra. PRUEBA',
      specialty: 'CX Refractiva',
      studyType: 'Rutina de Cataratas',
      diagnosis: 'Evaluación pre-quirúrgica cataratas',
      status: 'completed',
      priority: 'normal',
      studies: ['EYESTAR', 'KERATOMETRIA AUTOMATICA', 'TOPOGRAFIA CORNEAL', 'RECUENTO ENDOTELIAL', 'OCT MACULAR', 'ARGOS', 'PENTACAM', 'CORVIS'],
      observations: 'Para lentes de corrección de presbicia: Keratograph. Rutina de CX Refractiva. Rutina de Glaucoma.'
    },
    {
      id: '2',
      date: '15-09-2025',
      time: '14:09:02',
      doctor: 'Dra. CASTRO FEIJO, Tomas',
      specialty: 'Motivo de Consulta: test',
      studyType: 'PIO: OD - CI - tomada a las 14:10:25',
      diagnosis: 'Control de presión intraocular',
      status: 'completed',
      priority: 'normal',
      studies: ['PIO'],
      observations: 'Control rutinario de presión intraocular'
    },
    {
      id: '3',
      date: '19-08-2025',
      time: '07:37:00',
      doctor: 'Dra. PRUEBA',
      specialty: 'CX Refractiva',
      studyType: 'Rutina Completa',
      diagnosis: 'Pre-quirúrgico cirugía refractiva',
      status: 'completed',
      priority: 'normal',
      studies: ['RECUENTO ENDOTELIAL', 'OCT MACULAR', 'PENTACAM', 'CORVIS', 'ARGOS', 'Rutina de Cataratas', 'EYESTAR', 'KERATOMETRIA AUTOMATICA', 'TOPOGRAFIA CORNEAL'],
      observations: 'Rutina completa para evaluación pre-quirúrgica de cirugía refractiva'
    },
    {
      id: '4',
      date: '27-05-2025',
      time: '11:18:00',
      doctor: 'Dra. PRUEBA',
      specialty: 'Auto-refracción',
      studyType: 'Auto-refracción',
      diagnosis: 'Control refractivo post-cirugía',
      status: 'completed',
      priority: 'normal',
      studies: ['Auto-refracción'],
      refractionData: {
        vd: 12.00,
        pd: 60.0,
        measurements: {
          od: { s: 0.00, c: 2.00, a: 173, se: 1.00, h: 43.25, v: 44.75, ave: 44.00, cyl: 1.50 },
          oi: { s: 0.25, c: 1.00, a: 167, se: 0.75, h: 43.75, v: 44.25, ave: 44.00, cyl: 0.50 }
        }
      }
    },
    {
      id: '5',
      date: '26-05-2025',
      time: '12:50:25',
      doctor: 'Dra. PRUEBA',
      specialty: 'Diagnóstico: AO',
      studyType: 'ANGIOGRAFIA DIGITAL',
      diagnosis: 'Código: 165 - Nro. Protocolo: 100',
      status: 'completed',
      priority: 'normal',
      studies: ['ANGIOGRAFIA DIGITAL'],
      observations: 'Estudio angiográfico completo AO'
    },
    {
      id: '6',
      date: '06-05-2025',
      time: '09:10:00',
      doctor: 'Dra. PRUEBA',
      specialty: 'Cirugía: ANGIOGRAFIA DIGITAL',
      studyType: 'Prueba Emiliano test',
      diagnosis: 'Código: - Nro. Protocolo:',
      status: 'completed',
      priority: 'normal',
      studies: ['ANGIOGRAFIA DIGITAL TEST'],
      observations: 'Equipo: Cirujano: BARBIERI, Nicolas; Ayudante: BARBIERI, Nicolas; Anestesista: emilia carolina. Cardiólogo: COLOMBO, Roberto.'
    },
    {
      id: '7',
      date: '03-05-2025',
      time: '18:59:11',
      doctor: 'Dra. PRUEBA',
      specialty: 'Cirugía: ANGIOGRAFIA DIGITAL',
      studyType: 'Emi prueba test',
      diagnosis: 'Código: - Nro. Protocolo:',
      status: 'completed',
      priority: 'normal',
      studies: ['ANGIOGRAFIA DIGITAL'],
      observations: 'Equipo: Cirujano: BARBIERI, Nicolas; Ayudante: BARBIERI, Nicolas; Anestesista: emilia carolina. Cardiólogo: COLOMBO, Roberto.'
    },
    {
      id: '8',
      date: '01-05-2025',
      time: '22:35:15',
      doctor: 'Dra. PRUEBA',
      specialty: 'Cirugía: ANGIOGRAFIA DIGITAL',
      studyType: 'Multiple Test Sessions',
      diagnosis: 'Código: - Nro. Protocolo:',
      status: 'completed',
      priority: 'high',
      studies: ['ANGIOGRAFIA DIGITAL'],
      observations: 'Múltiples sesiones de prueba registradas entre 22:35:15 y 22:40:41. Equipo: Cirujano: BARBIERI, Nicolas; Anestesista: emilia carolina. Cardiólogo: COLOMBO, Roberto.'
    },
    {
      id: '9',
      date: '25-04-2025',
      time: '09:32:00',
      doctor: 'Dra. PRUEBA',
      specialty: 'Auto-refracción',
      studyType: 'Auto-refracción',
      diagnosis: 'Control refractivo rutinario',
      status: 'completed',
      priority: 'normal',
      studies: ['Auto-refracción'],
      refractionData: {
        vd: 12.00,
        pd: 60.0,
        measurements: {
          od: { s: 0.00, c: 2.00, a: 173, se: 1.00, h: 43.25, v: 44.75, ave: 44.00, cyl: 1.50 },
          oi: { s: 0.25, c: 1.00, a: 167, se: 0.75, h: 43.75, v: 44.25, ave: 44.00, cyl: 0.50 }
        }
      }
    },
    {
      id: '10',
      date: '10-04-2025',
      time: '11:34:00',
      doctor: 'Dra. PRUEBA',
      specialty: 'Auto-refracción',
      studyType: 'Auto-refracción',
      diagnosis: 'Evaluación refractiva con cambios significativos',
      status: 'completed',
      priority: 'high',
      studies: ['Auto-refracción'],
      refractionData: {
        vd: 12.00,
        pd: 64.0,
        measurements: {
          od: { s: -1.75, c: -2.75, a: 14, se: -3.25, h: 41.25, v: 43.75, ave: 42.50, cyl: -2.50 },
          oi: { s: -2.50, c: -2.25, a: 4, se: -3.75, h: 41.50, v: 44.00, ave: 42.75, cyl: -2.50 }
        }
      }
    }
  ];

  private mockMaculopathyData: MaculopathyData[] = [
    {
      date: '19-05-1996',
      eye: 'OD',
      refraction: { vd: 0.00, pd: 2.00, se: 1.73 },
      thickness: { h: 43.25, v: 44.75, ave: 44.00 },
      cyl: 1.50
    },
    {
      date: '19-05-1996',
      eye: 'OI',
      refraction: { vd: 0.25, pd: 1.00, se: 1.67 },
      thickness: { h: 43.75, v: 44.25, ave: 44.00 },
      cyl: 0.50
    },
    {
      date: '12-10-2006',
      eye: 'OD',
      refraction: { vd: 3.00, pd: 0, se: 20.75 },
      thickness: { h: 0, v: 3.00, ave: 0 },
      cyl: 0
    },
    {
      date: '12-10-2006',
      eye: 'OI',
      refraction: { vd: 3.00, pd: 0, se: 20.75 },
      thickness: { h: 0, v: 3.00, ave: 0 },
      cyl: 0
    }
  ];

  private mockProtocols: Protocol[] = [
    {
      id: '1',
      date: '09-10-2023',
      name: 'Protocolo-09-10-2023',
      status: 'completed'
    },
    {
      id: '2',
      date: '25-09-2023',
      name: 'Protocolo-25-09-2023',
      status: 'active'
    }
  ];

  private mockConsents: Consent[] = [
    {
      id: '1',
      date: '09-10-2023',
      type: 'HC-09-10-2023',
      status: 'signed'
    },
    {
      id: '2',
      date: '09-10-2023',
      type: 'Consentimiento-09-10-2023',
      status: 'signed'
    },
    {
      id: '3',
      date: '25-09-2023',
      type: 'Consentimiento-25-09-2023',
      status: 'pending'
    }
  ];

  private mockImages: MedicalImage[] = [
    {
      id: '1',
      date: '05-09-2023',
      type: 'DAYTONA OD',
      description: 'Imagen retinal ojo derecho',
      url: '/assets/images/daytona-od-1.jpg'
    },
    {
      id: '2',
      date: '05-09-2023',
      type: 'DAYTONA OD',
      description: 'Imagen retinal ojo derecho - Segunda toma',
      url: '/assets/images/daytona-od-2.jpg'
    },
    {
      id: '3',
      date: '05-09-2023',
      type: 'DAYTONA OI',
      description: 'Imagen retinal ojo izquierdo',
      url: '/assets/images/daytona-oi-1.jpg'
    },
    {
      id: '4',
      date: '05-09-2023',
      type: 'DAYTONA OI',
      description: 'Imagen retinal ojo izquierdo - Segunda toma',
      url: '/assets/images/daytona-oi-2.jpg'
    }
  ];

  constructor() { }

  getPatient(): Patient {
    return this.mockPatient;
  }

  getMedicalStudies(page: number = 1, pageSize: number = 10): { studies: MedicalStudy[], totalPages: number, currentPage: number, totalItems: number } {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedStudies = this.mockStudies.slice(startIndex, endIndex);
    
    return {
      studies: paginatedStudies,
      totalPages: Math.ceil(this.mockStudies.length / pageSize),
      currentPage: page,
      totalItems: this.mockStudies.length
    };
  }

  getAllMedicalStudies(): MedicalStudy[] {
    return this.mockStudies;
  }

  getMaculopathyData(): MaculopathyData[] {
    return this.mockMaculopathyData;
  }

  getProtocols(): Protocol[] {
    return this.mockProtocols;
  }

  getConsents(): Consent[] {
    return this.mockConsents;
  }

  getMedicalImages(): MedicalImage[] {
    return this.mockImages;
  }
}