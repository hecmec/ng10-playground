import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  Inject,
} from '@angular/core';
import { DataService } from '../service/data.service';
import { LazyChildComponent } from '../lazy-child/lazy-child.component';

@Component({
  templateUrl: './lazy-comp-a.component.html',
  styleUrls: ['./lazy-comp-a.component.css'],
})
export class LazyCompAComponent implements OnInit {
  @ViewChild('child', { read: ViewContainerRef })
  childCompContainer: ViewContainerRef;

  childComp: LazyChildComponent;
  childCompTwo: LazyChildComponent;
  inputData: string;

  //
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    public dataService: DataService,
    @Inject('childComp') data
  ) {
    this.inputData = data;
  }

  async ngOnInit() {
    await this.loadAtEndOfDom();

    await this.loadIntoContainer();
  }

  async loadAtEndOfDom() {
    // you never know
    this.viewContainerRef.clear();

    // import the component, this is async
    const { LazyChildComponent } = await import(
      '../lazy-child/lazy-child.component'
    );

    // create a factory using a factoryResolver
    const myFactory = this.cfr.resolveComponentFactory(LazyChildComponent);

    // Creates a component  on a container and returns a component Reference
    const componentReference = this.viewContainerRef.createComponent(myFactory);

    this.childComp = componentReference.instance;
    this.childComp.data = 'Data: this is set in compA on its child';

    this.childComp.emitter.subscribe(console.log);
  }

  async loadIntoContainer() {
    // import the component, this is async
    const { LazyChildComponent } = await import(
      '../lazy-child/lazy-child.component'
    );
    /**
     * Lazy load the component using ViewChild
     */
    const componentReference = this.childCompContainer.createComponent(
      this.cfr.resolveComponentFactory(LazyChildComponent)
    );

    this.childCompTwo = componentReference.instance;
    this.childCompTwo.data = "Hi I'm compA as injected into ng-template.";
    this.childCompTwo.emitter.subscribe(console.log);
  }
}
