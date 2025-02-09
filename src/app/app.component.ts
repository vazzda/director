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
  SUPER_BONUS = 10;
  round = 0;

  dima_points = 0;
  maja_points = 0;

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

  dima_super_bonus = 0;
  maja_super_bonus = 0;

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
    'BITING',
    'GROPING',
    'CARESSING',
    'SQUEEZING',
    'MASTURBATING',
    'TYING',
    'TORTURING',
    'GRINDING',
    'SPANKING',
    'MASSAGING',
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
    'TOES',
    'EARS',
    'RIB CAGE',
    'BELLY BUTTON',
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
    ['KNIFE', 1],
    ['CONDOM', 1],
    ['LIPSTICK', 1],
    ['WRITING', 1],
    ['DARK', 1],
    ['CONSTRUCTION TOOL', 1],
    ['CANDLE', 2],
    ['CHOKING', 1],
    ['TOYS: NIPPLE CLAMPS', 1],
    ['TOYS: MOUTH GAG', 1],
    ['TOYS: PADDLE/FLOGGER/CANE/CROP/WHIP', 1],
    ['TOYS: COCK RING', 1],
    ['TOYS: BUTT PLUG', 1],
    ['COLLAR', 1],
    ['LINGERIE', 1],
    ['STOCKINGS', 1],
    ['HARNESS', 1],
    ['LATEX/LEATHER/PVC', 1],
    ['HIGH HILLS', 1],
    ['BED', 1],
    ['KITCHEN UTENSILS', 1],
    ['FOOD', 1],
    ['EARPHONES W MUSIC/VOICE ON (SOUND DEPRIVATION)', 1],
    ['HOOD', 1],
    ['BELT', 1],
    ['CHAIR', 1],
    ['GLOVES', 1],
    ['BODY WRITING', 1],
    ['ICE CUBES', 1],
    ['WAX', 1],
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
    ["Horny granny", "Is there a dick on a picture?", "Is the dick errected?", "Is it played with?"],
    ["Fetisher", "Is there a toy on a pictre?", "Mb even two of them?", "Is the toy in action?"],
    ["Roundlover", "Are there boobs on a picture?", "Are them naked", "Anybody toching them?"],
    ["Cuturier", "Anybody wearing cloths?", "Both of them wearing cloth?", "One completelly naked and other is full clothed?"],
    ["Lucifer", "Any bdsm toys?", "Any restrains?", "Any signs of pain on a skin or a face?"],
    ["Photographer", "Do i see faces?", "Like portrait, with face and torso only?", "Any eye contact with camera?"],
    ["Alien", "Do i see at least one genitals?", "Mb two of them?", "Mb three? Replicas like dildo counted!"],
    ["VOYEUR NEIGHBOR", "Are they close enough to the windows?", "Are they having sex?", "Are they naked!"],
    ["DUNGEON MASTER/MONITOR", " Is their play SSC (safe, sane, consensual)?", "Are they following the rules?", "Did they use any equipment?"],
    ["DEVIANT", "Is the picture non-vanilla?", "Is anyone restrained?", "Are they using more toys at once?"],
    ["PRINCESS", "Is at least one person dressed?", " Is someone being served?", "Is there a damsel in distress?"],
    ["BIG BROTHER", "Is everyone visible in the picture?", " Is everyone involved?", "Will this increase the ratings?"],
    ["KITTEN", "Is there any milk in the picture?", "Is anyone cuddling in the picture?", "Is anyone standing/walking on all fours/knees?"],
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

  dima_super_roll() {
    this.generate_dima();
    this.dima_counter = 0;
    this.dima_super_bonus = this.SUPER_BONUS;

  }

  count_bonus_dima() {
    let total = this.dima_counter;
    if (this.dima_time_bonus) {
      total = total + this.dima_time_bonus;
    }
    if (this.dima_mode_bonus) {
      total = total + this.dima_mode_bonus;
    }
    if (this.dima_super_bonus) {
      total = total + this.dima_super_bonus;
    }
    return total;
  }

  accept_dima() {
    this.TIMER = this.dima_time!;
    this.dima_points = this.dima_points + this.count_bonus_dima();
  }

  dima_add_points(points:number) {
    this.dima_points = this.dima_points + points;
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

  maja_super_roll() {
    this.generate_maja();
    this.maja_counter = 0;
    this.maja_super_bonus = this.SUPER_BONUS;

  }

  count_bonus_maja() {
    let total = this.maja_counter;
    if (this.maja_time_bonus) {
      total = total + this.maja_time_bonus;
    }
    if (this.maja_mode_bonus) {
      total = total + this.maja_mode_bonus;
    }
    if (this.maja_super_bonus) {
      total = total + this.maja_super_bonus;
    }
    return total;
  }

  accept_maja() {
    this.TIMER = this.maja_time!;
    this.maja_points = this.maja_points + this.count_bonus_maja();
  }

  maja_add_points(points:number) {
    this.maja_points = this.maja_points + points;
  }

  new_round() {
    this.round = this.round + 1;
    this.dima_counter = this.BASE_COUNTER;
    this.maja_counter = this.BASE_COUNTER;

    this.dima_action = undefined;
    this.maja_action = undefined;

    this.dima_super_bonus = 0;
    this.maja_super_bonus = 0;

    this.REVEALED = false;
    this.judge_1 = this.random_picker(this.JUDGES);
    this.judge_2 = this.random_picker(this.JUDGES);
    this.judge_3 = this.random_picker(this.JUDGES);
  }

  new_game() {
    this.round = 0;
    this.dima_points = 0;
    this.maja_points = 0;

    this.new_round();
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
