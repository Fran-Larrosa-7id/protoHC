import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from './services/patient.service';
import { Patient, MedicalStudy, MaculopathyData, Protocol, Consent, MedicalImage } from './interfaces/patient.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  patient: Patient | null = null;
  activeTab: string = 'hc';

  tabs = [
    { id: 'hc', label: 'H.C', icon: 'clipboard' },
    { id: 'ficha', label: 'Ficha', icon: 'user' },
    { id: 'diagnosticos', label: 'Diagnósticos', icon: 'stethoscope' },
    { id: 'derivaciones', label: 'Derivaciones', icon: 'arrow-right' },
    { id: 'quirurgico', label: 'Quirúrgico', icon: 'scalpel' },
    { id: 'maculopatia', label: 'Maculopatía', icon: 'eye' },
    { id: 'ie-art', label: 'I.E ART', icon: 'file-text' }
  ];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patient = this.patientService.getPatient();
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate.split('-').reverse().join('-'));
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}
