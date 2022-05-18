import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producer } from '../producer';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producer-card',
  templateUrl: './producer-card.component.html',
  styleUrls: ['./producer-card.component.scss']
})
export class ProducerCardComponent implements OnInit {

  @Input() producer: any;
  @Output() onProducerSelected = new EventEmitter<number>();
  @Output() onProducerDeleted = new EventEmitter<number>();
  selectedProducer ?: ProducerCardComponent;
  producers: Producer[] = [];

  constructor(private producerService: ProducerService) { }

  ngOnInit(): void {
  }

  onSelect(producer: Producer): void {
    this.onProducerSelected.next(producer.id);
  }

  delete(producer: Producer): void{
    this.producers = this.producers.filter(p => p != producer);
    this.producerService.deleteProducer(producer.id).subscribe();
    this.onProducerDeleted.emit(producer.id);
  }

}
