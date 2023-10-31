export interface SimulationModel {
    persona: Persona;
    destiny: Destiny;
    period: Period
}

export interface Persona {
    who: string;
    reason: string;
}

export interface Destiny {
    where: string;
    state: string;
}

export interface Period {
    endDate: Date;
    startDate: Date;
}