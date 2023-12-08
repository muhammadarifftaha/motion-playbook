const angularButton = {
    ts: `import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public effect = false;

  public onClick(): void {
    this.effect = true;
  }

  public onAnimationEnd(): void {
    this.effect = false;
  }
}`,
    html: `// **/button.component.html 
<button [class.animateWiggle]="effect" class="button" (click)="onClick()" (animationend)="onAnimationEnd()">
  Wiggle wiggle...
</button>
`,
};

export default angularButton;
