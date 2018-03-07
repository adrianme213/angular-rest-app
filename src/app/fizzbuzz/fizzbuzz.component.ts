import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})

export class FizzbuzzComponent implements OnInit {
  daVar: string = 'This is the display variable bro';
  color: string = 'blue';

  constructor() {

  }

  ngOnInit() {

  }

  echo(daColor) {
    console.log(`Message ${daColor}`)
  }


}
