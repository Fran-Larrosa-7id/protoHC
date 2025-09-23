export interface Patient {
  hc: string;
  name: string;
  dni: string;
  phone: string;
  cellphone: string;
  email?: string;
  birthDate: string;
  age: number;
  gender: 'M' | 'F';
  address: string;
  city: string;
  province: string;
  postalCode: string;
  cuit?: string;
  iva?: string;
  coverage?: string;
  plan?: string;
  affiliate?: string;
  company?: string;
  firstVisit: string;
  lastVisit: string;
  totalVisits: number;
  notes?: string;
}

export interface MedicalStudy {
  id: string;
  date: string;
  time: string;
  doctor: string;
  specialty: string;
  studyType: string;
  diagnosis: string;
  observations?: string;
  status: 'completed' | 'pending' | 'cancelled';
  studies: string[];
  refractionData?: RefractionData;
  priority: 'normal' | 'high' | 'critical';
}

export interface RefractionData {
  vd: number;
  pd: number;
  measurements: {
    od: {
      s: number;
      c: number;
      a: number;
      se: number;
      h: number;
      v: number;
      ave: number;
      cyl: number;
    };
    oi: {
      s: number;
      c: number;
      a: number;
      se: number;
      h: number;
      v: number;
      ave: number;
      cyl: number;
    };
  };
}

export interface MaculopathyData {
  date: string;
  eye: 'OD' | 'OI'; // Ojo Derecho / Ojo Izquierdo
  refraction: {
    vd: number;
    pd: number;
    se: number;
  };
  thickness: {
    h: number;
    v: number;
    ave: number;
  };
  cyl: number;
}

export interface Protocol {
  id: string;
  date: string;
  name: string;
  status: 'active' | 'completed';
}

export interface Consent {
  id: string;
  date: string;
  type: string;
  status: 'signed' | 'pending' | 'expired';
}

export interface MedicalImage {
  id: string;
  date: string;
  type: string;
  description: string;
  url: string;
  thumbnail?: string;
}