const angularLoadingWaves = {
    ts: `import { Component } from "@angular/core";

    @Component({
        selector: "app-loading-waves",
        templateUrl: "./loading-waves.component.html",
        styleUrls: ["./loading-waves.component.scss"],
    })
    export class LoadingWavesComponent {}`,
    html: `<div class="wave">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div>`,
};
export default angularLoadingWaves;
