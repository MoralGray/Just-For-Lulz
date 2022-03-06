import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import * as modals from 'src/app/components/modals';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentFactoryResolver: ComponentFactoryResolver;
  private appRef: ApplicationRef;
  private readonly injector: Injector;
  private componentRef: ComponentRef<any> | null = null;
  public modalComponents = modals;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    appRef: ApplicationRef,
    injector: Injector
  ) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
  }

  /*
  * @param component - компонент модального окна для отрисовки
  * @param inputs - объект данных для передачи в декораторы @Input()
  * @param callback - функция обратного вызова срабатывающая на subscribe @output() компонента.
  * Содержит объект типа: <br>
  * {eventName - имя параметра или 'onDestroy' при уничтожении, <br>
  * data - данные subscribe}
  * @description При удалении компонента в callback приходит последнее событие с объектом {eventName: 'onDestroy'}
  *
  * */
  public openModal(component: any, inputs?: any, callback?: (event: { eventName: string, data?: any }) => void) {
    // Создание завода компонентов
    this.closeModal();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = componentFactory.create(this.injector);

    // Добавление параметров в компонент
    if (inputs) {
      for (const item in inputs) {
        if (inputs.hasOwnProperty(item)) {
          const inputIndex = componentFactory.inputs.findIndex(elem => elem.propName === item);
          if (inputIndex > -1) {
            this.componentRef.instance[item] = inputs[item];
          }
        }
      }
    }

    if (componentFactory.outputs.length && callback) {
      const subscribes: any[] = [];
      for (const item in componentFactory.outputs) {
        if (componentFactory.outputs.hasOwnProperty(item) && !!this.componentRef.instance[componentFactory.outputs[item].propName]) {
          subscribes.push(this.componentRef.instance[componentFactory.outputs[item].propName].subscribe((data: any) => {
            callback({eventName: componentFactory.outputs[item].propName, data});
          }));
        }
      }
      this.componentRef.onDestroy(() => {
        callback({eventName: 'onDestroy'});
        subscribes.forEach(item => {
          item.unsubscribe();
        });
      });
    }

    // Прикрепление компонента к DOM дереву и ангуляру
    this.appRef.attachView(this.componentRef.hostView);
    document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);

    // Отключение прокрутки body
    const paddingSize = window.innerWidth - document.documentElement.clientWidth;
    const htmlBody = document.querySelector('body');
    if (htmlBody) {
      htmlBody.style.marginRight = paddingSize + 'px';
      htmlBody.style.overflow = 'hidden';
    }
  }

  public closeModal() {
    if (this.componentRef) {
      // Включение прокрутки body
      const htmlBody = document.querySelector('body');
      if (htmlBody) {
        htmlBody.style.overflow = 'auto';
        htmlBody.style.marginRight = '0';
      }

      // Удаление компонента из DOM
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }

}
