import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar1Component } from "./navbar1/navbar1.component";
import { Router } from 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, Navbar1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {

 isLoggedIn = false;

ngOnInit() {
  const storedLogin = localStorage.getItem('isLoggedIn');
  this.isLoggedIn = storedLogin === 'true';
}


  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  isMenuOpen = false;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  @ViewChild('dropdownToggle') dropdownToggle!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  ngAfterViewInit(): void {
    this.menuBtn.nativeElement.addEventListener('click', () => {
      this.mobileMenu.nativeElement.classList.toggle('hidden');
    });

    this.dropdownToggle.nativeElement.addEventListener('click', () => {
      this.dropdownMenu.nativeElement.classList.toggle('hidden');
    });
  }
}