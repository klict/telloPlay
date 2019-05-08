import {Observer} from './observer';

export class
Subject {

  private attachedObservers: Observer[] = [];

  /**
   * attach a new observer
   * @param observer Object that will observe the subject
   */
  public attach(observer: Observer): void {
    this.attachedObservers.push(observer);
  }

  /**
   * Notify all observers
   */
  protected notifyAllAttachedObservers(): void {
    /**
     * Loop through each observer and notify them of a change
     */
    for (const observer of this.attachedObservers) {
      observer.notify();
    }
  }

  /**
   * Remove observer from the attach observer
   * @param observer Object that we will remove from the observers list
   */
  public detach(observer: Observer): void {
    const arrayIndex: number = this.attachedObservers.indexOf(observer);
    if (arrayIndex >= 0) {
      this.attachedObservers.splice(arrayIndex, 1);
    } else {
      throw new Error('unknown observer');
    }
  }
}
