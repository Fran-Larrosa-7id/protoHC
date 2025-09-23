import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from './services/patient.service';
import { Patient, MedicalStudy, MaculopathyData, Protocol, Consent, MedicalImage, RefractionData, PatientAntecedentes } from './interfaces/patient.interface';

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
  
  // Pagination properties
  medicalStudies: MedicalStudy[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 10;

  // Math reference for template
  Math = Math;

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
    this.loadMedicalStudies();
  }

  loadMedicalStudies() {
    const result = this.patientService.getMedicalStudies(this.currentPage, this.pageSize);
    this.medicalStudies = result.studies;
    this.totalPages = result.totalPages;
    this.totalItems = result.totalItems;
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMedicalStudies();
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
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

  getStudyBadgeColor(study: string): string {
    const colorMap: { [key: string]: string } = {
      'RECUENTO ENDOTELIAL': 'bg-blue-100 text-blue-700',
      'OCT MACULAR': 'bg-blue-100 text-blue-700',
      'PENTACAM': 'bg-blue-100 text-blue-700',
      'KERATOMETRIA': 'bg-green-100 text-green-700',
      'KERATOMETRIA AUTOMATICA': 'bg-green-100 text-green-700',
      'TOPOGRAFIA': 'bg-green-100 text-green-700',
      'TOPOGRAFIA CORNEAL': 'bg-red-100 text-red-700',
      'EYESTAR': 'bg-purple-100 text-purple-700',
      'ANGIOGRAFIA DIGITAL': 'bg-orange-100 text-orange-700',
      'Auto-refracción': 'bg-indigo-100 text-indigo-700',
      'CORVIS': 'bg-red-100 text-red-700',
      'ARGOS': 'bg-yellow-100 text-yellow-700',
      'PIO': 'bg-pink-100 text-pink-700'
    };
    return colorMap[study] || 'bg-gray-100 text-gray-700';
  }

  getPriorityBadge(priority: string): string {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      default: return 'bg-green-100 text-green-700';
    }
  }

  getPriorityText(priority: string): string {
    switch (priority) {
      case 'critical': return 'CRÍTICO';
      case 'high': return 'ALTA';
      default: return 'NORMAL';
    }
  }
}
