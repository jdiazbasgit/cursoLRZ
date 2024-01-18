
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards!: HTMLElement[];
  stackArea!: HTMLElement;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.cards = this.elRef.nativeElement.querySelectorAll('.card');
    this.stackArea = this.elRef.nativeElement.querySelector('.stack-area');

    this.rotateCards();
  }

  rotateCards(): void {
    let angle = 0;
    const commonTransform = `translate(-50%, -50%)`;

    this.cards.forEach((card: HTMLElement) => {
      if (card.classList.contains('active')) {
        card.style.transform = `${commonTransform} translate(0, -120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `${commonTransform} rotate(${angle}deg)`;
        angle -= 10;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const proportion = this.stackArea.getBoundingClientRect().top / window.innerHeight;

    if (proportion <= 0) {
      const n = this.cards.length;
      const index = Math.ceil((proportion * n) / 2);

      for (let i = 0; i < n; i++) {
        this.cards[i].classList.toggle('active', i <= Math.abs(index) - 1);
      }

      this.rotateCards();
    }
  }
}
// script
  //   let cards = document.querySelectorAll(".card");
  //   let stackArea = document.querySelector(".stack-area");

  //   function rotateCards(){
  //       let angle = 0;
  //       cards.forEach((card)=> {
  //         if(card.classList.contains("active")){
  //           card.style.transform = `translate(-50%,-120%) rotate (-48deg)`;
  //         }else {
  //           card.style.transform = `translate(-50%,-50%) rotate (${angle}deg)`;
  //           angle = angle -10;
  //         }
  //       });
  //   }
  //    rotateCards();

  //    window.addEventListener("scroll", () => {
  //     let proportion = 
  //     stackArea.getBoundingClientRect().top / 
  //     window.innerHeight;
  //     if (proportion <= 0) {
  //       let n = cards.length;
  //       let index = Math.ceil ((proportion * n ) /2);
  //       index = Math.abs(index) -1;
  //       for (let i = 0; i < n; i++)  {
  //         if(i <= index){
  //           cards[i].classList.add("active");
  //         } else {
  //           cards[i].classList.remove("active");
  //     }
  //   }
  //     rotateCards();
  //   }
  // });


