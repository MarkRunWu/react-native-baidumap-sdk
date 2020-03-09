/**
 * Base component, contains some utils
 */
import { PureComponent } from "react";
export default class Component<T> extends PureComponent<T> {
    /**
     * Must be defined in subclass if need to call native component method
     */
    nativeComponent: string;
    /**
     * Call native method
     */
    call(command: string, params?: any[]): void;
    /**
     * Generate event handlers
     */
    handlers(events: string[]): {};
}
