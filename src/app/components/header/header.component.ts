import { Component, HostListener, OnInit,ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langUser = '';
  pageWidth = 0;
  pageHeight = 0;
  isMenuOpen = false;
  activeRoute = '';
  disableScrolling = false;


  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
 
  constructor(private translate: TranslateService,  private router: Router ) {
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.disableScrolling) {
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo(0, 0); // Keep the window scrolled to the top when scrolling is disabled
    }
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.disableScrolling) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  toggleMenu(buttonId?: string) {
    console.log('Toggle menu called.');
    console.log('Is menu open?', this.isMenuOpen);
    console.log('Active route:', this.activeRoute);
    if (this.isMenuOpen && this.activeRoute === buttonId) {
      // Close the drawer and remove active styling if the same button is clicked again
      this.isMenuOpen = false;
      this.activeRoute = '';
      this.drawer.close();
      this.disableScrolling = false; // Enable scrolling when the drawer is closed
    } else {
      this.isMenuOpen = true;
      this.drawer.open();
      this.activeRoute = buttonId || this.router.url; // Set the active route to the new button clicked or the current route URL
      this.disableScrolling = true; // Disable scrolling when the drawer is open
      document.body.style.overflow = 'hidden'; // Prevent scrolling on the body element
    }
  }
  
  
  onMenuOpened(opened: boolean) {
    this.isMenuOpen = opened;
  }
  
  closeDrawer() {
    this.isMenuOpen = false; // Close the menu
    this.drawer.close(); // Close the mat-drawer
    this.disableScrolling = false; // Enable scrolling when the drawer is closed
    document.body.style.overflow = 'auto'; // Restore scrolling on the body element
  }

  


  ngOnInit(){
    this.langUser = this.translate.currentLang;
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;

    this.activeRoute = this.router.url;
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.langUser = lang;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.pageWidth = window.innerWidth;
    console.log(event);
  }
}
