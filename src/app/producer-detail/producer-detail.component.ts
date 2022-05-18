import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Producer } from '../producer';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.scss']
})
export class ProducerDetailComponent implements OnInit {

  @Input() producerId?: number;

  producer: Producer | undefined;
  previousProducer: Producer | undefined;


  constructor(private producerService: ProducerService, private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['producerId'].currentValue) {
      this.getProducer(changes['producerId'].currentValue).subscribe( producer => {
        this.producer = producer;
      });
    }

    if(changes['producerId'].previousValue) {
      this.getProducer(changes['producerId'].previousValue).subscribe( producer => {
        this.previousProducer = producer;
      });
    }
  }

  ngOnInit(): void {
    this.getDetails();
  }


  getProducer(id: number): Observable<Producer | undefined> {
    return this.producerService.getProducer(id).pipe(map((producer: any) => {
      let date = new Date(producer.fundationDate);
      producer.fundationDate = date.toLocaleDateString();
      return producer;
    }));

  }

  goBack(): void {
    this.producer = this.previousProducer;
  }

  closeDetail() {
    this.producer = undefined;
  }

  getDetails(): void{
  }

}
