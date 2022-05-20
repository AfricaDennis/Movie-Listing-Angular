import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
// import { ACTORS } from '../mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  // actors = ACTORS;
  actors: Actor[] = [];
  selectedActor ?: number;

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActors();
  }

  onSelect(event: any):void {
    this.selectedActor = event;
  }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => {
      this.actors = actors
      console.log(this.actors);
    })
  }


  delete(actorId: number): void {
    this.actorService.deleteActor(actorId).subscribe();
    this.actors = this.actors.filter((f) => f.id != actorId);
  }


  imgCollection: Array<object> = [
    {
      image: 'https://www.cheatsheet.com/wp-content/uploads/2022/02/Angelina-Jolie.jpg',
      thumbImage: 'https://www.cheatsheet.com/wp-content/uploads/2022/02/Angelina-Jolie.jpg',
      alt: 'Angelina Jolie',
      title: 'Angelina Jolie',
    },

    {
      image: 'https://mocah.org/thumbnail/84239-elizabeth-olsen-celebrities-girls-hd-photoshoot.jpg',
      thumbImage: 'https://mocah.org/thumbnail/84239-elizabeth-olsen-celebrities-girls-hd-photoshoot.jpg',
      title: 'Elizabeth Olsen',
      alt: 'Elizabeth Olsen',
    },    
    {
      image: 'https://images.hdqwalls.com/wallpapers/selena-gomez-monochrome-4k.jpg',
      thumbImage: 'https://images.hdqwalls.com/wallpapers/selena-gomez-monochrome-4k.jpg',
      title: 'Selena Gomez',
      alt: 'Selena Gomez',
    },
    {
      image: 'https://i.insider.com/5f7741e574fe5b0018a8eb6d?width=700',
      thumbImage: 'https://i.insider.com/5f7741e574fe5b0018a8eb6d?width=700',
      title: 'Emma Roberts',
      alt: 'Emma Roberts',
    },
    {
      image: 'https://www.koimoi.com/wp-content/new-galleries/2022/02/kim-kardashians-faces-oops-moment-after-her-bikini-top-drops-flashing-assets-during-photoshoot-for-brand-kkw-fragrances-new-valentines-sale-002.jpg',
      thumbImage: 'https://www.koimoi.com/wp-content/new-galleries/2022/02/kim-kardashians-faces-oops-moment-after-her-bikini-top-drops-flashing-assets-during-photoshoot-for-brand-kkw-fragrances-new-valentines-sale-002.jpg',
      title: 'Kim Kardashian',
      alt: 'Kim Kardashian',
    },
  ];

}
