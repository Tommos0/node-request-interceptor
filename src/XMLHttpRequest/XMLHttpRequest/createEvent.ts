import { EventOverride } from './EventOverride'

export function createEvent(options: any, target: any, type: string) {
  const progressEvents = [
    'error',
    'progress',
    'loadstart',
    'loadend',
    'load',
    'timeout',
    'abort',
  ]
  
  if (progressEvents.includes(type)) {
    const peOptions = {
      lengthComputable: true,
      loaded: options?.loaded || 0,
      total: options?.total || 0,
    };
      
    const event = typeof ProgressEvent === "undefined"
      ? { type, ...peOptions }
      : new ProgressEvent(type, peOptions);
    
    return event;
      
  } else {
    const event = new EventOverride(type, {
      target,
      currentTarget: target,
    });
    
    return event;
  }
}
