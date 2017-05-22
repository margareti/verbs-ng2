export interface Verb {
    letter?: string;
    level?: string;
    russian?: string;
    disabled?: boolean;
    tense?: {
        present?: string;
        past?: string;
        pastParticiple?: string;
    };
    stats?: {
        error?: number;
        success?: number;
    };
    challenge?: {
        tense?: string;
        response?: string;
    };
}
