import { Component, OnInit } from '@angular/core';
import { Producer } from '../producer';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {

  // producers = PRODUCERS;
  producers: Producer[] = [];
  selectedProducer?: number;



  constructor(private producerService: ProducerService) { }

  ngOnInit(): void {
    this.getProducers();
  }

  onSelect(event: any){
    this.selectedProducer = event;
  }

  getProducers(): void {
    this.producerService.getProducers().subscribe(producers => {
      this.producers = producers
      console.log(this.producers);
    });
  }
  delete(producerId: number): void {
    this.producerService.deleteProducer(producerId).subscribe();
    this.producers = this.producers.filter((f) => f.id != producerId);
  }

  imgCollection: Array<object> = [
    {
      image: 'https://cdnb.20m.es/sites/165/2020/07/paramount-pictures.jpg',
      thumbImage: 'https://cdnb.20m.es/sites/165/2020/07/paramount-pictures.jpg',
      alt: 'Paramount',
      title: 'Paramount',
    },

    {
      image: 'https://cdnb.20m.es/sites/165/2022/05/logo-Metro-Goldwyn-Mayer.jpg',
      thumbImage: 'https://cdnb.20m.es/sites/165/2022/05/logo-Metro-Goldwyn-Mayer.jpg',
      title: 'Metro Goldwyn Mayer',
      alt: 'Metro Goldwyn Mayer',
    },    
    {
      image: 'https://i.blogs.es/fb3216/blumhouse/1366_2000.jpg',
      thumbImage: 'https://i.blogs.es/fb3216/blumhouse/1366_2000.jpg',
      title: 'Blumhouse',
      alt: 'Blumhouse',
    },
    {
      image: 'https://i.ytimg.com/vi/96dMDpgYCCY/maxresdefault.jpg',
      thumbImage: 'https://i.ytimg.com/vi/96dMDpgYCCY/maxresdefault.jpg',
      title: 'DreamWorks',
      alt: 'DreamWorks',
    },
    {
      image: 'https://i.pinimg.com/originals/7b/c0/58/7bc0586e5b3636098956e4c3d67dbcda.jpg',
      thumbImage: 'https://i.pinimg.com/originals/7b/c0/58/7bc0586e5b3636098956e4c3d67dbcda.jpg',
      title: 'Pixar',
      alt: 'Pixar',
    },
  ];

}
