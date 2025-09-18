import { Injectable } from '@angular/core';
import { Patient, MedicalStudy, MaculopathyData, Protocol, Consent, MedicalImage } from '../interfaces/patient.interface';

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
    notes: 'Paciente regular con seguimiento de maculopatía'
  };

  private mockStudies: MedicalStudy[] = [
    {
      id: '1',
      date: '26-05-2025',
      time: '12:50:25',
      doctor: 'Dr. PRUEBA, profesional de',
      specialty: 'Oftalmología',
      studyType: 'AO',
      diagnosis: 'Control rutinario',
      status: 'completed'
    },
    {
      id: '2',
      date: '01-02-2025',
      time: '09:27:08',
      doctor: 'Dr. PRUEBA, profesional de',
      specialty: 'Oftalmología',
      studyType: 'TEST 1/7/2025',
      diagnosis: 'Seguimiento maculopatía',
      status: 'completed'
    },
    {
      id: '3',
      date: '27-05-2025',
      time: '11:18:00',
      doctor: 'Dr. PRUEBA, profesional de',
      specialty: 'Oftalmología',
      studyType: 'Auto-refracción VD: 12.00 PD: 60.0',
      diagnosis: 'Evaluación refractiva',
      status: 'completed'
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

  getMedicalStudies(): MedicalStudy[] {
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