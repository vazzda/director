import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'director';
  BASE_COUNTER = 5;
  TIMER = 0;
  REVEALED = false;

  dima_counter = this.BASE_COUNTER;
  maja_counter = this.BASE_COUNTER;

  dima_action = undefined;
  maja_action = undefined;

  dima_zone = undefined;
  maja_zone = undefined;

  dima_mode = undefined;
  maja_mode = undefined;

  dima_mode_bonus = undefined;
  maja_mode_bonus = undefined;

  dima_time = undefined;
  maja_time = undefined;

  dima_time_bonus = undefined;
  maja_time_bonus = undefined;

  judge_1 = [];
  judge_2 = [];
  judge_3 = [];

  ACTIONS = [
    'KISSING',
    'SUCKING',
    'LICKING',
    'BREATHING',
    'SNIFFING',
    'SLAPING',
    'HUGGING',
    'RUBING',
    'TOUCHING',
    'SLAPING',
    'FINGERING',
    'PENETRATING',
    'TWISTING',
    'GROPING',
  ];
  ZONES = [
    'LIPS',
    'ARMS/HANDS',
    'LEGS',
    'FEETS',
    'TIGHS',
    'BOOBS',
    'NIPPLES',
    'PUSSY / DICK',
    'BALLS / CLIT',
    'DICK TIP / PUSSY LIPS',
    'ASS',
    'BUTTHOLE',
    'ARMPITS',
    'HAIR',
    'NECK',
    'BACK',
  ];
  MODES = [
    ['NONE', 0],
    ['BLINDED', 1],
    ['SALIVA', 1],
    ['STREET CLOTHES', 2],
    ['TOYS: ANY', 0],
    ['TOYS: DILDO', 1],
    ['TOYS: VIBRATOR', 1],
    ['RESTRAINED', 1],
  ];
  TIME = [
    [120, 4],
    [150, 3],
    [180, 2],
    [240, 0],
    [240, 0],
    [240, 0],
    [240, 0],
    [300, -1],
  ];

  JUDGES = [
    ["Ama", "Do i see any traces of a cat?", "Do i see a cat?", "Is cat paying attention to a them? Or to the camera?"],
    ["Horny granny", "Is there a dick on a pictre?", "Is it errected?", "Is it played with?"],
    ["Fetisher", "Is there a toy on a pictre?", "Mb even two of them?", "Is the toy in action?"],
    ["Roundlover", "Are there boobs on a picture?", "Are them naked", "Anybody toching them?"],
    ["Cuturier", "Anybody wearing cloths?", "Both of them?", "One completelly naked and other is full clothed?"],
    ["Lucifer", "Any bdsm toys?", "Any restrains?", "Any signs of pain on a skin or a face?"],
    ["Photographer", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Serbian guy", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Secerna papica", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Sugardaddy", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Degrader", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Spider-man", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Business woman", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["French girl", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["German nazi princess", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
    ["Italian bold prick", "Do i see faces?", "And no legs, like portrait?", "Any eye contact with camera?"],
  ];

  ngOnInit() {
    this.new_round();
  }

  reveal() {
    this.REVEALED = true;
  }

  generate_dima() {
    if (this.dima_counter < 1) {
      return;
    }

    this.dima_counter--;

    this.dima_action = this.random_picker(this.ACTIONS);
    this.dima_zone = this.random_picker(this.ZONES);

    let mode = this.random_picker(this.MODES);
    this.dima_mode = mode[0];
    this.dima_mode_bonus = mode[1];

    let time = this.random_picker(this.TIME);
    this.dima_time = time[0];
    this.dima_time_bonus = time[1];
  }

  count_bonus_dima() {
    let total = this.dima_counter;
    if (this.dima_time_bonus) {
      total = total + this.dima_time_bonus;
    }
    if (this.dima_mode_bonus) {
      total = total + this.dima_mode_bonus;
    }
    return total;
  }

  accept_dima() {
    this.TIMER = this.dima_time!;
  }

  generate_maja() {
    if (this.maja_counter < 1) {
      return;
    }

    this.maja_counter--;

    this.maja_action = this.random_picker(this.ACTIONS);
    this.maja_zone = this.random_picker(this.ZONES);

    let mode = this.random_picker(this.MODES);
    this.maja_mode = mode[0];
    this.maja_mode_bonus = mode[1];

    let time = this.random_picker(this.TIME);
    this.maja_time = time[0];
    this.maja_time_bonus = time[1];
  }

  count_bonus_maja() {
    let total = this.maja_counter;
    if (this.maja_time_bonus) {
      total = total + this.maja_time_bonus;
    }
    if (this.maja_mode_bonus) {
      total = total + this.maja_mode_bonus;
    }
    return total;
  }

  accept_maja() {
    this.TIMER = this.maja_time!;
  }


  new_round() {
    this.dima_counter = this.BASE_COUNTER;
    this.maja_counter = this.BASE_COUNTER;

    this.dima_action = undefined;
    this.maja_action = undefined;

    this.REVEALED = false;
    this.judge_1 = this.random_picker(this.JUDGES);
    this.judge_2 = this.random_picker(this.JUDGES);
    this.judge_3 = this.random_picker(this.JUDGES);
  }

  random_picker(source: any[]) {
    let arr = source;
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr[0];
  }
}
