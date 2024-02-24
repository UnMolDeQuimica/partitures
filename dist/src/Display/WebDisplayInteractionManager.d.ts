/// <reference types="node" />
import { AbstractDisplayInteractionManager } from "./AbstractDisplayInteractionManager";
import { Dictionary } from "typescript-collections";
export declare class WebDisplayInteractionManager extends AbstractDisplayInteractionManager {
    protected osmdSheetMusicContainer: HTMLElement;
    protected fullOffsetLeft: number;
    protected fullOffsetTop: number;
    protected fullScrollTop: number;
    protected fullScrollLeft: number;
    protected parentScrollMap: Map<HTMLElement, number[]>;
    protected scrollCallbackMap: Map<HTMLElement, (this: HTMLElement, ev: Event) => any>;
    constructor(osmdContainer: HTMLElement);
    get FullOffsetTop(): number;
    get FullScrollTop(): number;
    get FullOffsetLeft(): number;
    get FullScrollLeft(): number;
    protected timeout: NodeJS.Timeout;
    protected static resizeCallback(entries: ResizeObserverEntry[] | HTMLElement[], self: WebDisplayInteractionManager): void;
    protected registerScrollOffsets(): void;
    protected deregisterScrollOffsets(): void;
    protected disposeResizeListener: Function;
    protected resizeObserver: ResizeObserver;
    protected initialize(): void;
    protected dispose(): void;
    private isTouch;
    protected get downEventName(): string;
    protected get moveEventName(): string;
    protected EventCallbackMap: Dictionary<string, [HTMLElement | Document, EventListener]>;
    private listenForInteractions;
    private readonly DOUBLE_CLICK_WINDOW;
    private clickTimeout;
    private lastClick;
    private downEventListener;
    private moveEventListener;
    private touchEndEventListener;
    private resizeEventListener;
    private getOffsetCoordinates;
}
