import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventBusService {

  static EVENT_TITLE_CHANGED: string = 'appTitleChange';

  private messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this.messages$.next({ type: eventType, data });
  }

  observe(eventType: string) {
    return this.messages$
      .filter((message) => message.type === eventType)
      .map((message) => message.data);
  }

}

class EventBusArgs {

  type: string;

  data: any;

}
