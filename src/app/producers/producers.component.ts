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

}
