import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayout } from '../page-layout/page-layout';
import { ResumeBuilder } from '../../services/resume-builder';
import { ResumeData } from '../../interfaces/resume-data';

@Component({
  selector: 'app-resume',
  imports: [PageLayout, CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {
  resumeData: ResumeData | null = null;

  constructor(private resumeBuilder: ResumeBuilder) {}

  ngOnInit(): void {
    this.resumeBuilder.getResumeData().subscribe({
      next: (data) => this.resumeData = data,
      error: (err) => console.error('Error loading resume data:', err),
    });
  }

  getSkillTags(details: string): string[] {
    return details ? details.split(',').map(tag => tag.trim()) : [];
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric'});
  }
}
