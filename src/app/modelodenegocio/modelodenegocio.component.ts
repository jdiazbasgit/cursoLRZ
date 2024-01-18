import { Component } from '@angular/core';

@Component({
  selector: 'app-modelodenegocio',
  templateUrl: './modelodenegocio.component.html',
  styleUrls: ['./modelodenegocio.component.css']
})
export class ModelodenegocioComponent {

}
// import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   cards!: HTMLElement[];
//   stackArea!: HTMLElement;

//   isMobile: boolean = false;

//   constructor(private elRef: ElementRef) {}

//   ngOnInit(): void {
//     this.cards = this.elRef.nativeElement.querySelectorAll('.card');
//     this.stackArea = this.elRef.nativeElement.querySelector('.stack-area');

//     this.isMobile = window.innerWidth <= 767;

//     this.rotateCards();
//   }

//   rotateCards(): void {
//     let angle = 0;
//     const commonTransform = `translate(-50%, -50%)`;

//     this.cards.forEach((card: HTMLElement) => {
//       if (card.classList.contains('active')) {
//         if (!this.isMobile) {
//           // Aplicar transformación más pronunciada en no móviles
//           card.style.transform = `${commonTransform} translate(0, -120vh) rotate(-48deg)`;
//         } else {
//           // Aplicar transformación menos pronunciada en móviles
//           card.style.transform = `${commonTransform} translate(0, -10vh) rotate(-10deg)`;
//         }
//       } else {
//         card.style.transform = `${commonTransform} rotate(${angle}deg)`;
//         angle -= 10;
//       }
//     });
//   }

//   @HostListener('window:scroll', ['$event'])
//   onScroll(event: Event): void {
//     if (!this.isMobile) {
//       const proportion = this.stackArea.getBoundingClientRect().top / window.innerHeight;

//       if (proportion <= 0) {
//         const n = this.cards.length;
//         const index = Math.ceil((proportion * n) / 2);

//         for (let i = 0; i < n; i++) {
//           this.cards[i].classList.toggle('active', i <= Math.abs(index) - 1);
//         }

//         this.rotateCards();
//       }
//     }
//   }
// }