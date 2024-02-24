export interface IPlaybackParametersListener {
    bpmChanged(newBpm: number, sheetOverride: boolean): void;
    volumeChanged(instrumentId: number, newVolume: number): void;
    volumeMute(instrumentId: number): void;
    volumeUnmute(instrumentId: number): void;
    play(): Promise<void>;
    pause(): Promise<void>;
    reset(): void;
}
